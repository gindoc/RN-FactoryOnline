import React, {Component} from 'react';
import {
    StyleSheet,Text,Image,View,ScrollView,statusBar,ListView,
} from 'react-native'
import Swiper from 'react-native-swiper';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import CustomTabBar from '../widgets/CustomTabBar';
import GlobalStyles from '../../res/styles/GlobalStyles';
import VerticalScrollView from '../widgets/VerticalScrollView';
import NavigationBar from '../widgets/NavigationBar';
import FindFactoryPage from './FindFactoryPage';
import OwnerPage from './OwnerPage';
import AgencyPage from './AgencyPage';
import {IMAGE_PATH, BASE_URL} from '../utils/Const';
import WantedMessageRepository from '../dao/WantedMessageRepository';
import IndexPageCell from './cell/IndexPageCell';

const REST_API = 'wantedmessages/home'
var wantedMessageRepository = new WantedMessageRepository()

export default class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            }),
        }
        this.renderRow = this.renderRow.bind(this);
        this.renderImg = this.renderImg.bind(this);
    }
    componentDidMount() {
        this.loadData();
    }

    renderImg(){
        var imageViews=[];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image key={i}
                    style={{flex:2}}
                    source={{uri:images[i]}}
                    />
            );
        }
        return imageViews;
    }

    loadData(){
        wantedMessageRepository.fetchNetRepository(BASE_URL+REST_API)
            .then((jsons)=>{
                this.updateState({
                    dataSource: this.getDataSource(jsons),
                })
            }).catch((error)=> {
                console.warn(error);
            })
    }
    updateState(dic) {
        if (!this)return;
        this.setState(dic);
    }

    getDataSource(items) {
        return this.state.dataSource.cloneWithRows(items);
    }

    renderRow(projectModel, sectionID, rowID){
        if(rowID === '0'){
            var tabNames = ['我要厂房', '我是业主', '经纪人'];
            var tabIconNames = ['find_selected', 'owner_selected', 'agent_selected'];
            return (<View>
                        <View>
                            <Swiper height={200} autoplay={true}>
                              {this.renderImg()}
                            </Swiper>
                        </View>
                        <View style={styles.msgOnline}>
                            <Image source={require('../../res/images/ic_msg_online.png')} style={{marginRight:20}}></Image>
                            <VerticalScrollView></VerticalScrollView>
                        </View>
                        <View style={GlobalStyles.line}></View>
                        <View style={{padding:10}}>
                        <ScrollableTabView
                            locked={true}
                            renderTabBar={() => <CustomTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}>
                             <View style={styles.pickRole} tabLabel='key1'>
                                 <FindFactoryPage></FindFactoryPage>
                             </View>
                             <View style={styles.pickRole} tabLabel='key2'>
                                 <OwnerPage/>
                             </View>
                             <View style={styles.pickRole} tabLabel='key3'>
                                 <AgencyPage/>
                             </View>
                        </ScrollableTabView>
                        </View>
                        <View style={styles.greateFactory}>
                           <Image source={{uri:'ic_greate_factory'}} style={{width:25, height:25, marginRight:10}}/>
                           <Text style={{fontSize:13, color:'#1ab80f'}}>优质厂房</Text>
                        </View>
                        <View style={GlobalStyles.line}></View>
                    </View>
                    );
        }
        return (
            <IndexPageCell
                projectModel={projectModel}/>
        );
    }

    render(){
        let navigationBarContent =
        <View style={styles.search}>
            <Text style={styles.textLocation}>东莞市</Text>
            <Image source={require('../../res/images/ic_location_arrow_down.png')}></Image>
            <View style={styles.searchInput}>
                <Image source={{uri:'ic_search'}} style={{width:20, height:20}}></Image>
                <Text style={styles.searchText}>请输入搜索关键字</Text>
            </View>
        </View>
        var statusBar={
            backgroundColor:'#eeeeee',
        }
        let navigation =
            <NavigationBar
                style={{backgroundColor:'#fff'}}
                titleView={navigationBarContent}
                statusBar={statusBar}
                hide={false}/>;
        return(
            <View>
                {navigation}
                <ListView
                    removeClippedSubviews={false}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}/>
            </View>
        );
    }

}

const images=[
     "http://oi653ezan.bkt.clouddn.com/banner1.png",
     "http://oi653ezan.bkt.clouddn.com/banner2.png",
     "http://oi653ezan.bkt.clouddn.com/banner3.png"
]

const styles = StyleSheet.create({
    textLocation:{
        padding:10,
        color:'#424242',
        fontSize:18,
    },
    search:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height:GlobalStyles.window_height/100*8,
        width:GlobalStyles.window_width,
        alignItems:'center'
    },
    searchInput:{
        flex:1,
        backgroundColor:'#f4f4f7',
        borderRadius:6,
        padding:5,
        marginLeft:16,
        marginRight:16,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    searchText:{
        fontSize:16,
        color:'#9d9ca2',
        letterSpacing:20,
        marginLeft:10,
    },
    msgOnline:{
        paddingTop:11,
        paddingBottom:11,
        paddingLeft:12,
        paddingRight:13,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    ScrollView:{
        flexDirection:'column',
        justifyContent:'center',
    },
    pickRole: {
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection:'row',
		backgroundColor: 'white',
		flex: 1,
	},
	greateFactory:{
	    flexDirection:'row',
	    alignItems:'center',
	    justifyContent:'flex-start',
	    paddingLeft:16,
	    paddingRight:7,
	    paddingBottom:10,
	}
});