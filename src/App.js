import React from 'react';
import {Button, Col, Row} from "antd";
import styles from './App.css';
import ToDoList from "./components/ToDoList";
import SearchPanel from "./components/searchPanel/SearchPanel";
import AppHeader from "./components/AppHeader";

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
        <>
            <div className="App">
                <AppHeader/>
                <SearchPanel className="Search"/>
                <ToDoList todos={todoData}/>
                <Button className="Button" type="primary">Test</Button>
            </div>
            <Row>
                <Col span={8}></Col>
                <Col span={8} className="Button">
                    <Button type="primary">Test</Button>
                </Col>
                <Col span={8}></Col>
            </Row>
        </>
    );
}

export default App;
