import React, {Component} from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native'
export default class Tags extends Component{
     static selectTag(tagId, tagName){
        switch(tagId){
            case 1:
                return (
                        <Text style={[{ color:'#3B98F0',backgroundColor:'#C2E4FA',}, styles.text]}>{tagName}</Text>
                );
            case 2:
                return (
                        <Text style={[{ color:'#28AD17',backgroundColor:'#BBF1BA',}, styles.text]}>{tagName}</Text>
                );
            case 3:
                return (
                        <Text style={[{ color:'#28AD17',backgroundColor:'#BBF1BA',}, styles.text]}>{tagName}</Text>
                );
            case 4:
                return (
                        <Text style={[{ color:'#28AD17',backgroundColor:'#BBF1BA',}, styles.text]}>{tagName}</Text>
                );
            case 5:
                return (
                        <Text style={[{ color:'#28AD17',backgroundColor:'#BBF1BA',}, styles.text]}>{tagName}</Text>
                );
            case 6:
                return (
                        <Text style={[{ color:'#28AD17',backgroundColor:'#BBF1BA',}, styles.text]}>{tagName}</Text>
                );
            case 7:
                return (
                        <Text style={[{ color:'#28AD17',backgroundColor:'#BBF1BA',}, styles.text]}>{tagName}</Text>
                );
        }
     }
}

const styles = StyleSheet.create({
    text:{
        fontSize:12,borderRadius:10, padding:5, marginRight:5,
    }
});