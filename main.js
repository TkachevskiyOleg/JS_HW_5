function vehicle() {
    let vehicle1 = {
        manufacturer: "BMV",
        model: "Camry",
        year: 2022,
        averageSpeed: 60
    }
    let vehicle2 = {
        manufacturer: "Daihatsu",
        model: "Charade",
        year: 1978,
        averageSpeed: 113
    }

    function displayVehicleInfo(vehicle) {
        alert(`Vehicle Information:\nManufacturer: ${vehicle.manufacturer}\nModel: ${vehicle.model}\nYear: ${vehicle.year}\nAverage Speed: ${vehicle.averageSpeed} km/h`)
    }

    function calculateTravelTimeWithBreaks(vehicle, distance) {
        let drivingTimeWithoutBreaks = distance / vehicle.averageSpeed
        let numberOfBreaks = Math.floor(drivingTimeWithoutBreaks / 4)
        let breakTime = numberOfBreaks * 1
        let totalTravelTime = drivingTimeWithoutBreaks + breakTime
        return totalTravelTime
    }

    function displayTravelTimeWithBreaks(vehicle, distance) {
        let totalTravelTime = calculateTravelTimeWithBreaks(vehicle, distance)
        alert(`Total travel time with breaks: ${totalTravelTime} hours`)
    }
    displayVehicleInfo(vehicle1)

    let distance = parseInt(prompt("What distance you need to ride(KM)"))
    displayTravelTimeWithBreaks(vehicle1, distance)

    displayVehicleInfo(vehicle2)
    distance = parseInt(prompt("What distance you need to ride(KM)"))
    displayTravelTimeWithBreaks(vehicle2, distance)
}

function rationalNumber() {
    const fraction1 = {
        numerator: 3,
        denominator: 4
    }

    const fraction2 = {
        numerator: 2,
        denominator: 5
    }

    function addFractions(fraction1, fraction2) {
        let result = {
            numerator: fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator,
            denominator: fraction1.denominator * fraction2.denominator
        }
        return simplifyFraction(result)
    }

    function subtractFractions(fraction1, fraction2) {
        let result = {
            numerator: fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator,
            denominator: fraction1.denominator * fraction2.denominator
        }
        return simplifyFraction(result)
    }

    function multiplyFractions(fraction1, fraction2) {
        let result = {
            numerator: fraction1.numerator * fraction2.numerator,
            denominator: fraction1.denominator * fraction2.denominator
        }
        return simplifyFraction(result)
    }

    function divideFractions(fraction1, fraction2) {
        let result = {
            numerator: fraction1.numerator * fraction2.denominator,
            denominator: fraction1.denominator * fraction2.numerator
        }
        return simplifyFraction(result)
    }

    function simplifyFraction(fraction) {
        let gcd = findGCD(fraction.numerator, fraction.denominator)
        return {
            numerator: fraction.numerator / gcd,
            denominator: fraction.denominator / gcd
        }
    }

    function findGCD(a, b) {
        return b === 0 ? a : findGCD(b, a % b)
    }

    alert(`First fraction:${fraction1.numerator}/${fraction1.denominator}\nSecond fraction:${fraction2.numerator}/${fraction2.denominator}`)

    let additionResult = addFractions(fraction1, fraction2)
    alert("Addition: " + additionResult.numerator + "/" + additionResult.denominator)

    let subtractionResult = subtractFractions(fraction1, fraction2)
    alert("Subtraction: " + subtractionResult.numerator + "/" + subtractionResult.denominator)

    let multiplicationResult = multiplyFractions(fraction1, fraction2)
    alert("Multiplication: " + multiplicationResult.numerator + "/" + multiplicationResult.denominator)

    let divisionResult = divideFractions(fraction1, fraction2)
    alert("Division: " + divisionResult.numerator + "/" + divisionResult.denominator)

}

function clock() {
    let clockTime = {
        hours: 20,
        minutes: 30,
        seconds: 45
    }

    function displayClockTime() {
        alert(`${formatNumber(clockTime.hours)}:${formatNumber(clockTime.minutes)}:${formatNumber(clockTime.seconds)}`)
    }

    function formatNumber(number) {
        return number < 10 ? `0${number}` : `${number}`
    }

    function addSeconds(seconds) {
        clockTime.seconds += seconds
        normalizeTime()
        displayClockTime()
    }

    function addMinutes(minutes) {
        clockTime.minutes += minutes
        normalizeTime()
        displayClockTime()
    }

    function addHours(hours) {
        clockTime.hours += hours
        normalizeTime()
        displayClockTime()
    }

    function normalizeTime() {
        while (clockTime.seconds >= 60) {
            clockTime.seconds -= 60
            clockTime.minutes += 1
        }

        while (clockTime.minutes >= 60) {
            clockTime.minutes -= 60
            clockTime.hours += 1
        }

        while (clockTime.hours >= 24) {
            clockTime.hours -= 24
        }
    }

    displayClockTime()
    addSeconds(30)
    addMinutes(30)
    addHours(4)

}
