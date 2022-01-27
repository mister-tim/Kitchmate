import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import HomeButton from "../Shared/Buttons/HomeButton";
import Query from "../../Control/Query";
import ItemList from "../Shared/ItemList/ItemList";

class Groceries extends Component{
    constructor(props){
        super(props)
        this.state = {ready: false, list: null}
        Query.fetchData("Groceries").then((response) => this.loadData(response)).catch( e => console.log(e))
        this.updateStorage = this.updateStorage.bind(this)
    }

    dataError(e){
        console.log(e)
    }
    loadData(data){
        if(data) this.setState({list: JSON.parse(data)})
        else console.log(data)
        this.setState({ready: true})
    }
    render(){
        return(
            <>
            <HomeButton navHandler={this.props.navHandler}></HomeButton>
            {
                (this.state.ready) ? 
                <ItemList style={styles.itemList} header="Groceries" list={this.state.list} updateStorage={this.updateStorage}></ItemList> :
                <ActivityIndicator size="large" color="#0A369D" style={styles.loader}></ActivityIndicator>
            }
            </>
        );
    }
    updateStorage(data){
        const dataJSON = JSON.stringify(data)
        Query.updateData("Groceries", JSON.stringify(data))
    }
}

const styles = StyleSheet.create({
    loader:{
        flex: 1,
        backgroundColor: "#FAFAFA"
    },
    itemList: {
        flex: 1
    }
})

export default Groceries;