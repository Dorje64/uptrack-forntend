export default function dateInWords(str) {
  const strDate = str.substr(0, str.indexOf('T'));
  const date = new Date(strDate);
  return date.toDateString();
}
