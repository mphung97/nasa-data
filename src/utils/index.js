export function toShortDay(string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(string);

  return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}