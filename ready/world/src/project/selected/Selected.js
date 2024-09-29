import React, { useEffect, useState } from "react";
import './select.css';
import axios from 'axios';
import { Link } from "react-router-dom";

function Selected() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:6050/")
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://localhost:6050/delete/${id}`)
            .then(res => {
                console.log(res.data);
                setUser(user.filter(item => item.id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <section className='selected'>
            <section className="curd-box">
                <h2 className="topic-style">Data Information</h2>
                <Link to='/login' className="btn btn-success add-btn">Add +</Link>
                <table className="table">
                    <thead className="table-head">
                        <tr>
                            <th>Id</th>
                            <th>NAME</th>
                            <th>DATE OF BIRTH</th>
                            <th>GENDER</th>
                            <th>EMAIL ID</th>
                            <th>PHONE NUMBER</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                                <td>{item.gender}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                
                              
                                <td>
                                    <Link to={`/Update/${item.id}`} className="btn btn-warning btn-style">Update</Link>
                                    <button className="btn btn-danger btn-style" onClick={() => deleteUser(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    );
}

export default Selected;