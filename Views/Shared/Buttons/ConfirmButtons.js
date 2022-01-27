import React, {Component} from "react";
import { 
    Text,
    View,
    StyleSheet
} from "react-native";
import AcceptButton from "./AcceptButton";
import CancelButton from "./CancelButton";

class ConfirmButtons extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{...styles.row, ...(this.props.style || {})}}>
                <View style={styles.button}>
                    <AcceptButton handlePress={this.props.handleAccept}></AcceptButton>
                </View>
                <View style={styles.button}>
                    <CancelButton handlePress={this.props.handleCancel}></CancelButton>
                </View>
            </View>
        )
    }
}

const styles={
    row:{
        flexDirection: "row",
        alignContent:"space-between"
    },
    button:{
        flex: 1,
        alignSelf: 'center'
    }
}

export default ConfirmButtons;