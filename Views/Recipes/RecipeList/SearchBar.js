import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';

class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {search: ""}
    }

    changeText(text){
        this.setState({search: text})
        this.props.filter(text)
    }
    render(){
        return <TextInput
                style={styles.text_input}
                placeholder="Begin Typing to Filter"
                placeholderTextColor="#333433"
                content={this.state.search}
                onChangeText={(text) => this.changeText(text)}/>
    }
}

const styles = StyleSheet.create({
    text_input:{
        color: "#000100",
        fontSize: 18,
        fontWeight: '400',
        backgroundColor: "#FAFAFA",
        borderWidth: 2,
        borderColor: "#0A369D",
    }
})

export default SearchBar;