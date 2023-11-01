// Code your solution in this file!
function distanceFromHqInBlocks (location) { 
    return Math.abs(location - 42);
  };

  function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance)*264;
  };
  
  function distanceTravelledInFeet (start, destination) {
    let distance = Math.abs(start - destination)
    return distance*264;
  };

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const newDistance = distanceTravelledInFeet(start, destination);
    if (newDistance < 400) {
        return 0;
    } else if (newDistance < 2000) {
        return ((newDistance - 400)*2)/100;
    } else if (newDistance > 2000 && newDistance < 2500) {
        return 25.00;
    } else if (newDistance > 2500) {
        return 'cannot travel that far';
    }
  }