import React, {Component} from 'react'
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    View,
    Alert,
} from 'react-native'
import GlobalStyles from '../../../res/styles/GlobalStyles';

export default class AgentPageCell extends Component{


    render(){
        let item = this.props.projectModel.item? this.props.projectModel.item:this.props.projectModel;
//        let imgUri = new Buffer(item.avatar, 'base64').toString();
        let img = {uri:'data:image/png;base64,'+item.avatar}
        console.log(img);
        return(
            <TouchableHighlight
                onPress={this.props.onSelect}
                underlayColor='transparent'>
                <View style={styles.container}>
                    <Image source={img} style={{width:45, height:45, marginBottom:5, borderRadius:50}}></Image>
                    <Text style={{fontSize:12, color:'#575757'}}>{item.real_name}</Text>
                    <Text style={{fontSize:10, color:'#575757'}}>{item.branch}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:GlobalStyles.window_width/3,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
})