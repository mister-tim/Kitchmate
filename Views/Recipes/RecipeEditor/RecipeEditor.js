import React, {Component} from "react";
import{
    Text,
    View,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput
} from 'react-native';
import Query from "../../../Control/Query";
import ItemList from "../../Shared/ItemList/ItemList"
import StepsList from "./StepsList"
import AcceptButton from "../../Shared/Buttons/AcceptButton";
import CancelButton from "../../Shared/Buttons/CancelButton";
import ConfirmButtons from "../../Shared/Buttons/ConfirmButtons";
import ErrorMessage from "../../Shared/ErrorMessage";

class RecipeEditor extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name || "",
            ingredients: [],
            steps: [],
            loading: true,
            error: null
        }
        this.recipes = []
        if(this.state.name) Query.fetchData(this.state.name).then((response) => this.loadData(response)).catch(console.log)
        else this.componentDidMount = () => { this.setState({loading: false}) }
        Query.fetchData("Recipes").then((response) => this.loadRecipes(response)).catch(console.log)
        this.handleCancel = this.handleCancel.bind(this)
        this.handleAccept = this.handleAccept.bind(this)
        this.updateSteps = this.updateSteps.bind(this)
        this.updateIngredients = this.updateIngredients.bind(this)
    }

    changeText(text){
        this.setState({name: text})
    }
    handleAccept(){
        if(this.state.name && this.state.steps.length && this.state.ingredients.length){
            if(this.props.name && (this.props.name !== this.state.name)) Query.deleteData(this.props.name).then(console.log)
            Query.updateData(this.state.name,JSON.stringify(this.state))
            this.saveRecipes()
            this.handleCancel()
        } else this.setState({error: "Please make sure all fields are complete."})
    }
    handleCancel(){
        this.props.backHandler("List", null)
    }
    loadData(data){
        if(data) this.setState({...(JSON.parse(data)), loading: false})
        else this.setState({loading: false})
    }
    loadRecipes(data){
        if(data) this.recipes = JSON.parse(data)
        else console.log("No recipes available.")
    }
    render(){
        if (!this.state.loading) return(
            <>
            {this.renderNameInput()}
            <ItemList style={styles.list} header="Ingredients" list={this.state.ingredients || []} updateStorage={this.updateIngredients}></ItemList>
            <StepsList style={styles.list} list={this.state.steps || []} updateStorage={this.updateSteps}></StepsList>
            {this.state.error ? <ErrorMessage message={this.state.error}></ErrorMessage> : null}
            <ConfirmButtons style={{flex:1}} handleAccept={this.handleAccept} handleCancel={this.handleCancel}></ConfirmButtons>
            </>
        );
        else return <ActivityIndicator size="large" color="#0A369D" style={styles.loader}></ActivityIndicator>
    }
    renderNameInput(){
        return(
            <View style={styles.name}>
                <Text style={styles.text}>Recipe Name:</Text>
                <TextInput
                style={styles.text_input}
                value={this.state.name}
                onChangeText={(text) => this.changeText(text)}/>
            </View>
        );
        
    }
    saveRecipes(){
        let holder = this.recipes.filter(current => current !== this.props.name)
        this.recipes = [...holder, this.state.name]
        Query.updateData("Recipes", JSON.stringify(this.recipes))
        
    }
    updateIngredients(data){
        this.setState({ingredients: data})
    }
    updateSteps(data){
        this.setState({steps: data})
    }
}

const styles = StyleSheet.create({
    name:{
        flex: 1,
        flexDirection: "row"
    },
    list:{
        flex: 3
    },
    text:{
        flex: 1,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: "#000100",
        textDecorationLine: "underline"
    },
    text_input:{
        flex: 1,
        color: "#000100",
        fontSize: 18,
        fontWeight: '400',
        backgroundColor: "#FAFAFA",
        borderWidth: 2,
        borderColor: "#0A369D",
        minHeight: 20
    }
})

export default RecipeEditor;