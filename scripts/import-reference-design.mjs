/**
 * Capture the original site design as local, deployable assets.
 * Usage: node scripts/import-reference-design.mjs [path-to-apicon-web]
 * Normal builds use the checked-in snapshot and do not need the source project.
 */
import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postcss from "postcss";
import selectorParser from "postcss-selector-parser";

const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.resolve(process.argv[2] ?? path.join(root, "../apicon-web"));
const scope = ":where(.reference-design)";

function scopeCss(css) {
  const tree = postcss.parse(css);
  tree.walkComments((comment) => {
    if (!comment.text.startsWith("!")) comment.remove();
  });
  tree.walkRules((rule) => {
    if (rule.parent.type === "atrule" && /keyframes$/i.test(rule.parent.name)) return;
    rule.selector = selectorParser((selectors) => {
      selectors.each((selector) => {
        let text = selector.toString().trim();
        if (/^(?:html|:root|body)(?=[\s.:#[>+~]|$)/.test(text)) {
          text = text.replace(/^(?:html|:root|body)/, scope);
          text = text.replace(/\s+body\b/, "");
        } else if (/^\[data-theme=/.test(text)) {
          text = text.replace(/^(\[data-theme=[^\]]+\])(?:\s+(?:html|body))?/, `$1 ${scope}`);
        } else {
          text = `${scope} ${text}`;
        }
        selector.replaceWith(selectorParser().astSync(text).first);
      });
    }).processSync(rule.selector);
  });
  return tree.toString();
}

function sectionRange(markup, id) {
  const opening = new RegExp(`<section\\b[^>]*\\bid="${id}"[^>]*>`).exec(markup);
  if (!opening) throw new Error(`Missing reference section: ${id}`);
  const tags = /<\/?section\b[^>]*>/g;
  tags.lastIndex = opening.index;
  let depth = 0;
  for (let tag = tags.exec(markup); tag; tag = tags.exec(markup)) {
    depth += tag[0].startsWith("</") ? -1 : 1;
    if (depth === 0) return { start: opening.index, end: tags.lastIndex };
  }
  throw new Error(`Unclosed reference section: ${id}`);
}

await mkdir(path.join(root, "content/reference"), { recursive: true });
await mkdir(path.join(root, "public/reference"), { recursive: true });

const legacySource = await readFile(path.join(source, "lib/legacy-content.ts"), "utf8");
const literal = /export const homeMarkup: string = (".*");/.exec(legacySource);
if (!literal) throw new Error("Cannot read reference homepage markup");
let markup = JSON.parse(literal[1]);
const additions = await readFile(path.join(source, "lib/home-content.ts"), "utf8");
const partner = /const ctfZonePartner = '([^\n]*)';/.exec(additions)?.[1];
if (partner) {
  markup = markup.replace('<div aria-label="APICon Tanzania partner brands" class="partner-brand-list">',
    `<div aria-label="APICon Tanzania partner brands" class="partner-brand-list">${partner}`);
}
markup = markup.replaceAll("/assets/", "/reference/assets/")
  .replaceAll('href="#team"', 'href="/#speakers"')
  .replaceAll('href="#', 'href="/#');

const navEnd = markup.indexOf("</nav>") + "</nav>".length;
const footerStart = markup.indexOf("<footer");
const marketplace = sectionRange(markup, "marketplace");
const speakers = sectionRange(markup, "team");
if (navEnd < 6 || footerStart < speakers.end) throw new Error("Unexpected reference page structure");

const sections = {
  referenceHeader: markup.slice(0, navEnd),
  beforeMarketplace: markup.slice(navEnd, marketplace.start),
  afterMarketplace: markup.slice(marketplace.end, speakers.start),
  afterSpeakers: markup.slice(speakers.end, footerStart),
  referenceFooter: markup.slice(footerStart),
};
await writeFile(path.join(root, "content/reference/home.ts"),
  "// Snapshot of apicon-web; regenerate with scripts/import-reference-design.mjs.\n" +
  Object.entries(sections).map(([key, value]) => `export const ${key} = ${JSON.stringify(value)};`).join("\n") + "\n");

await cp(path.join(source, "public/assets"), path.join(root, "public/reference/assets"), { recursive: true });

const bootstrapResponse = await fetch("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css");
if (!bootstrapResponse.ok) throw new Error("Could not capture Bootstrap 5.3.3 styles");
const bootstrap = await bootstrapResponse.text();
const legacyCss = (await readFile(path.join(source, "public/css/style.css"), "utf8"))
  .replaceAll("../assets/", "/reference/assets/")
  .replaceAll("url(assets/", "url(/reference/assets/");
const reset = `${scope}{font-family:Inter,sans-serif;-webkit-font-smoothing:auto;text-rendering:auto}
${scope} :where(h1,h2,h3,h4,h5,h6){letter-spacing:normal;text-wrap:initial}
${scope} :where(p){text-wrap:initial}
`;
await writeFile(path.join(root, "public/reference/design.css"),
  "/* Original Bootstrap 5.3.3 and apicon-web styles, scoped to reference sections. */\n" +
  scopeCss(bootstrap) + "\n" + reset + scopeCss(legacyCss));

let interactions = await readFile(path.join(source, "components/use-legacy-interactions.ts"), "utf8");
interactions = interactions
  .replace('Boolean(document.querySelector(".page-header"))', 'location.pathname !== "/"')
  .replace('document.body.classList.add("has-pointer");',
    'const referenceRoot = document.querySelector<HTMLElement>(".reference-design");\n  if (!referenceRoot) return;\n  referenceRoot.classList.add("has-pointer");')
  .replace("document.body.append(dot, ring);", "referenceRoot.append(dot, ring);")
  .replace('document.body.classList.remove("has-pointer");', 'referenceRoot.classList.remove("has-pointer");')
  .replace('goTo(0);\n  };', 'goTo(0);\n    cleanups.push(() => dots.replaceChildren());\n  };');
await writeFile(path.join(root, "components/layout/use-reference-interactions.ts"),
  "// Adapted from apicon-web; scoped pointer effects and route-aware initialization.\n" + interactions);
console.log("Imported reference markup, scoped CSS, images, and interactions.");
