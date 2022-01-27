import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions
} from 'react-native';
import ConfirmButtons from "../../Shared/Buttons/ConfirmButtons";
import ErrorMessage from "../../Shared/ErrorMessage";

class StepModal extends Component{
    constructor(props){
        super(props)
        this.state = {description: this.props.step || "", error: null}
        this.handleAccept = this.handleAccept.bind(this)
    }

    changeText(text){
        this.setState({description: text})
    }
    handleAccept(){
        let text = this.state.description
        if(text.length){
            if(text.length < 129) {
                this.props.handleAccept(this.state.description, this.props.step)
                this.props.handleCancel(false)
            } 
            else this.setState({error: "Description is too long(limit 128 chars)."})
        } else this.setState({error: "No description entered."}) 
    }
    render(){
        return(
            <View style={styles.body}>
                <Text style={styles.text}>Enter Step Description:</Text>
                <TextInput
                style={styles.text_input}
                value={this.state.description}
                onChangeText={(text) => this.changeText(text)}/>
                {(this.state.error) ? <ErrorMessage message={this.state.error}></ErrorMessage> : null}
                <ConfirmButtons handleAccept={this.handleAccept} handleCancel={this.props.handleCancel}></ConfirmButtons>
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

export default StepModal;