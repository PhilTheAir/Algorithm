export const getBitAt = (number, bitPosition) => (number >> bitPosition) & 1;

export const setBit1At = (number, bitPosition) => number | (1 << bitPosition);

export const setBit0At = (number, bitPosition) => number & ~(1 << bitPosition);

export const multiplyByTwo = number => number << 1;

export const divideByTwo = number => number >> 1;

export const switchSign = number => ~number + 1;