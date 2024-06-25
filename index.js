// Code your solution in this file!

// Function to calculate the number of blocks from Scuber headquarters (42nd street)
 function distanceFromHqInBlocks(street) {
    const hqStreet = 42; // Headquarter is at 42nd street
    return Math.abs(street - hqStreet);
}

// Function to calculate the distance from Scuber headquarters in feet
function distanceFromHqInFeet(street) {
    const blocks = distanceFromHqInBlocks(street); //Number of blocks from headquarters
    const feetPerBlock = 264; // 1 block is 264 feet
    return blocks * feetPerBlock;
}

// Function to calculate the distance travelled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start); // Number of blocks between start and destination
    const feetPerBlock = 264; // 1 block is 264 feet
    return blocks * feetPerBlock;
}

// Function to calculate the fare price based on the distance travelled in feet
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if(distance <= 400) {
        return 0; //free sample for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; //2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; //Flat fare of $25 for distances over 2000 feet but within 2500 feet
    } else {
        return 'cannot travel that far'; //Distance over 2500 feet is not allowed
    }
}