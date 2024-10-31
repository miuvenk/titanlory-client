import NetworkManager from "./NetworkManager/NetworkManager";

import { NetworkRequestType } from "./NetworkManager/network_request_type.enum";
import { NetworkAPI } from "./NetworkManager/network_api.enum";

export default{

    getLeaderboard(data){
        const method = NetworkRequestType.POST
        const path = NetworkAPI.GET_LEADERBOARD
        const dataPromise = NetworkManager.sendRequest(method, path, data).then((response) => response.data)
        return dataPromise;
    },

}