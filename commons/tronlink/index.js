import configs from '../../configs';
import TronWeb from 'tronweb';

const { mainNetProvider } = configs.contracts
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(`${mainNetProvider}`);
const solidityNode = new HttpProvider(`${mainNetProvider}`);
const eventServer = new HttpProvider(`${mainNetProvider}`);

const tronWeb = new TronWeb({
    fullNode,
    solidityNode,
    eventServer
});

export {
    tronWeb
}