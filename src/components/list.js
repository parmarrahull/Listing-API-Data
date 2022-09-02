import axios from 'axios'
import React, { useEffect, useState } from 'react'

const List = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(users.data)
        console.log(users.data);
    }

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            {
                users.map((users, i) => {
                    return (
                        <tbody key={i + 1}>
                            <tr>
                                <th scope="row">{i}</th>
                                <td>{users.name}</td>
                                <td> {users.email} </td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )
}

export default List