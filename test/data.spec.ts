import { assert } from "chai";
import findCommonChars from "../src/data";

describe("common char Tests", () => {
  it("it should return  [{ a: 1 }, { b: 2 }, { c: 2 }]", () => {
    const result = findCommonChars("abbbccdfa", "abbccc");
    assert.deepEqual(result, [{ a: 1 }, { b: 2 }, { c: 2 }]);
  });
  it("it should return [] ", () => {
   const result = findCommonChars("bb", "ff");
   assert.deepEqual(result, []);
 });
});
