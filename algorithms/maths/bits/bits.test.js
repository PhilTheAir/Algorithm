import { getBitAt, setBit1At, setBit0At, multiplyByTwo, divideByTwo, switchSign } from './';

describe('getBitAt', () => {
  it('should get bit at specific position', () => {
    // 1 = 0b0001
    expect(getBitAt(1, 0)).toBe(1);
    expect(getBitAt(1, 1)).toBe(0);

    // 2 = 0b0010
    expect(getBitAt(2, 0)).toBe(0);
    expect(getBitAt(2, 1)).toBe(1);

    // 3 = 0b0011
    expect(getBitAt(3, 0)).toBe(1);
    expect(getBitAt(3, 1)).toBe(1);

    // 10 = 0b1010
    expect(getBitAt(10, 0)).toBe(0);
    expect(getBitAt(10, 1)).toBe(1);
    expect(getBitAt(10, 2)).toBe(0);
    expect(getBitAt(10, 3)).toBe(1);
  });
});

describe('setBit1At', () => {
  it('should set bit at specific position', () => {
    // 1 = 0b0001
    expect(setBit1At(1, 0)).toBe(1);
    expect(setBit1At(1, 1)).toBe(3);
    expect(setBit1At(1, 2)).toBe(5);

    // 10 = 0b1010
    expect(setBit1At(10, 0)).toBe(11);
    expect(setBit1At(10, 1)).toBe(10);
    expect(setBit1At(10, 2)).toBe(14);
  });
});

describe('setBit0At', () => {
  it('should clear bit at specific position', () => {
    // 1 = 0b0001
    expect(setBit0At(1, 0)).toBe(0);
    expect(setBit0At(1, 1)).toBe(1);
    expect(setBit0At(1, 2)).toBe(1);

    // 10 = 0b1010
    expect(setBit0At(10, 0)).toBe(10);
    expect(setBit0At(10, 1)).toBe(8);
    expect(setBit0At(10, 3)).toBe(2);
  });
});

describe('multiplyByTwo', () => {
  it('should multiply numbers by two using bitwise operations', () => {
    expect(multiplyByTwo(0)).toBe(0);
    expect(multiplyByTwo(1)).toBe(2);
    expect(multiplyByTwo(3)).toBe(6);
    expect(multiplyByTwo(10)).toBe(20);
    expect(multiplyByTwo(17)).toBe(34);
    expect(multiplyByTwo(125)).toBe(250);
  });
});

describe('divideByTwo', () => {
  it('should divide numbers by two using bitwise operations', () => {
    expect(divideByTwo(0)).toBe(0);
    expect(divideByTwo(1)).toBe(0);
    expect(divideByTwo(3)).toBe(1);
    expect(divideByTwo(10)).toBe(5);
    expect(divideByTwo(17)).toBe(8);
    expect(divideByTwo(125)).toBe(62);
  });
});

describe('switchSign', () => {
  it('should switch the sign of the number using twos complement approach', () => {
    expect(switchSign(0)).toBe(0);
    expect(switchSign(1)).toBe(-1);
    expect(switchSign(-1)).toBe(1);
    expect(switchSign(32)).toBe(-32);
    expect(switchSign(-32)).toBe(32);
    expect(switchSign(23)).toBe(-23);
    expect(switchSign(-23)).toBe(23);
  });
});