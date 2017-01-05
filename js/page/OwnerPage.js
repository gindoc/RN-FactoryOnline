import React, {Component} from 'react';
import {
    StyleSheet, View, Image, Text,
} from 'react-native'
import GlobalStyles from '../../res/styles/GlobalStyles';

export default class OwnerPage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image source={{uri:'ic_publish_factory'}} style={{width:45, height:45, marginBottom:5}}></Image>
                    <Text style={{fontSize:12, color:'#575757'}}>我要发布</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    item:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:GlobalStyles.window_width/3,
    }
});