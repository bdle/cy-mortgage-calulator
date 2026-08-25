export const SHORT_WAIT = 15000;
export const MEDIUM_WAIT = 30000;
export const LONG_WAIT = 60000;

export function getRandomQuarterUpInterestRate(min, max) {
    // Generate random number between min and max
    const randomNum = Math.random() * (max - min) + min;

    // Round up to the nearest 0.25 quarter
    return Math.ceil(randomNum * 4) / 4;
}

console.log(getRandomQuarterUpInterestRate(6.0, 7.0));

/**
 * To generate a random number between 0 and 100 
 * and round it up to the nearest multiple of 25 (resulting in 0, 25, 50, 75, or 100)
 */
export function getRandomNearestMultipleOf25() {
    return Math.ceil((Math.random() * 100) / 25) * 25;
}

console.log(getRandomNearestMultipleOf25());