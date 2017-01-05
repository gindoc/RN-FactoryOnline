import {
    AsyncStorage,
} from 'react-native';
import NetUtil from '../utils/NetUtil';

export default class AgentRepository {

    fetchNetRepository(url) {
        return new Promise((resolve, reject)=> {
            NetUtil.get(url, (responseJson)=>{
                if(responseJson.erro_code===200){
                    resolve(responseJson.proMedium)
//                    for(var json of responseJson.proMedium){
//                        console.log(json);
//                    }
//                    console.log(responseJson.proMedium);
                }
            })
        })

    }

}