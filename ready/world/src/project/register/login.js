import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './login.css';
import axios from "axios";
import { useNavigate} from "react-router-dom";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
    axios.post("http://localhost:6050/create", { name,dob , gender, email, phone  })
            .then(res => {
                console.log(res);
                navigate('/Selected');
            })
            .catch(err => console.log(err));
    }

    return (
        <section className="login-display">
            <section className="login-box">
                <h3 className="topic">User Information</h3>
                <Form className="style" onSubmit={handleSubmit}>
                    <Form.Group controlId="formGroupName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" className="md-style" onChange={(e) => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formGroupDOB">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control type="date" className="md" onChange={(e) => setDob(e.target.value)} />
                    </Form.Group>
                    <Form.Label>Gender</Form.Label><br />
                    <Form.Check inline label="Male" name="gender" type="radio" id="inline-radio-1" className="md" value="Male" onChange={(e) => setGender(e.target.value)} />
                    <Form.Check inline label="Female" name="gender" type="radio" id="inline-radio-2" className="md" value="Female" onChange={(e) => setGender(e.target.value)} />
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="md-style" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number" className="md-style" onChange={(e) => setPhone(e.target.value)} />
                    </Form.Group>
                    
                   
                    <Form.Group>
                        <Button type="submit" className="btn btn-success lg">Submit</Button>
                    </Form.Group>
                </Form>
            </section>
        </section>
    );
}

export default Login;