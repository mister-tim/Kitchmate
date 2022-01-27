import React, {Component} from "react";
import{
    Text,
    View,
    ScrollView,
    StyleSheet,
    Modal
} from 'react-native';
import AddRecipe from "./AddRecipe";
import RecipeCard from "./RecipeCard"
import DeleteModal from "./DeleteModal"

class RecipeList extends Component{
    constructor(props){
        super(props)
        this.state = {list: this.props.list || [],  modalOpen: false, recipe: null}
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }

    handleDelete(item){
        this.setState({recipe: item})
        this.toggleModal(true)
    }
    render(){
        return(
            <>
                {this.renderModal()}
                {this.renderHeader()}
                <ScrollView style={styles.list_view}>
                    <AddRecipe handleTouch={this.props.addHandler}></AddRecipe>
                    {this.renderList()}
                </ScrollView>
            </> 
        )
        
    }
    renderHeader(){
        if(this.props.header) return(
            <View style={styles.title}>
                <Text style={styles.title_text}>{this.props.header}</Text>
            </View>
        );
    }
    renderList(){
        let key = 0
        return this.state.list.map(
            (item) => <RecipeCard content={item} key={key++} viewHandler={this.props.viewHandler} 
                editHandler={this.props.editHandler} deleteHandler={this.handleDelete}></RecipeCard>)
    }
    renderModal(){
        return(
            <Modal
            animationType = {"slide"}
            transparent={true}
            visible={this.state.modalOpen}>
                <DeleteModal recipe={this.state.recipe} toggleModal={this.toggleModal}
                handleAccept={this.props.handleDelete} handleCancel={this.toggleModal}></DeleteModal>
            </Modal>
        );
    }
    toggleModal(toggle){
        if(!toggle) this.setState({recipe: null})
        this.setState({modalOpen: toggle})
    }
}

const styles = StyleSheet.create({
    list_view:{
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#FAFAFA",
        flex: 1,
        borderColor: "#000100",
        borderWidth: 2
    },
    title:{
        backgroundColor: "#0A369D",
        height: 30,
        color: "#FAFAFA",
        borderBottomColor: "#63A46C",
        borderBottomWidth: 2
    },
    title_text:{
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    }
})

export default RecipeList;