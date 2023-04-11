
const startLunchTime = "5:49:00 AM"
const endLunchTime = 679

function stringTimeToNumber(stringTime) {
    const [startHours, startMinutes, startSecondsMeridiem] = stringTime.split(":")
    const [startSecond, meridiem] = startSecondsMeridiem.split(" ")
    return {
        hours: +startHours,
        minutes: +startMinutes,
        second: +startSecond,
        meridiem
    }
}
function isTimeOver(startLunchTime, endLunchTime) {
    const startTime = stringTimeToNumber(startLunchTime)
    // const presentTime = stringTimeToNumber(new Date().toLocaleTimeString())
    let endHours = 0
    let endMinutes = 0
    let endMeridiem = ""
    if (startTime.meridiem === "AM") {
        if (startTime.hours === 12) {
            if (endLunchTime === 60) {
                endHours = endHours + startTime.hours + 1
                if (endHours >= 12) {
                    endHours = endHours % 12 ? endHours % 12: 12
                    endMinutes = startTime.minutes
                    endMeridiem = startTime.meridiem
                    return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                }
            }
            if (endLunchTime > 60) {
                endHours = Math.floor(endLunchTime / 60) + startTime.hours
                endMinutes = (endLunchTime % 60) + startTime.minutes
                if (endHours >= 12) {
                    if (endHours >= 24) {
                        endHours = endHours % 12 ? endHours % 12 : 12
                        endMeridiem = "PM"
                        return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                    }
                    endHours = endHours % 12 ? endHours % 12 : 12
                    endMeridiem = "AM"
                    return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                }
            }
        }
        if (endLunchTime < 60) {
            endHours = startTime.hours
            endMinutes = startTime.minutes + endLunchTime
            if (endMinutes > 60) {
                endHours = Math.floor(endMinutes / 60) + endHours
                endMinutes = endMinutes % 60
                if (endHours >= 12) {
                    endHours = endHours % 12 ? endHours % 12: 12
                    endMeridiem = "PM"
                    return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                }
                console.log("OK");
                endMeridiem = startTime.meridiem
                return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
            }
            endMeridiem = startTime.meridiem
            return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
        }
        if (endLunchTime === 60) {
            endHours = endHours + startTime.hours + 1
            if (endHours >= 12) {
                endHours = endHours % 12 ? endHours % 12: 12
                endMinutes = startTime.minutes
                endMeridiem = "PM"
                return { endHours, endMinutes, endMeridiem }
            }
            endMinutes = startTime.minutes
            endMeridiem = startTime.meridiem
            return { endHours, endMinutes, endMeridiem }
        }
        if (endLunchTime > 60) {
            endHours = Math.floor(endLunchTime / 60) + startTime.hours
            endMinutes = (endLunchTime % 60) + startTime.minutes
            if (endMinutes > 60) {
                endHours = Math.floor(endMinutes / 60) + endHours
                endMinutes = endMinutes % 60
                if (endHours >= 12) {
                    endHours = endHours % 12 ? endHours % 12: 12
                    endMeridiem = "PM"
                    return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                }
                endMeridiem = startTime.meridiem
                return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
            }
            if (endHours >= 12) {
                endHours = endHours % 12 ? endHours % 12: 12
                endMinutes = startTime.minutes
                endMeridiem = "PM"
                return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
            }
            endMeridiem = startTime.meridiem
            return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
        }
    }
    if (startTime.meridiem === "PM") {
        if (startTime.hours === 12) {
            if (endLunchTime === 60) {
                endHours = endHours + startTime.hours + 1
                if (endHours >= 12) {
                    endHours = endHours % 12 ? endHours % 12: 12
                    endMinutes = startTime.minutes
                    endMeridiem = startTime.meridiem
                    return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                }
            }
            if (endLunchTime > 60) {
                endHours = Math.floor(endLunchTime / 60) + startTime.hours
                endMinutes = (endLunchTime % 60) + startTime.minutes
                if (endHours >= 12) {
                    if (endHours >= 24) {
                        endHours = endHours % 12 ? endHours % 12 : 12
                        endMeridiem = "AM"
                        return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                    }
                    endHours = endHours % 12 ? endHours % 12 : 12
                    endMeridiem = "PM"
                    return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                }
            }
        }
        if (endLunchTime === 60) {
            endHours = endHours + startTime.hours + 1
            if (endHours >= 12) {
                endHours = endHours % 12 ? endHours % 12: 12
                endMinutes = startTime.minutes
                endMeridiem = "AM"
                return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
            }
            endMinutes = startTime.minutes
            endMeridiem = startTime.meridiem
            return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
        }
        if (endLunchTime < 60) {
            endHours = startTime.hours
            endMinutes = startTime.minutes + endLunchTime
            if (endMinutes > 60) {
                endHours = Math.floor(endMinutes / 60) + endHours
                endMinutes = endMinutes % 60
                if (endHours >= 12) {
                    endHours = endHours % 12 ? endHours % 12: 12
                    endMeridiem = "AM"
                    return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                }
                endMeridiem = startTime.meridiem
                return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
            }
            endMeridiem = startTime.meridiem
            return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
        }
        if (endLunchTime > 60) {
            endHours = Math.floor(endLunchTime / 60) + startTime.hours
            endMinutes = (endLunchTime % 60) + startTime.minutes
            if (endMinutes > 60) {
                endHours = Math.floor(endMinutes / 60) + endHours
                endMinutes = endMinutes % 60
                if (endHours >= 12) {
                    endHours = endHours % 12 ? endHours % 12 : 12
                    endMeridiem = "AM"
                    return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
                }
                endMeridiem = startTime.meridiem
                return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
            }
            if (endHours >= 12) {
                endHours = endHours % 12 ? endHours % 12: 12
                endMinutes = startTime.minutes
                endMeridiem = "AM"
                return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
            }
            endMeridiem = startTime.meridiem
            return { hours:endHours, minutes:endMinutes, meridiem:endMeridiem }
        }
    }
}
console.log(isTimeOver(startLunchTime, endLunchTime));


