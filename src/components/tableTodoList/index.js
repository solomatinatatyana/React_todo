import React,{useContext, useEffect, useRef, useState} from "react";
import {Table, Space, Button,Form, Input, Popconfirm} from "antd";
import {DeleteOutlined, ExclamationCircleOutlined, EditOutlined} from "@ant-design/icons";
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
                          list,
                          editable,
                          children,
                          dataIndex,
                          record,
                          handleSave,
                          ...restProps
                      }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${list} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

const TableTodoList = ({todos})=>{

    const [dataSource, setDataSource] = useState(todos);
    const [count, setCount] = useState(2);
    const [done, setDone] = useState(false);
    const [important, setImportant] = useState(false);

    const onTitleClick = ()=>{

    }

    const onImportantMarkClick = ({important}) =>{
        //setImportant(important)
    }

    const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    const defaultColumns = [
        {
            title: 'list',
            dataIndex: 'list',
            width: '50%',
            editable: false,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) =>

                dataSource.length >= 1 ? (
                    (
                        <Space size="middle">
                            <Button type="default"
                                    icon={<EditOutlined />}
                                    className="btn-edit">
                            </Button>
                            <Button type="default"
                                    icon={<ExclamationCircleOutlined />}
                                    className="btn-success">
                            </Button>
                            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                                <Button type="default"
                                        danger
                                        icon={<DeleteOutlined/>}>
                                </Button>
                            </Popconfirm>
                        </Space>
                    )

                ) : null,
        },
    ];

    const handleAdd = () => {
        const newData = {
            key: count,
            list: `${count}`
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

    const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                list: col.title,
                handleSave,
            }),
        };
    });
    return (
        <div>
            <Button
                onClick={handleAdd}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Add a row
            </Button>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns}
            />
        </div>
    );
}
export default TableTodoList;