import React from "react";
import {Button, Form, Input} from "antd";
import "./ItemAddForm.css"
const ItemAddForm = ()=>{
    const [form] = Form.useForm();
    return(
        <Form form={form} layout="inline">
            <Form.Item name="new item">
                <Input size="middle" placeholder="add new item"/>
            </Form.Item>
            <Form.Item shouldUpdate>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit">Add
                    </Button>
                )}
            </Form.Item>
        </Form>
    )
}

export default ItemAddForm;