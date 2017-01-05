import React, {Component} from 'react';
import {
    StyleSheet, View, Image, Text,ListView,
} from 'react-native'
import GlobalStyles from '../../res/styles/GlobalStyles';
import Const,{IMAGE_PATH, BASE_URL} from '../utils/Const';
import AgentRepository from '../dao/AgentRepository';
import AgencyPageCell from './cell/AgencyPageCell';

const REST_API = 'promediums'
var agentRepository = new AgentRepository()

export default class AgencyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1 !== r2,
            }),
        }
    }

    componentDidMount() {
        this.loadData();
    }

    render(){
        return(
            <ListView
                horizontal={true}
                showsHorizontalScrollIndicator = {false}
                dataSource={this.state.dataSource}
                renderRow={(e)=>this.renderRow(e)}/>
        );
    }

    loadData(){
        agentRepository.fetchNetRepository(BASE_URL+REST_API)
            .then((jsons)=>{
                this.updateState({
                    dataSource: this.getDataSource(jsons),
                })
            }).catch((error)=> {
                console.warn(error);
            })
    }

    renderRow(projectModel){
        return (
            <AgencyPageCell
                onSelect={()=>this.onSelectRepository(projectModel)}
                projectModel={projectModel}/>
        );
    }

    onSelectRepository(projectModel){
        console.log(projectModel)
    }

    updateState(dic) {
        if (!this)return;
        this.setState(dic);
    }

    getDataSource(items) {
        return this.state.dataSource.cloneWithRows(items);
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10,
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    item:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:GlobalStyles.window_width/3,
    }
});