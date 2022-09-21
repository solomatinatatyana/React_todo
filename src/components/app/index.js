import React from 'react';
import './App.css';
import ToDoList from "../todoList";
import SearchPanel from "../searchPanel";
import AppHeader from "../AppHeader";
import ItemStatusFilter from "../itemStatusFilter";
import {Col, Row} from "antd";
import ItemAddForm from "../itemAddForm";
import TableTodoList from "../tableTodoList";

function App() {
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Drink Tea', important: false, id: 2},
        {label: 'Programming', important: true, id: 3},
        {label: 'Testing', important: false, id: 4},
        {label: 'Fixig bugs', important: false, id: 5},
        {label: 'Testing', important: false, id: 6},
        {label: 'Go to home and sleep', important: true, id: 7},
    ];

    const todoData2 = [
        {key: '1', list: 'Drink Coffee'},
        {key: '2', list: 'Drink Tea'},
        {key: '3', list: 'Programming'},
        {key: '4', list: 'Testing'},
        {key: '5', list: 'Fixig bugs'},
        {key: '6', list: 'Testing'},
        {key: '7', list: 'Go to home and sleep'},
    ];
    return (
        <div className="todo-app">
            <AppHeader/>
            <Row>
                <Col span={12}>
                    <SearchPanel/>
                </Col>
               <Col span={12}>
                   <ItemStatusFilter/>
               </Col>
            </Row>
            <div className="top-panel">
            </div>
            <ToDoList todos={todoData}/>
            <TableTodoList todos={todoData2}/>
            <Row>
                <ItemAddForm/>
            </Row>
        </div>
    );
}

export default App;
