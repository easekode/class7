const nowInUtc = new Date();
console.log(nowInUtc);
console.log(nowInUtc.toDateString());
console.log(nowInUtc.toLocaleDateString());
console.log(nowInUtc.toLocaleTimeString());
const timeInUS = nowInUtc.toLocaleTimeString('en-US', {
  timeZone: 'America/New_York',
});

console.log(timeInUS);

const timeInIndia = nowInUtc.toLocaleTimeString('en-US', {
  timeZone: 'Asia/Kolkata',
});
console.log(timeInIndia);
//https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
console.log(nowInUtc.getFullYear());
console.log(nowInUtc.getDay());
console.log(nowInUtc.getTimezoneOffset() / 60);
console.log(nowInUtc.getHours());
