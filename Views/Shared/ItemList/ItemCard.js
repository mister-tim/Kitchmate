import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet
} from 'react-native';
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";

class ItemCard extends Component{
    constructor(props){
        super(props)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(){
        this.props.handleDelete(this.props.content)
    }
    handleEdit(){
        this.props.handleEdit(this.props.content)
    }
    render(){
        return(
            <View style={styles.card}>
                <Text style={styles.card_text}>{this.props.content[0]}</Text>
                <Text style={styles.card_text}>{this.props.content[1]}</Text>
                <EditButton handlePress={this.handleEdit}></EditButton>
                <DeleteButton handlePress={this.handleDelete}></DeleteButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: "#88CBFB",
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        borderColor: "#63A46C",
        borderWidth: 2,
        flexDirection: 'row'
    },
    card_text:{
        fontSize: 18,
        fontWeight: '400',
        color: "#000100",
        flex: 2,
        textDecorationLine: 'underline'
    }
})

export default ItemCard;