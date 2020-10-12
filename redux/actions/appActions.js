import { CREATE_CONTRACT, CREATE_CONTRACT_SUCCESS, UPDATED_DATA_USER, UPDATED_SOCKET, CREATE_TRONWEB } from '../constants/appConstants';

export function createContract() {
    return {
        type: CREATE_CONTRACT
    }
}

export function listContract(data) {
    return {
        type: CREATE_CONTRACT_SUCCESS,
        data: data
    }
}

export function createTronWeb(data) {
    return {
        type: CREATE_TRONWEB,
        data: data
    }
}

export function updatedDataUser(data) {
    return {
        type: UPDATED_DATA_USER,
        data: data
    }
}

export function updateSocket(data) {
    return {
        type: UPDATED_SOCKET,
        data: data
    }
}