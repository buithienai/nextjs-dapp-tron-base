import Web3 from 'web3';
import configs from '../../configs';

const { infuraHttp } = configs.contracts;

const web3 = new Web3(
    Web3.givenProvider || new Web3.providers.HttpProvider(infuraHttp)
);

const convertNumberToWei = value => {
    return web3.utils.toWei(`${value}`)
}

const fromDecimal6 = (value, fixed = 2) => {
    return Number((value / 1e6).toFixed(fixed));
}

const toDecimal6 = (value) => {
    return `${value}000000`;
}

const numberToGweiHex = (value) => {
    return web3.utils.toHex(web3.utils.toWei(`${value}`, "gwei"));
}

const convertWeiBigNumberToNumber = (value) => {
    if (value) {
        const toWeiNumber = web3.utils.fromWei(`${value}`);
        return parseFloat(toWeiNumber);
    }

    return null;
};

const timeOut = async (period = 1000) => {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, period)
    })
}

export {
    convertNumberToWei,
    numberToGweiHex,
    convertWeiBigNumberToNumber,
    timeOut,
    web3,
    fromDecimal6,
    toDecimal6
};
