require("mocha");
require("chai");
const { expect } = require("chai");
const flavorText = require("./index");

describe("flavor tests", () => {
    let flavor;
    
    beforeEach(() => {
        flavor = new flavorText();
    });

    it("returns text converted to uppercase", () => {
        let actual = flavor.loud("why are you yelling");
        let expected = "WHY ARE YOU YELLING";
        expect(actual).to.equal(expected);
    });

    it("returns text converted to lowercase", () => {
        let actual = flavor.soft("PSST");
        let expected = "psst";
        expect(actual).to.equal(expected);
    });

    it("returns text wrapped in ~", () => {
        let actual = flavor.wavy("nice");
        let expected = "~nice~";
        expect(actual).to.equal(expected);
    });

    it("returns text with a space added between every letter", () => {
        let actual = flavor.spacy("wow");
        let expected = "w o w";
        expect(actual).to.equal(expected);
    });

    it("returns text with a period added after every word", () => {
        let actual = flavor.period("what do you mean");
        let expected = "what. do. you. mean.";
        expect(actual).to.equal(expected);
    });

    it("returns text with ... added after every word", () => {
        let actual = flavor.trailing("if you say so");
        let expected = "if... you... say... so...";
        expect(actual).to.equal(expected);
    });
});