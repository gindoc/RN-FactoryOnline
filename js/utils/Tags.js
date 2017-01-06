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
                        <Text style={{backgroundColor:'#ccc', borderRadius:10,}}>{tagName}</Text>
                );
            case 2:
                return (
                        <Text>{tagName}</Text>
                );
            case 3:
                return (
                        <Text>{tagName}</Text>
                );
            case 4:
                return (
                        <Text>tagName</Text>
                );
            case 5:
                return (
                        <Text>{tagName}</Text>
                );
            case 6:
                return (
                        <Text>{tagName}</Text>
                );
            case 7:
                return (
                        <Text>{tagName}</Text>
                );
        }
     }
}