import React, { Component } from 'react';
import './App.css';
class TodoList1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            list: []
        }
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    HandleEnter = (e) => {
        const { text,list } = this.state;
        if (text.trim() == "") {
            console.log("Empty add");
        } else if (e.key === "Enter") {
            if(list.findIndex(item=>item.name === text) === -1){
                this.setState({
                    list: [...this.state.list, { name: this.state.text, isSelected:false , isCompleted:false , isEditing:false}],
                    text: ""
                })
            }    else{
                this.setState({
                    text:''
                })
            }
        }
    }