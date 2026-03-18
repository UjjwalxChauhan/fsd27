// let date = new Date("2026-02-25");
// date.setMonth(2);
// console.log(date);

import { Temporal } from "@js-temporal/polyfill";

// Current exact UTC timestamp
let n = Temporal.Now.instant();
console.log(n);

// Use PlainDate for date
let date = Temporal.PlainDate.from("2026-02-25");

console.log(date.year);   // 2026
console.log(date.month);  // 2
console.log(date.day);    // 25

// Add 10 days
let newDate = date.add({ days: 10 });
console.log(newDate);     // 2026-03-07

// Use PlainTime for time only
let time = Temporal.PlainTime.from("14:30:00");

console.log(time.hour);   // 14
console.log(time.minute); // 30

let z = Temporal.ZonedDateTime.from(
  "2026-02-25T14:30:00+05:30[Asia/Kolkata]");

console.log(z);

// Change timezone (same instant, different zone)
let newTimezone = z.withTimeZone("America/New_York");
console.log(newTimezone);

// Duration
let duration = Temporal.Duration.from({ days: 5, hours: 3 });
console.log(duration);