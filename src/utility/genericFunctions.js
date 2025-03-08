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

export default {
    typeChecker,
    stringChecker,
    random,
    compareArrays
}