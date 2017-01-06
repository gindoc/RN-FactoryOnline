import {
    AsyncStorage,
} from 'react-native';
import NetUtil from '../utils/NetUtil';

export default class AgentRepository {

    fetchNetRepository(url) {
        return new Promise((resolve, reject)=> {
            NetUtil.get(url, (responseJson)=>{
                responseJson.wantedMessage.unshift('')
                for(var json of responseJson.wantedMessage){
                    console.log(json);
                }
                if(responseJson.erro_code===200){
                    resolve(responseJson.wantedMessage)
                }
            })
        })

    }

}