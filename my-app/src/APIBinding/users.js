import React, { useEffect, useState } from "react";
import './users.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Users = () => {

    const [userlist, setUserlist] = useState([]);

    const navigate = useNavigate()

    const getUserList = async () => {
        try {
            const response = await axios.get("https://reqres.in/api/users?page=2/");
            setUserlist(response.data.data);
            console.log("API", response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleLogout = () => {
        console.log("logout");
        navigate('/');
        localStorage.removeItem("token")
    }

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div className="userContainer">
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                    {userlist.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.email}</td>
                                <td>{val.first_name}</td>
                                <td>{val.last_name}</td>
                                <td><img width={95} height={95} src={val.avatar} alt="loading" /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className="logoutBtn" onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Users


