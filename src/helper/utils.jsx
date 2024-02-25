import config from "../Config/Config";

export function convertDateFormat(dateString) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed, so add 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
export function convertTimeFormat(timeString) {
  const date = new Date(timeString);

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  return `${formattedHours}:${minutes} ${period}`;
}

export function FilesUrl (url){
  return `${config.apiGateway?.URL}/${url}`
}