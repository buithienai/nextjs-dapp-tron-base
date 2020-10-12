import configs from '../../configs';

const createContract = async () => {
    const { contractDapp } = configs.contracts;
    const dappContract = await window.tronWeb.contract().at(contractDapp.address);

    return {
        dappContract
    };
}

export default {
    createContract
}