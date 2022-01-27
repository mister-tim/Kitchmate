import React, {Component} from "react";
import{
    Text,
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView
} from 'react-native';

class IngredientPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ScrollView style={styles.list}>
                {this.renderItems()}
            </ScrollView>
        );
    }
    renderItems(){
        let key=0
        return this.props.list.map( (item) => 
            <View key={key++} style={styles.row}>
                <Text style={styles.item}>{item[0]}</Text>
                <Text style={styles.item}>{item[1]}</Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: "#FAFAFA"
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomColor: "#0A369D",
        borderBottomWidth: 2
    },
    item: {
        color: "#000100",
        fontSize: 18,
        fontWeight: '400',
        margin: 3
    }
})

export default IngredientPage;