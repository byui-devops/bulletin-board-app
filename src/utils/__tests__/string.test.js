const { trimAndCollapseSpaces, capitalizeWords, ellipsize, isBlank } = require("../string");
test("trimAndCollapseSpaces", () => {
  expect(trimAndCollapseSpaces("  hello    world  ")).toBe("hello world");
});
test("capitalizeWords", () => {
  expect(capitalizeWords("  aLiCe   bOB ")).toBe("Alice Bob");
});
test("ellipsize under limit", () => {
  expect(ellipsize("short", 10)).toBe("short");
});
test("ellipsize truncates", () => {
  expect(ellipsize("abcdef", 5)).toBe("ab...");
});
test("ellipsize throws when max < 3", () => {
  expect(() => ellipsize("abc", 2)).toThrow(/max/);
});
test("isBlank", () => {
  expect(isBlank("   ")).toBe(true);
  expect(isBlank(null)).toBe(true);
  expect(isBlank("x")).toBe(false);
});

test("capitalizeWords handles empty input", () => {
  expect(capitalizeWords("   ")).toBe("");
});
