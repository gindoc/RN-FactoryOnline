import React, {Component, PropTypes} from 'react';

import {
    StyleSheet,
    Navigator,
    Platform,
    TouchableOpacity,
    Image,
    StatusBar,
    Text,
    View,
    Animated,
    Easing,
} from 'react-native'
var msgs = ["123","456","789","012","345","678","789","1011"];
export default class VerticalScrollView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeOutOpacity:new Animated.Value(1),
            translateY:new Animated.Value(1),
            msgOne:msgs[0],
            msgTwo:msgs[1],
        }
    }

    componentDidMount(){
        var timing = Animated.timing;
        Animated.parallel(['fadeOutOpacity','translateY'].map(property => {
            return timing(this.state[property], {
                toValue: 0,
                duration: 1000,
                easing: Easing.linear
            });
        })).start();
    }

    render(){
        return(
            <Animated.View style={[styles.ScrollView, {
                opacity:this.state.fadeOutOpacity,
                transform:[{
                    translateY:this.state.translateY.interpolate({
                        inputRange:[0,1],
                        outputRange:[-10,0],
                    })
                }],
            }]}>
                <Animated.View style={styles.msgOneContainer}>
                    <Text style={styles.address}>南城</Text>
                    <Text style={styles.message} ellipsizeMode='tail'>南城靠牛栅产业园厂房出租10000方</Text>
                </Animated.View>
                <Animated.View style={styles.msgOneContainer}>
                    <Text style={styles.address}>樟木头</Text>
                    <Text style={styles.message} numberOfLines={1} ellipsizeMode='tail'>南城靠牛栅产业园厂房出租10000方10000方10000方10000方</Text>
                </Animated.View>
            </Animated.View>
        );
    }

}

const styles = StyleSheet.create({
    address:{
        color:'#df3d3f',
        fontSize:16,
        marginRight:8,
    },
    msgOneContainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    message:{
        color:'#424242',
        fontSize:17,
    },

});