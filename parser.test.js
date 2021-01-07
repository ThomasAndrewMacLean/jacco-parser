const { parse } = require("./parser");

describe("parser", () => {
  it("should return object if no arguments", () => {
    expect(parse("", "", {})).toEqual({});
  });

  it("should return object if no object is given", () => {
    expect(parse("", "")).toEqual({});
  });

  it("should add a single value to the object", () => {
    expect(parse("a", "b", {})).toEqual({ a: "b" });
  });

  it("should add a nested value to the object", () => {
    expect(parse("a.b", "c", {})).toEqual({ a: { b: "c" } });
  });

  it("should add a nested value to the object", () => {
    expect(parse("a.b.c.d", "e", {})).toEqual({ a: { b: { c: { d: "e" } } } });
  });

  it("should respect the initial object", () => {
    expect(parse("a.b", "c", { d: "e" })).toEqual({
      a: { b: "c" },
      d: "e",
    });
  });
});
