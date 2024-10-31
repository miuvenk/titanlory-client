import NetworkManager from "./NetworkManager/NetworkManager";

import { NetworkRequestType } from "./NetworkManager/network_request_type.enum";
import { NetworkAPI } from "./NetworkManager/network_api.enum";

export default{

    getPlayerById(params){
        const method = NetworkRequestType.GET
        const path = NetworkAPI.GET_PLAYER_BY_ID
        const urlParams = path + params
        const dataPromise = NetworkManager.sendRequest(method, urlParams).then((response) => response.data)
        return dataPromise;
    },

}