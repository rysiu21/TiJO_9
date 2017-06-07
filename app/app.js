function isPrime(value)
{
    for (var i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function areaOfTrapezoid(a, b, h)
{
    if (a < 0 || b < 0 || h < 0 || typeof a !== 'number' || typeof b !== 'number' || typeof h !== 'number') {
        return false;
    }
    return 0.5 * h * (a + b);
}
module.exports = {
    isPrime: isPrime,
    areaOfTrapezoid: areaOfTrapezoid
};