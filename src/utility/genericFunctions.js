const typeChecker = {
    isObject: (obj) => {
        return obj instanceof Object && !(obj instanceof Array)
    },
    isArray: (arr) => {
        return arr instanceof Array
    }
}

const stringChecker = {
    isEmpty: (str) => {
        return str === null || str === undefined || str === ""
    },
    isNotEmpty: (str) => {
        return str !== null && str !== undefined && str !== ""
    },
    isEmail: (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    },
    isLengthBetween: (start, end) => {
        return (str) => {
            return str.length >= start && str.length <= end
        }
    },
    hasOnlyAlphabets: (str) => {
        return /^[a-zA-Z]+$/.test(str)
    },
    hasOnlyNumbers: (str) => {
        return /^[0-9]+$/.test(str)
    },
    hasOnlyAlphaNumeric: (str) => {
        return /^[a-zA-Z0-9]+$/.test(str)
    },
    hasOnlyUppercase: (str) => {
        return /^[A-Z]+$/.test(str)
    }
}

const random = {
    randomString: (length, withSpecialCharacters = false, withCharacters = []) => {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        if (withCharacters.length > 0) {
            characters = withCharacters.join('')
        }
        if (withSpecialCharacters) {
            characters += '!@#_+-'
        }
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    },
    randomNumber: (length, withNumbers = []) => {
        let result = '';
        let numbers = '0123456789';
        if (withNumbers.length > 0) {
            numbers = withNumbers.join('')
        }
        for (let i = 0; i < length; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return result;
    }
}

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

const withRupeeSign = (number) => {
    return `₹ ${number}`
}

const increaseAmountWithFixedPercentWithRounding = (amount, percent) => {
    // return amount with adding the percent in the amount and round the amount with hundred placenemts.
    return Math.round(amount + (amount * percent / 100))

}

const limitCharcaterLength = (string, limit, addEllipsis = true) => {
    if (string.length > limit) {
        return addEllipsis ? `${string.substring(0, limit)}...` : string.substring(0, limit)
    }
    return string;
}

const timestampToTimeandTodayYesterday = (timestamp) => {
    // return time if the timestamp is today or yesterday else return date.
    const date = new Date(timestamp);
    const copyDate = new Date(timestamp);
    const today = new Date();
    copyDate.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)
    const diff = today.getDate() - copyDate.getDate()
    // console.log(copyDate.getDate(), today.getHours(), diff)
    if (diff === 0) {
        return `${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)}`;
    }
    if (diff === 1) {
        return `${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)} / Y`;
    }
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const timeModifier = (time = '13:59:12', modifier = 'hh:mm', separator = ':', returnInAmPm) => {
    // timeModifier('13:59:12', 'hh:mm', ':') => 13:59
    // timeModifier('13:59:12', 'hh:mm:ss', ':') => 13:59:12
    // timeModifier('13:59:12', 'hh:mm:ss', '-') => 13-59-12
    const splitted = time.split(':');
    if (splitted.length < 3) {
        return "Invalid time";
    }
    let [hours, minutes, seconds] = time.split(':');
    hours = returnInAmPm ? hours % 12 : hours;
    switch (modifier) {
        case 'hh':
            return `${hours}${returnInAmPm ? hours >= 12 ? ' PM' : ' AM' : ''}`;
        case 'mm':
            return `${minutes}`;
        case 'ss':
            return `${seconds}`;
        case 'hh:mm':
            return `${hours}${separator}${minutes}`;
        case 'hh:mm:ss':
            return `${hours}${separator}${minutes}${separator}${seconds}${returnInAmPm ? hours >= 12 ? ' PM' : ' AM' : ''}`;
        default:
            return `${hours}${separator}${minutes}${returnInAmPm ? hours >= 12 ? ' PM' : ' AM' : ''}`;
    }
}

export default {
    typeChecker,
    stringChecker,
    random,
    compareArrays,
    withRupeeSign,
    increaseAmountWithFixedPercentWithRounding,
    limitCharcaterLength,
    timestampToTimeandTodayYesterday,
    timeModifier
}