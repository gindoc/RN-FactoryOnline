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
    InteractionManager,
} from 'react-native'
var msgs = ["123","456","789","012","345","678","789","1011"];
var msgOneIndex = 0;
var msgTwoIndex = 1;
export default class VerticalScrollView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeOutOpacity:new Animated.Value(1),
            translate_y:new Animated.Value(1),
            msgOne:msgs[msgOneIndex],
            msgTwo:msgs[msgTwoIndex],
        }
    }

    animated(){
        this.state.fadeOutOpacity.setValue(1);
        this.state.translate_y.setValue(1);
        var timing = Animated.timing;
        Animated.parallel(['fadeOutOpacity','translate_y'].map(property => {
            return timing(this.state[property], {
                toValue: 0,
                duration: 2000,
                easing: Easing.linear
            });
        })).start(()=>this.animated());
    }
    componentDidMount(){
        this.animated();

        this.interval = setInterval(()=>{
            msgOneIndex = msgOneIndex+2;
            msgTwoIndex +=2;
            this.setState({msgOne:msgs[msgOneIndex%msgs.length]});
            this.setState({msgTwo:msgs[msgTwoIndex%msgs.length]});
        },2000);
    }

    componentWillUnmount() {
        //this.timer && clearTimeout(this.timer);     // 清除计时器，否则会发生致命错误（闪退）
        this.interval&&clearInterval(this.interval);
    }

    render(){
        return(
            <Animated.View style={[styles.ScrollView, {
                opacity:this.state.fadeOutOpacity.interpolate({
                    inputRange:[0,0.5,1],
                    outputRange:[0.2,0.8,0],
                }),
                transform:[{
                    translateY:this.state.translate_y.interpolate({
                        inputRange:[0,1],
                        outputRange:[-11,5],
                    })
                }],
            }]}>
                <Animated.View style={styles.msgOneContainer}>
                    <Text style={styles.address}>南城</Text>
                    <Text style={styles.message} ellipsizeMode='tail'>{this.state.msgOne}</Text>
                </Animated.View>
                <Animated.View style={styles.msgOneContainer}>
                    <Text style={styles.address}>樟木头</Text>
                    <Text style={styles.message} numberOfLines={1} ellipsizeMode='tail'>{this.state.msgTwo}</Text>
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