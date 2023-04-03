
// Addition of Time

// let fixedTime = "10:30:00 PM"
// function additionOfTime(fixedTime) {
//     let [fixedHours, fixedMinutesMeridiem] = fixedTime.split(":")
//     let [fixedMinutes, fixedMeridiem] = fixedMinutesMeridiem.split(" ")
//     const date = new Date()
//     let hours = date.getHours()
//     let minutes = date.getMinutes()
//     let seconds = date.getSeconds()
//     let meridiem = hours > 12 ? "PM": "AM"

//     console.log(hours, meridiem)

// }
// additionOfTime(fixedTime)



// Convert String Time to Number Time
function stringTimeToNumber(startTime) {
    const [startHours, startMinutes, startSecondsMeridiem] = startTime.split(":")
    const [startSecond, meridiem] = startSecondsMeridiem.split(" ")
    return {
        hours: +startHours,
        minutes: +startMinutes,
        second: +startSecond,
        meridiem
    }
}

let fixedTime = "10:40:00 AM"
let limitTime = "5:35:00 AM"

// Calculate the duration between two from AM to AM
function calculateAMtoAM(fixedTime, limitTime) {
    let hours
    let minutes
    let seconds
    const startTime = stringTimeToNumber(fixedTime)
    const endTime = stringTimeToNumber(limitTime)
    if (startTime.meridiem === "AM" && endTime.meridiem === "AM") {
        if (startTime.hours > endTime.hours) {
            let endHours = endTime.hours + 24
            if (startTime.minutes > endTime.minutes) {
                endHours = endHours  - 1
                let endMinutes = endTime.minutes + 60
                hours = endHours - startTime.hours
                minutes = endMinutes - startTime.minutes
                return { hours, minutes }
            }
            hours = endHours - startTime.hours
            minutes = endTime.minutes - startTime.minutes
            return{ hours, minutes }
        }
    }
    if (startTime.meridiem === "AM" && endTime.meridiem === "PM") {
        
    }
}

console.log(calculateAMtoAM(fixedTime, limitTime))



