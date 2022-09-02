import { Space, Table, Button } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';


const Listdata = () => {

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: (id) => (
                id + 1
            )
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'UserName',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" ghost>
                        Edit
                    </Button>
                    <Button type="primary" danger ghost>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    const [user, setUser] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUser(res.data.map(row => ({id:row.id, name: row.name, username: row.username, email: row.email })))
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const data = [
        {
            id: 'id',
            name: 'name',
            username: "username",
            email: 'email',
        },
      ];

    return (
        <>
            <Table columns={columns} dataSource={user} />;
        </>
    )
}

export default Listdata