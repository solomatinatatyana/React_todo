import React from 'react';
import './App.css';
import ToDoList from "../todoList";
import SearchPanel from "../searchPanel";
import AppHeader from "../AppHeader";
import ItemStatusFilter from "../itemStatusFilter";
import {Col, Row} from "antd";

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
        </div>
    );
}

export default App;
