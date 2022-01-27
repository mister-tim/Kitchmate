import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions
} from "react-native"
import ConfirmButtons from "../Buttons/ConfirmButtons";
import ErrorMessage from "../ErrorMessage";

class ItemModal extends Component{
    constructor(props){
        super(props)
        if(this.props.item) this.state = {item: this.props.item[0], quantity: this.props.item[1], error: null}
        else this.state = {item: "", quantity: "", error: false}
        this.handleAccept = this.handleAccept.bind(this)
    }

    changeText(text, label){
        if(label === "Item")this.setState({item: text})
        else this.setState({quantity: text})
    }
    handleAccept(){
        if(this.state.item.length){
            if(this.state.item.length < 64){
                if(this.props.item) this.props.handleAccept([this.state.item, this.state.quantity], this.props.item)
                else this.props.handleAccept([this.state.item, this.state.quantity])
                this.props.handleCancel(false)
            } else this.setState({error: "Item name is too long."})
        } else this.setState({error: "Please enter an item name."})
    }
    render(){
        return(
            <View style={styles.body}>
                <View style={styles.form}>
                    {this.renderInput("Item", this.state.item)}
                    {this.renderInput("Quantity", this.state.quantity)}
                </View>
                {(this.state.error) ? <ErrorMessage message={this.state.error}></ErrorMessage> : null}
                <ConfirmButtons handleAccept={this.handleAccept} handleCancel={this.props.handleCancel}></ConfirmButtons>
            </View>
        );
    }
    renderInput(label, content){
        return(
            <View style={styles.input}>
                <Text style={styles.text}>{label}:</Text>
                <TextInput
                style={styles.text_input}
                value={content}
                onChangeText={(text) => this.changeText(text, label)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        top: '25%',
        height: Dimensions.get('window').height/4,
        backgroundColor: "#63A46C",
        margin: 5,
        padding: 5,
        borderWidth: 2,
        borderColor: "#000100"
    },
    form:{
        flexDirection: 'row',
        flex: 1
    },
    input:{
        flexDirection: 'column',
        flex: 1,
        margin: 2,
    },
    buttons:{
        flex: 1,
        flexDirection: "row",
        alignContent:"space-between"
    },
    button_single:{
        flex: 1,
        alignSelf: 'center'
    },
    text:{
        color: "#000100",
        fontSize: 18,
        textDecorationLine: 'underline',
        fontWeight: '400'
    },
    text_input:{
        color: "#000100",
        fontSize: 18,
        fontWeight: '400',
        backgroundColor: "#FAFAFA",
        borderWidth: 2,
        borderColor: "#0A369D",
    }
})

export default ItemModal;