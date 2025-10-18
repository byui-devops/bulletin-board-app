function trimAndCollapseSpaces(s = "") {
  return String(s).trim().replace(/\s+/g, " ");
}
function capitalizeWords(s = "") {
  return trimAndCollapseSpaces(s)
    .split(" ")
    .map(w => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ""))
    .join(" ");
}
function ellipsize(s = "", max = 140) {
  const str = String(s);
  if (max < 3) throw new RangeError("max must be >= 3");
  if (str.length <= max) return str;
  return str.slice(0, max - 3) + "...";
}
function isBlank(s) {
  return !trimAndCollapseSpaces(s || "");
}
module.exports = { trimAndCollapseSpaces, capitalizeWords, ellipsize, isBlank };
