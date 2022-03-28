// Code your solution in this file!
const returnFirstTwoDrivers = drivers => (drivers.slice(0,2))
const returnLastTwoDrivers = drivers => (drivers.slice(-2))
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

createFareMultiplier = (num) => {return (fare)=>{return num*fare};}

function fareDoubler(fare) {
    return fare * 2
}
function fareTripler(fare) {
    return fare * 3
}
function selectDifferentDrivers(arrayOfDrivers, name) {
    return name(arrayOfDrivers)
}


