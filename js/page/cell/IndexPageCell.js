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
import Tags from '../../utils/Tags';

var Buffer = require('buffer/').Buffer

export default class IndexPageCell extends Component{

    render(){
        let item = this.props.projectModel.item? this.props.projectModel.item:this.props.projectModel;
        let imgUri = new Buffer(item.factory.thumbnail_url, 'base64').toString();
        let img = {uri:imgUri!==''&&imgUri!==null?imgUri:'ic_no_pic'}
        let tag1 = item.factory.tags[0]!==null?Tags.selectTag(item.factory.tags[0].id, item.factory.tags[0].name):<View/>
        let tag2 = item.factory.tags[1]!=null?Tags.selectTag(item.factory.tags[1].id, item.factory.tags[1].name):<View/>
        let tag3 = item.factory.tags[2]!=null?Tags.selectTag(item.factory.tags[2].id, item.factory.tags[2].name):<View/>
        return(
            <TouchableHighlight
                onPress={this.props.onWantedMessageSelect}
                underlayColor='transparent'>
                <View style={styles.container}>
                    <Image source={img} style={{width:150, height:100, marginBottom:5, }}></Image>
                    <View style={styles.message}>
                        <Text style={{fontSize:14, color:'#424242', flex:1 }}>{item.factory.title}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center',flex:1,}}>
                            <Text style={{fontSize:12, color:'#808080', flex:1, }}>{item.factory.range}㎡</Text>
                            <Text style={{fontSize:14, color:'#df3d3f', flex:1, textAlign:'right'}}>{item.factory.price*item.factory.range}元/月</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center',flex:1,}}>
                            <Text style={{fontSize:12, color:'#808080', flex:1, }}>{item.factory.address_overview}</Text>
                            <Text style={{fontSize:14, color:'#808080', flex:1, textAlign:'right'}}>{item.factory.price}元/㎡</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center',flex:1,}}>
                            {tag1}
                            {tag2}
                            {tag3}
                        </View>
                    </View>

                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:GlobalStyles.window_width,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingLeft:11,
        paddingRight:15,
        paddingTop:12,
    },
    message:{
        flex:1,
        paddingLeft:15,
        flexDirection:'column',
        alignItems:'flex-start',
    }
})