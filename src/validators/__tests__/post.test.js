const { validatePost } = require("../post");
test("valid post passes", () => {
  const r = validatePost({ title: "Hello", body: "This is long enough." });
  expect(r.ok).toBe(true);
  expect(r.errors).toHaveLength(0);
});
test("missing title and short body", () => {
  const r = validatePost({ title: "   ", body: "short" });
  expect(r.ok).toBe(false);
  expect(r.errors).toEqual(expect.arrayContaining(["TITLE_REQUIRED","BODY_TOO_SHORT"]));
});
test("too long title", () => {
  const long = "T".repeat(81);
  const r = validatePost({ title: long, body: "valid body content" });
  expect(r.ok).toBe(false);
  expect(r.errors).toContain("TITLE_TOO_LONG");
});
test("missing body", () => {
  const r = validatePost({ title: "Ok", body: "   " });
  expect(r.ok).toBe(false);
  expect(r.errors).toContain("BODY_REQUIRED");
});

test("undefined input triggers required errors", () => {
  const r = validatePost();
  expect(r.ok).toBe(false);
  expect(r.errors).toEqual(expect.arrayContaining(["TITLE_REQUIRED", "BODY_REQUIRED"]));
});
