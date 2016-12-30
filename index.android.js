import React, { Component } from 'react';
import { AppRegistry, Navigator} from 'react-native';
import WelcomePage from './js/page/WelcomePage.js';

class NestRNToAndroid extends Component {
    constructor(props: any) {
        super(props);
    }

    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator}/>
        );
    }
    render() {
        return (
            <Navigator
                initialRoute={{
                    name: 'WelcomePage',
                    component:WelcomePage
                }}
                renderScene={(e, i)=>this._renderScene(e, i)}
            />
    )}
}

AppRegistry.registerComponent('NestRNToAndroid', () => NestRNToAndroid);