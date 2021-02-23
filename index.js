// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance < 2000) {
        //return parseFloat(((distance * 0.02) - 8).toFixed(2));
        return (distance * 0.02 - 8).toFixed(2);
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}

