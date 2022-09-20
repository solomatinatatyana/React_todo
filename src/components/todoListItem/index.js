import React, {Component} from "react";
import "./TodoListItem.css"
import {Button} from "antd";
import {DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons'

export default class TodoListItem extends Component{

    render(){

        const {label, important = false} = this.props;

        const spanStyle = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }

        return (
            <span className="todo-list-item">
            <span className="todo-list-item-label"
                  style={spanStyle}>
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
                    className="btn-success">
            </Button>
            </div>

        </span>

        )
    }
}