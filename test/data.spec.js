"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const data_1 = __importDefault(require("../src/data"));
describe("common char Tests", () => {
    it("it should return  [{ a: 1 }, { b: 2 }, { c: 2 }]", () => {
        const result = (0, data_1.default)("abbbccdfa", "abbccc");
        chai_1.assert.deepEqual(result, [{ a: 1 }, { b: 2 }, { c: 2 }]);
    });
    it("it should return [] ", () => {
        const result = (0, data_1.default)("bb", "ff");
        chai_1.assert.deepEqual(result, []);
    });
});
