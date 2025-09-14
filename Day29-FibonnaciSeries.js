/**
 * @param {number} num
 * @return {Generator<number>}
 */
var fibGenerator = function* (num) {
    let a = 0;
    let b = 1;
    let c = 0;

    if (num >= 1) yield a;
    if (num >= 2) yield b;

    for (let i = 2; i < num; i++) {
        c = a + b;
        yield c;
        a = b;
        b = c;
    }
};

/**
 * const gen = fibGenerator(6);
 * gen.next().value; // 0
 * gen.next().value; // 1
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 * gen.next().value; // 5
 */
const gen = fibGenerator(6);
for (let val of gen) {
    console.log(val);
}
