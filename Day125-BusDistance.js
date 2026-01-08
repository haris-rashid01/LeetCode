/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    if (start > destination) {
        [start, destination] = [destination, start];
    }

    let clockwise = 0;
    let total = 0;

    for (let i = 0; i < distance.length; i++) {
        total += distance[i];

        if (i >= start && i < destination) {
            clockwise += distance[i];
        }
    }

    let anticlockwise = total - clockwise;
    return Math.min(clockwise, anticlockwise);
};

let distance = [1, 2, 3, 4], start = 0, destination = 3;
console.log(distanceBetweenBusStops(distance, start, destination));
