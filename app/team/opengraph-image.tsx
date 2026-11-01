// The team page shares the site card; a page-level openGraph block would otherwise drop it.
export { alt, contentType, default, size } from "../opengraph-image";
// Route config must be declared in this file; a re-export is not picked up.
export const dynamic = "force-static";
