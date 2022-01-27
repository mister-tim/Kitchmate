import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet
} from 'react-native';
import DownButton from "./DownButton";
import UpButton from "./UpButton";
import EditButton from "../../Shared/Buttons/EditButton";
import DeleteButton from "../../Shared/Buttons/DeleteButton";

class StepCard extends Component{
    constructor(props){
        super(props)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleDown = this.handleDown.bind(this)
        this.handleUp = this.handleUp.bind(this)
    }

    handleDelete(){
        this.props.handleDelete(this.props.content)
    }
    handleDown(){
        this.props.handleDown(this.props.content)
    }
    handleEdit(){
        this.props.handleEdit(this.props.content)
    }
    handleUp(){
        this.props.handleUp(this.props.content)
    }
    render(){
        return(
            <View style={styles.card}>
                <UpButton handlePress={this.handleUp}></UpButton>
                <DownButton handlePress={this.handleDown}></DownButton>
                <Text style={styles.card_text}>{this.props.content}</Text>
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

export default StepCard;