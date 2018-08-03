import { trialDivision } from './';

describe('trialDivision', () => {
  it('should detect prime numbers', () => {
    expect(trialDivision(2)).toBeTruthy();
    expect(trialDivision(3)).toBeTruthy();
    expect(trialDivision(5)).toBeTruthy();
    expect(trialDivision(11)).toBeTruthy();
    expect(trialDivision(191)).toBeTruthy();
    expect(trialDivision(199)).toBeTruthy();

    expect(trialDivision(4)).toBeFalsy();
    expect(trialDivision(6)).toBeFalsy();
    expect(trialDivision(12)).toBeFalsy();
    expect(trialDivision(14)).toBeFalsy();
    expect(trialDivision(25)).toBeFalsy();
    expect(trialDivision(192)).toBeFalsy();
    expect(trialDivision(200)).toBeFalsy();
    expect(trialDivision(400)).toBeFalsy();

    expect(trialDivision(-1)).toBeFalsy();
    expect(trialDivision(0)).toBeFalsy();
    expect(trialDivision(0.5)).toBeFalsy();
    expect(trialDivision(1)).toBeFalsy();
    expect(trialDivision(1.3)).toBeFalsy();
    expect(trialDivision(10.5)).toBeFalsy();
  });
});
