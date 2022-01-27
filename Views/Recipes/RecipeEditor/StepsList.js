import React, {Component} from "react";
import{
    Text,
    View,
    ScrollView,
    StyleSheet,
    Modal
} from 'react-native';
import AddStep from "./AddStep";
import StepCard from "./StepCard";
import StepModal from "./StepModal";

class StepsList extends Component{
    constructor(props){
        super(props)
        this.state = {list: this.props.list || [], modalOpen: false, step: null}
        this.toggleModal = this.toggleModal.bind(this)
        this.handleAccept = this.handleAccept.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.handleDown = this.handleDown.bind(this)
        this.handleUp = this.handleUp.bind(this)
    }

    addItem(step){
        this.setState({list: [...this.state.list, step]}, () => this.props.updateStorage(this.state.list))
    }
    deleteItem(step, replacement){
        let holder = this.state.list.filter(current => current !== step)
        if(replacement)this.setState({list: [...holder]}, () => this.addItem(replacement))
        else this.setState({list: [...holder]}, () => this.props.updateStorage(this.state.list)) 
    }
    handleAccept(step, previous){
        if(previous) this.shiftSteps(this.state.list.indexOf(previous), [step], 1)
        else this.addItem(step)
    }
    handleDown(step){
        let start = this.state.list.indexOf(step)
        if(start !== this.state.list.length-1){
            let insert = [this.state.list[start+1], this.state.list[start]]
            this.shiftSteps(start, insert, 2)
        }
    }
    handleEdit(step){
        this.setState({step: step})
        this.toggleModal(true)
    }
    handleUp(step){
        let start = this.state.list.indexOf(step)
        if(start){
            let insert = [this.state.list[start], this.state.list[start-1]]
            this.shiftSteps(start-1, insert, 2)
        }
    }
    renderHeader(){
        return(
            <View style={styles.title}>
                <Text style={styles.title_text}>Steps</Text>
            </View>
        );
    }
    renderList(){
        let key = 0
        return this.state.list.map(
            (step) => <StepCard content={step} key={key++} handleEdit={this.handleEdit} handleDelete={this.deleteItem}
            handleUp={this.handleUp} handleDown={this.handleDown}></StepCard>)
    }
    renderModal(){
        return(
            <Modal
            animationType = {"slide"}
            transparent={true}
            visible={this.state.modalOpen}>
                <StepModal handleCancel={this.toggleModal} handleAccept={this.handleAccept} step={this.state.step}></StepModal>
            </Modal>
        );
    }
    render(){
        return(
            <View style={this.props.style || {}}>
                {this.renderModal()}
                {this.renderHeader()}
                <ScrollView style={styles.list_view}>
                    <AddStep handleTouch={this.toggleModal}></AddStep>
                    {this.renderList()}
                </ScrollView>
            </View> 
        )
        
    }
    shiftSteps(index, elements, number){
        let newlist = this.state.list
        newlist.splice(index, number, ...elements)
        this.setState({list: newlist})
    }
    toggleModal(toggle){
        if(!toggle) this.setState({step: null})
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

export default StepsList;

/**
 * List should be saved as an object which contains key value pairs, so that the steps can be indexxed numerically.
 */