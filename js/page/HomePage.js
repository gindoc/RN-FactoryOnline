import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View, Text,
} from 'react-native'
import IndexPage from './IndexPage';
import RecommendPage from './RecommendPage';
import MyPage from './MyPage';
import TabNavigator from 'react-native-tab-navigator'

export var FLAG_TAB = {
    flag_indexTab: 'flag_indexTab', flag_recommendTab: 'flag_recommendTab', flag_myTab: 'flag_myTab'
}
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        let selectedTab = this.props.selectedTab ? this.props.selectedTab : FLAG_TAB.flag_indexTab;       // 初次启动的是popularTab
        this.state = {
            selectedTab: selectedTab,
            theme: this.props.theme     // 获取welcomePage传过来的主题，一般都是默认主题
        };
    }

    /**
     * Component            需要跳转的组件
     * selectedTab          当前选项卡是否被选中
     * title                标题
     * renderIcon           icon
     * renderSelectedIcon   被选中时的icon
     * badgeText            提示的角标数字（购物车时会用到）
     * onPress              点击后事件响应函数
     **/
    _renderTab(Component, selectedTab, title, renderIcon) {
            return (
                <TabNavigator.Item
                    selected={this.state.selectedTab === selectedTab}
                    title={title}
                    selectedTitleStyle={[styles.selectedTitleStyle]}
                    renderIcon={() => <Image style={styles.tabBarIcon}
                                             source={renderIcon}/>}
                    renderSelectedIcon={() => <Image
                        style={[styles.tabBarSelectedIcon]}
                        source={renderIcon}/>}
                    onPress={() => this.onSelected(selectedTab)}>
                    <Component {...this.props} theme={this.state.theme} homeComponent={this}/>
                </TabNavigator.Item>
            )
    }
    onSelected(object) {
        // if (this.updateFavorite && 'popularTab' === object)this.updateFavorite(object);

//        if (object !== this.state.selectedTab) {
//            this.subscribers.forEach((item, index, arr)=> {
//                if (typeof(item) == 'function')item(this.state.selectedTab, object);
//            })
//        }
//        if(object===FLAG_TAB.flag_popularTab)this.changedValues.favorite.popularChange=false;
//        if(object===FLAG_TAB.flag_trendingTab)this.changedValues.favorite.trendingChange=false;

        this.setState({
            selectedTab: object,
        })

    }
    render() {
            return (
                <View style={styles.container}>
                    <TabNavigator
                        tabBarStyle={{opacity: 0.9,}}
                        sceneStyle={{paddingBottom: 0}}>
                        {this._renderTab(IndexPage, FLAG_TAB.flag_indexTab, '首页', require('../../res/images/ic_home.png'))}
                        {this._renderTab(RecommendPage, FLAG_TAB.flag_recommendTab, '推荐', require('../../res/images/ic_recommend.png'))}
                        {this._renderTab(MyPage, FLAG_TAB.flag_myTab, '我的', require('../../res/images/ic_account.png'))}
                    </TabNavigator>
                </View>
            )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    tabBarIcon: {
        width: 26, height: 26,
        resizeMode: 'contain',
    },
    tabBarSelectedIcon: {
        width: 26, height: 26,
        resizeMode: 'contain',
        tintColor: '#1ab80f',
    },
    selectedTitleStyle:{
        color: '#1ab80f',
    }
})
