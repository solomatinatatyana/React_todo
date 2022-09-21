import React, {Component} from "react";
import "./TodoListItem.css"
import {Button} from "antd";
import {DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons'

export default class TodoListItem extends Component{

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            };
        });
    }

    onImportantMarkClick = () =>{
        this.setState(({important}) =>{
            return{
                important: !important
            }
        });
    }

    render(){

        const {label} = this.props;
        const{done,important}=this.state

        let classNames = "todo-list-item"
        if(done){
            classNames += " done"
        }
        if(important){
            classNames += " important"
        }

        return (
            <span className={classNames}>
            <span className="todo-list-item-label"
                  onClick={this.onLabelClick}>
            {label}
            </span>

            <div className="ant-btn-group">
                <Button type="default"
                        danger
                        icon={<DeleteOutlined/>}
                        className="">
            </Button>

            <Button type="default"
                    icon={<ExclamationCircleOutlined />}
                    className="btn-success"
                    onClick={this.onImportantMarkClick}>
            </Button>
            </div>

        </span>

        )
    }
}