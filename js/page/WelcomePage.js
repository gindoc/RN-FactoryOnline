import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Image, InteractionManager} from 'react-native';
import HomePage from './HomePage';
import SplashScreen from 'react-native-splash-screen'

export default class WelcomePage extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
        };
    }
//    mixins: [TimerMixin];
    componentDidMount() {
        const {navigator} = this.props;
        this.timer = setTimeout(()=>{
                InteractionManager.runAfterInteractions(() => {
                    SplashScreen.hide();
                    navigator.resetTo({         // 跳转到新的场景，并且重置整个路由栈
                        component: HomePage,
                        name: 'HomePage',
                        params:{
//                            theme:this.theme
                        }
                    });
                }, 1500);
            }
        )
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);     // 清除计时器，否则会发生致命错误（闪退）
    }

    render(){
        return (
            <View style={styles.container}>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    }
});

//AppRegistry.registerComponent('NestRNToAndroid', () => NestRNToAndroid);