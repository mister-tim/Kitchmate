import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView
} from 'react-native';

class StepPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ScrollView style={styles.list}>
                {this.renderSteps()}
            </ScrollView>
        );
    }
    renderSteps(){
        let key=0
        return this.props.steps.map( (item) => 
            <View key={key++} style={styles.row}>
                <Text style={styles.text}>Step<Text style={styles.step}>{key}</Text></Text>
                <Text style={styles.text}>{item}</Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: "#FAFAFA"
    },
    row: {
        borderBottomColor: "#03A69D",
        borderBottomWidth: 2
    },
    text: {
        color: "#000100",
        fontSize: 18,
        fontWeight: '400',
        margin: 3,
        textAlign: 'center'
    },
    step:{
        color: "#000100",
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})

export default StepPage;