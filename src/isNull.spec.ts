import { describe } from 'mocha';
import { isNull } from './isNull';
import { expect } from 'chai';

describe('isNull', () => {
  it('should expect `null` is null', () => {
    const testedValue = null;

    const result = isNull(testedValue);

    expect(result).to.be.true;
  });

  it('should expect `undefined` is not null', () => {
    const testedValue = undefined;

    const result = isNull(testedValue);

    expect(result).to.be.false;
  });

  it('should expect zero is not null', () => {
    const testedValue = 0;

    const result = isNull(testedValue);

    expect(result).to.be.false;
  });

  it('should expect empty string is not null', () => {
    const testedValue = '';

    const result = isNull(testedValue);

    expect(result).to.be.false;
  });

  it('should expect `NaN` is not null', () => {
    const testedValue = NaN;

    const result = isNull(testedValue);

    expect(result).to.be.false;
  });

  it('should expect `true` is not null', () => {
    const testedValue = true;

    const result = isNull(testedValue);

    expect(result).to.be.false;
  });

  it('should expect `false` is not null', () => {
    const testedValue = false;

    const result = isNull(testedValue);

    expect(result).to.be.false;
  });

  it('should expect object is not null', () => {
    const testedValue = {};

    const result = isNull(testedValue);

    expect(result).to.be.false;
  });
});
