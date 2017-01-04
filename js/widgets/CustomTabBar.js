import React, {Component} from 'react';
import {
    StyleSheet,View,TouchableOpacity,Image,Text,
} from 'react-native'
import GlobalStyles from '../../res/styles/GlobalStyles';

export default class CustomTabBar extends Component {
    static propTypes = {
        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tabs集合

        tabNames: React.PropTypes.array, // 保存Tab名称
        tabIconNames: React.PropTypes.array, // 保存Tab图标
    }

    setAnimationValue({value}) {        //如果你需要在tab切换的时候有动画效果,可重写该方法
        console.log(value);
    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    renderTabOption(tab, i) {
		let textColor = this.props.activeTab == i ? "#424242" : "#9e9e9e"; // 判断i是否是当前选中的tab，设置不同的颜色
		let background = this.props.activeTab == i ? {uri:this.props.tabIconNames[i]}:{uri:'transparent'};
		return (
			<TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab} key={i}>
                <Image
                    source={background}
                    style={{height:50, width:(GlobalStyles.window_width-20)/3, resizeMode: Image.resizeMode.stretch, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color: textColor}}>
                            {this.props.tabNames[i]}
                        </Text>
                </Image>
			</TouchableOpacity>
		);
	}

    render(){
        return(
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		height: 50,
		backgroundColor:'#f5f5f5',
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},
});
