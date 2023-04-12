/**
 * Calculate the duration between two times
*/

let fixedTime = '11:31:00 AM';
let limitTime = "10:35:00 AM";

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

// Short Code
function durationCalculator( startTime, endTime, addHours) {
    let hours;
	let minutes;
	let seconds;
	if (addHours === 24) {
		if (startTime.hours === 12) {
			endTime.hours = endTime.hours + 12
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours - 1
				endTime.minutes = endTime.minutes + 60
				hours = endTime.hours - startTime.hours
				minutes = endTime.minutes - startTime.minutes
				return { hours, minutes }
			}
			hours = endTime.hours - startTime.hours
			minutes = endTime.minutes - startTime.minutes
			return { hours, minutes }
		}
	}
	if (addHours === 12) {
		if (startTime.hours === 12) {
			endTime.hours = endTime.hours + 24
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours - 1
				endTime.minutes = endTime.minutes + 60
				hours = endTime.hours - startTime.hours
				minutes = endTime.minutes - startTime.minutes
				return { hours, minutes }
			}
			hours = endTime.hours - startTime.hours
			minutes = endTime.minutes - startTime.minutes
			return { hours, minutes }
		}
	}
    if (startTime.hours > endTime.hours) {
        endTime.hours = endTime.hours + addHours;
        if (startTime.minutes > endTime.minutes) {
            endTime.hours = endTime.hours - 1;
            endTime.minutes = endTime.minutes + 60;
            hours = endTime.hours - startTime.hours;
            minutes = endTime.minutes - startTime.minutes;
            return { hours, minutes };
        }
        hours = endTime.hours - startTime.hours;
        minutes = endTime.minutes - startTime.minutes;
        return { hours, minutes };
	}

	if (startTime.hours === endTime.hours) {
		if (addHours === 24) {
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours + addHours - 1
				endTime.minutes = endTime.minutes + 60
				hours = endTime.hours - startTime.hours
				minutes = endTime.minutes - startTime.minutes
				return { hours, minutes }
			}
		}
		if (addHours === 12) {
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours + addHours - 1
				endTime.minutes = endTime.minutes + 60
				hours = endTime.hours - startTime.hours
				minutes = endTime.minutes - startTime.minutes
				return { hours, minutes }
			}
		}
	}
    if (startTime.minutes > endTime.minutes) {
        endTime.hours = endTime.hours - 1;
        endTime.minutes = endTime.minutes + 60;
        hours = endTime.hours - startTime.hours;
        minutes = endTime.minutes - startTime.minutes;
        return { hours, minutes };
	}
	if (addHours === 12) {
		if (startTime.hours === endTime.hours) {
			if (endTime.minutes > startTime.minutes) {
				endTime.hours = endTime.hours + addHours
				hours = endTime.hours - startTime.hours
				minutes = endTime.minutes - startTime.minutes
				return{ hours, minutes }
			}
		}
	}
    hours = endTime.hours - startTime.hours;
    minutes = endTime.minutes - startTime.minutes;
    return { hours, minutes };
}

// Long Code
function timeDurationCalculator(fixedTime, limitTime) {
	let hours;
	let minutes;
	let seconds;
	const startTime = stringTimeToNumber(fixedTime);
	const endTime = stringTimeToNumber(limitTime);
	if (
		(startTime.meridiem === 'AM' && endTime.meridiem === 'AM') ||
		(startTime.meridiem === 'PM' && endTime.meridiem === 'PM')
	) {
		if (startTime.hours === 12) {
			endTime.hours = endTime.hours + 12
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours - 1
				endTime.minutes = endTime.minutes + 60
				hours = endTime.hours - startTime.hours
				minutes = endTime.minutes - startTime.minutes
				return { hours, minutes }
			}
			hours = endTime.hours - startTime.hours
			minutes = endTime.minutes - startTime.minutes
			return { hours, minutes }
		}
		if (startTime.hours > endTime.hours) {
			endTime.hours = endTime.hours + 24;
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours - 1;
				endTime.minutes = endTime.minutes + 60;
				hours = endTime.hours - startTime.hours;
				minutes = endTime.minutes - startTime.minutes;
				return { hours, minutes };
			}
			hours = endTime.hours - startTime.hours;
			minutes = endTime.minutes - startTime.minutes;
			return { hours, minutes };
		}
		if (startTime.hours === endTime.hours) {
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours + 24 - 1
				endTime.minutes = endTime.minutes + 60
				hours = endTime.hours - startTime.hours
				minutes = endTime.minutes - startTime.minutes
				return { hours, minutes }
			}
		}
		if (startTime.minutes > endTime.minutes) {
			endTime.hours = endTime.hours - 1;
			endTime.minutes = endTime.minutes + 60;
			hours = endTime.hours - startTime.hours;
			minutes = endTime.minutes - startTime.minutes;
			return { hours, minutes };
		}
		hours = endTime.hours - startTime.hours;
		minutes = endTime.minutes - startTime.minutes;
		return { hours, minutes };
	}
	if (
		(startTime.meridiem === 'AM' && endTime.meridiem === 'PM') ||
		(startTime.meridiem === 'PM' && endTime.meridiem === "AM")
	) {
		if (startTime.hours === 12) {
			endTime.hours = endTime.hours + 24
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours - 1
				endTime.minutes = endTime.minutes + 60
				hours = endTime.hours - startTime.hours
				minutes = endTime.minutes - startTime.minutes
				return { hours, minutes }
			}
			hours = endTime.hours - startTime.hours
			minutes = endTime.minutes - startTime.minutes
			return { hours, minutes }
		}
		if (startTime.hours > endTime.hours) {
			endTime.hours = endTime.hours + 12;
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours - 1;
				endTime.minutes = endTime.minutes + 60;
				hours = endTime.hours - startTime.hours;
				minutes = endTime.minutes - startTime.minutes;
				return { hours, minutes };
			}
			hours = endTime.hours - startTime.hours;
			minutes = endTime.minutes - startTime.minutes;
			return { hours, minutes };
		}
		if (startTime.hours === endTime.hours) {
			if (startTime.minutes > endTime.minutes) {
				endTime.hours = endTime.hours + 12 - 1
				endTime.minutes = endTime.minutes + 60
				hours = endTime.hours - startTime.hours
				minutes = endTime.minutes - startTime.minutes
				return { hours, minutes }
			}
		}
		if (startTime.minutes > endTime.minutes) {
			endTime.hours = endTime.hours - 1;
			endTime.minutes = endTime.minutes + 60;
			hours = endTime.hours - startTime.hours;
			minutes = endTime.minutes - startTime.minutes;
			return { hours, minutes };
		}
        // endTime.hours = endTime.hours + 12
		hours = endTime.hours - startTime.hours;
		minutes = endTime.minutes - startTime.minutes;
		return { hours, minutes };
	}
}

// Check Meridiem Condition and Get Result
function durationResult(fixedTime, limitTime) {
    const startTime = stringTimeToNumber(fixedTime);
    const endTime = stringTimeToNumber(limitTime);
    if (
		(startTime.meridiem === 'AM' && endTime.meridiem === 'AM') ||
		(startTime.meridiem === 'PM' && endTime.meridiem === 'PM')
    ) {
        return durationCalculator(startTime, endTime, 24)
    }
    if (
        (startTime.meridiem === 'AM' && endTime.meridiem === 'PM') ||
        (startTime.meridiem === 'PM' && endTime.meridiem === "AM")
    ) {
        return durationCalculator(startTime, endTime, 12)
    }
}

console.log(timeDurationCalculator(fixedTime, limitTime));
console.log(durationResult(fixedTime, limitTime));



