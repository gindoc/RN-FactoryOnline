import React, {Component} from 'react';
import {
    StyleSheet,Text,Image,View,ScrollView,
} from 'react-native'
import Swiper from 'react-native-swiper';
import {IMAGE_PATH} from '../utils/Const';
import GlobalStyles from '../../res/styles/GlobalStyles';
import VerticalScrollView from '../widgets/VerticalScrollView'

export default class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    renderImg(){
        var imageViews=[];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image key={i}
                    style={{flex:1}}
                    source={{uri:images[i]}}
                    />
            );
        }
        return imageViews;
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.search}>
                    <Text style={styles.textLocation}>东莞市</Text>
                    <Image source={require('../../res/images/ic_location_arrow_down.png')}></Image>
                    <View style={styles.searchInput}>
                        <Image source={require('../../res/images/ic_search.png')}></Image>
                        <Text style={styles.searchText}>请输入搜索关键字</Text>
                    </View>
                </View>
                <Swiper height={200} autoplay={true}>
                    {this.renderImg()}
                </Swiper>
                <View style={styles.msgOnline}>
                    <Image source={require('../../res/images/ic_msg_online.png')} style={{marginRight:20}}></Image>
                    <VerticalScrollView></VerticalScrollView>
                </View>
                <View style={GlobalStyles.line}></View>
            </ScrollView>
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

});