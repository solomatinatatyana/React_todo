import React, {Component} from "react";
import {Button} from "antd";


export default class ItemStatusFilter extends Component{
    render(){
        return(<div className="ant-btn-group">
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Done</Button>
        </div>)
    }
}