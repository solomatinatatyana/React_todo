import React from "react";
import TodoListItem from "../todoListItem";
import "./ToDoList.css"


const ToDoList=({todos})=>{
    const elements = todos.map((item)=>{

        const {id, ...itemProps}=item
        return (
            <li key={item.id} className="ant-list-item ant-list-item-no-flex ant-list-bordered">
                <TodoListItem {...itemProps}/>
            </li>)
    })

    return(<ul className="ant-list-sm ant-list-bordered todo-list">
        {elements}
    </ul>)
}


export default ToDoList;