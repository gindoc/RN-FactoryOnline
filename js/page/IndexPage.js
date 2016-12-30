import React, {Component} from 'react';
import {
    StyleSheet,Text,Image,View
} from 'react-native'
import Swiper from 'react-native-swiper';

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
            <View>
                <Swiper height={200} autoplay={true}>
                    {this.renderImg()}
                </Swiper>
            </View>
        );
    }
}

const images=[
     "http://oi653ezan.bkt.clouddn.com/banner1.png",
     "http://oi653ezan.bkt.clouddn.com/banner2.png",
     "http://oi653ezan.bkt.clouddn.com/banner3.png"
]

const styles = StyleSheet.create(

);