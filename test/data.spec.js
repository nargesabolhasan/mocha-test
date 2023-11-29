"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const data_1 = require("../src/data");
describe("Calculator Tests", () => {
    it("should return 5 when 2 is added to 3", () => {
        const result = (0, data_1.addition)(2, 3);
        chai_1.assert.equal(result, 5);
    });
});
