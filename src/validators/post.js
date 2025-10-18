const { isBlank, trimAndCollapseSpaces } = require("../utils/string");
function validatePost({ title, body } = {}) {
  const errors = [];
  const value = {
    title: trimAndCollapseSpaces(title || ""),
    body: trimAndCollapseSpaces(body || "")
  };
  if (isBlank(value.title)) errors.push("TITLE_REQUIRED");
  if (value.title.length > 80) errors.push("TITLE_TOO_LONG");
  if (isBlank(value.body)) errors.push("BODY_REQUIRED");
  if (value.body.length < 10) errors.push("BODY_TOO_SHORT");
  return { ok: errors.length === 0, errors, value };
}
module.exports = { validatePost };
