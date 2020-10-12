import { toast } from 'react-toastify';
const { utils } = require('tron-wallet-hd');

export function isEmail(email) {
    var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
    return re.test(String(email).toLowerCase());
}

export function isNumber(number) {
    var re = /^[0-9]+$/;
    return re.test(number);
}

export function isAddress(address) {
    var re = /^T[a-zA-Z0-9]{33}$/;
    return re.test(address);
}

export function formatNumber(number) {
    let index = number.indexOf('.');
    if (index !== -1) {
        let result = number.slice(0, index).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        result += number.slice(index, number.length);
        return result;
    }

    let result = number.slice(index, 1).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return result;
}

export function formatNumberCurrent(number) {
    let result = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return result;
}

export function toFixedCustom(num, fixed) {
    fixed = fixed || 0;
    fixed = Math.pow(10, fixed);
    return Math.floor(num * fixed) / fixed;
}

export function customNumber(number, decimal = 2) {
    if (number === 0 || number === undefined || number === '-' || number === '') {
        return 0;
    }

    let result = toFixedCustom(number, decimal).toFixed(decimal);

    if (parseFloat(result) - parseInt(result) === 0) {
        return formatNumberCurrent(parseInt(result));
    }

    result = Number(result).toString();
    return formatNumber(result);
}

export function replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
}

export function getCustomUserName(value) {
    if (!value) {
        return ''
    }
    return replaceRange(value, 5, 39, '...')
}

export function makeMeTwoDigits(value) {
    return (value < 10 ? "0" : "") + value;
}

export function truncateAddress(str, max, sep) {
    max = max || 10;

    var len = str.length;
    if (len > max) {
        sep = sep || "...";
        var seplen = sep.length;
        if (seplen > max) {
            return str.substr(len - max);
        }
        var n = -0.5 * (max - len - seplen);
        var center = len / 2;

        var front = str.substr(0, 9);
        var back = str.substr(len - center + n - 2);

        return front + sep + back;
    }

    return str;
}

export const validateUserName = (str) => {
    let isError = false;
    if (typeof str !== 'string') {
        isError = true;
    }

    // 4 to 18 Characters
    if (str.length < 4 || str.length > 18) {
        isError = true;
    }

    // A-Z (uppercase)
    if (str !== str.toUpperCase()) {
        isError = true;
    }

    // Cannot start with number
    if (!isNaN(str.charAt(0))) {
        isError = true;
    }

    // No special characters
    const regex = /^[A-Z0-9]+$/;
    if (!regex.test(str)) {
        isError = true;
    }

    // No space between characters
    if (str.indexOf(' ') !== -1) {
        isError = true;
    }

    return isError;
}

export const detectType = value => {
    const addressRegex = /^T[a-zA-Z0-9]{33}$/;
    const userNameRegex = /^[A-Z][A-Z0-9]{3,17}$/;

    if (addressRegex.test(value)) {
        return "address";
    } else if (userNameRegex.test(value)) {
        return "userName";
    }

    return null;
};

export const shuffleArray = (array) => {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }

    return array;
}

export function truncateUserName(str, max, sep) {
    max = max || 10;

    var len = str.length;
    if (len > 6) {
        sep = sep || "...";
        var seplen = sep.length;
        if (seplen > max) {
            return str.substr(len - max);
        }
        var n = -0.5 * (max - len - seplen);
        var center = len / 2;

        var front = str.substr(0, 3);
        var back = str.substr(len - center + n + 1);

        return front + sep + back;
    }

    return str;
}

export const parseFloatFixedNoRound = (value, decimals = 3) => {
    if (value === 0 || value === undefined || value === '-' || value === '') {
        return 0;
    }

    const firstPart = value > 0 ? Math.floor(`${value}e${decimals}`) : Math.ceil(`${value}e${decimals}`)
    const secondPart = `e-${decimals}`;
    let result = Number(`${firstPart}${secondPart}`);
    result = result.toFixed(decimals);

    if (parseFloat(result) - parseInt(result) === 0) {
        return formatNumberCurrent(parseInt(result));
    }

    return result;
}

export function truncateAddressExchange(str, n = 15) {
    let string = str.substring(n + 2, 42 - n);
    return str.replace(string, '...');
}

export function showToastMessage(message) {
    if (message === 'Not found') {
        return;
    }

    return toast.error(message);
}

export function truncateDecimals(number, digits = 3) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
}

export function tronAddressToEthereumAddress(tronAddress) {
    const addressInHex = tronWeb.address.toHex(tronAddress);
    return `0x${addressInHex.slice(2)}`;
}

export const createNewWallet = async () => {
    const seed = utils.generateMnemonic();
    const accounts = await utils.generateAccountsWithMnemonic(seed, 1);

    return {
        seed,
        privateKey: accounts[0].privateKey,
        address: accounts[0].address
    }
}

export function convertBalanceTRX(number) {
    return number * 0.000001;
}