const TIME_ZONE = "Africa/Dar_es_Salaam";

const timeFormat = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: TIME_ZONE });

/** "08:00–17:30 EAT" from two ISO timestamps. */
export function timeRange(startIso: string, endIso: string): string {
  return `${timeFormat.format(new Date(startIso))}–${timeFormat.format(new Date(endIso))} EAT`;
}

/** "TZS 250,000" */
export function tzs(amount: number): string {
  return `TZS ${amount.toLocaleString("en-US")}`;
}

/** Whole days from now until the start, or a status once it has begun. */
export function countdownLabel(startIso: string, endIso: string, now: number = Date.now()): string {
  const start = new Date(startIso).getTime();
  const end = new Date(endIso).getTime();
  if (now >= end) return "Event concluded";
  if (now >= start) return "Happening today";
  const days = Math.ceil((start - now) / 86_400_000);
  return days === 1 ? "Tomorrow" : `In ${days} days`;
}
