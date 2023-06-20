import {describe} from "mocha";
import {isUndefined} from "./isUndefined";
import {expect} from "chai";

describe('isUndefined', () => {
    it('should expect `undefined` is undefined', () => {
        const testedValue = undefined;

        const result = isUndefined(testedValue);

        expect(result).to.be.true;
    });

    it('should expect `null` is not undefined', () => {
        const testedValue = null;

        const result = isUndefined(testedValue);

        expect(result).to.be.false;
    });

    it('should expect zero is not undefined', () => {
        const testedValue = 0;

        const result = isUndefined(testedValue);

        expect(result).to.be.false;
    });

    it('should expect empty string is not undefined', () => {
        const testedValue = '';

        const result = isUndefined(testedValue);

        expect(result).to.be.false;
    });

    it('should expect `NaN` is not undefined', () => {
        const testedValue = NaN;

        const result = isUndefined(testedValue);

        expect(result).to.be.false;
    });

    it('should expect `true` is not undefined', () => {
        const testedValue = true;

        const result = isUndefined(testedValue);

        expect(result).to.be.false;
    });

    it('should expect `false` is not undefined', () => {
        const testedValue = false;

        const result = isUndefined(testedValue);

        expect(result).to.be.false;
    });

    it('should object is not undefined', () => {
        const testedValue = {};

        const result = isUndefined(testedValue);

        expect(result).to.be.false;
    });
});
