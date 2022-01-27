import React, {Component} from "react";
import{
    Text,
    View,
    ScrollView,
    StyleSheet,
    Modal
} from 'react-native';
import ItemCard from "./ItemCard";
import AddButton from "./AddButton";
import ItemModal from "./ItemModal";

class ItemList extends Component{
    constructor(props){
        super(props)
        this.state = {list: this.props.list || [], modalOpen: false, item: null}
        this.toggleModal = this.toggleModal.bind(this)
        this.handleAccept = this.handleAccept.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(item){
        this.setState({list: [...this.state.list, item]}, () => this.props.updateStorage(this.state.list))
    }
    deleteItem(item, replacement){
        let holder = this.state.list.filter(current => current !== item)
        if(replacement)this.setState({list: [...holder]}, () => this.addItem(replacement))
        else this.setState({list: [...holder]}, () => this.props.updateStorage(this.state.list)) 
    }
    handleAccept(item, previous){
        if(previous) this.deleteItem(previous, item)
        else this.addItem(item)
    }
    handleEdit(item){
        this.setState({item: item})
        this.toggleModal(true)
    }
    render(){
        return(
            <View style={{...this.props.style || {}}}>
                {this.renderModal()}
                {this.renderHeader()}
                <ScrollView style={styles.list_view}>
                    <AddButton handleTouch={this.toggleModal}></AddButton>
                    {this.renderList()}
                </ScrollView>
            </View> 
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
            (item) => <ItemCard content={item} key={key++} handleEdit={this.handleEdit} handleDelete={this.deleteItem}></ItemCard>)
    }
    renderModal(){
        return(
            <Modal
            animationType = {"slide"}
            transparent={true}
            visible={this.state.modalOpen}>
                <ItemModal handleCancel={this.toggleModal} handleAccept={this.handleAccept} item={this.state.item}></ItemModal>
            </Modal>
        );
    }
    toggleModal(toggle){
        if(!toggle) this.setState({item: null})
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

export default ItemList;