import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import Query from "../../../Control/Query";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";


class Recipes extends Component{
    constructor(props){
        super(props)
        this.state = {list: [], displayList: [], ready: false}
        Query.fetchData("Recipes").then((response) => this.loadData(response)).catch(e => this.dataError(e))
        this.updateStorage = this.updateStorage.bind(this)
        this.filterList = this.filterList.bind(this)
        this.deleteRecipe = this.deleteRecipe.bind(this)
    }

    dataError(e){
        console.log(e)
    }
    deleteRecipe(recipe, toggle){
        Query.deleteData(recipe)
        let holder = this.state.list.filter(item => item !== recipe)
        this.setState({list: [...holder], displayList: [...holder]}, () => Query.updateData("Recipes", JSON.stringify(this.state.list)))
        toggle(false)
    }
    filterList(text){
        let holder = this.state.list.filter((current) => {
            for(let i=0; i<text.length; i++){
                if(!current[i] || current[i] !== text[i]) return false
            }
            return true
        })
        this.setState({displayList: holder})
    }
    loadData(data){
        if(data) {
            this.setState({list: JSON.parse(data)})
            this.setState({displayList: JSON.parse(data)})
        }
        this.setState({ready: true})
    }
    render(){
        return(
            <>
                <SearchBar filter={this.filterList}></SearchBar>
                {
                    (this.state.ready) ?
                    <RecipeList header="Recipes" key={this.state.displayList} list={this.state.displayList} 
                    addHandler={this.props.addHandler} editHandler={this.props.editHandler} viewHandler={this.props.viewHandler} 
                    updateStorage={this.updateStorage} handleDelete={this.deleteRecipe}></RecipeList> :
                    <ActivityIndicator size="large" color="#0A369D" style={styles.loader}></ActivityIndicator>
                }
            </>
        );
    }
    updateStorage(data){
        const dataJSON = JSON.stringify(data)
        Query.updateData("Recipes", dataJSON)
    }
}

const styles = StyleSheet.create({
    loader:{
        flex: 1,
        backgroundColor: "#FAFAFA"
    }
})

export default Recipes;