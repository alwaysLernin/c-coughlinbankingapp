import { Card, Container, Form, Button } from "react-bootstrap"
import {useContext, useState, useEffect } from 'react';

import {AccountContext} from '../contexts/AccountContext';
import { isFieldEmpty } from "../utils/utils";


/*
o	Name validation: The user receives an alert if the name field is left blank. 
o	Email validation: The user receives an alert if this field is blank 
o	Password validation: The user receives an alert if the password is less than 8 characters long. 

*/

const CreateAccount = () =>{
    const hLabel = "NoSafe Bank";
 
    const {addAccount } = useContext(AccountContext);

    const [newAccount, setNewAccount] = useState({
        name:"", email:"", password: ""
    });

    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const clearFormErrors = () => {
        setNameError('');
        setPasswordError('');
        setEmailError('');
    }

    const clearFormFields = () => {
        setNewAccount({ name: "", email: "", password: "" });
    }

    const onInputChange = (e) => {
        clearFormErrors();
        setNewAccount({...newAccount,[e.target.name]: e.target.value})
    }

    const {name, email, password} = newAccount;

    const handleSubmit = (e) => {
        const errLength = validateFields();
        e.preventDefault();
        if(!errLength){
            clearFormFields();
            addAccount(name, email, password);
            alert("Account has been created successfully!");
        }
    }

    const validateFields = () => {
        let errorCount = 0;
        if(password.length < 8){
            setPasswordError("Password must be 8 characters or longer.");
            errorCount++;
        }
        if(isFieldEmpty(name.trim())){
            setNameError("A name is required to create an account.");
            errorCount++;
        }
        if(isFieldEmpty(email.trim())){
            setEmailError("An email is required to create an account");
            errorCount++;
        }
        return errorCount;
    }
    const shouldDisableButton = isFieldEmpty(password) && isFieldEmpty(name.trim()) && isFieldEmpty(email.trim());

     return (
        <Container>
            <br />
            <h1>Create a New Account</h1>
            <br />
            <Card  style={{ backgroundColor: "#eedd82", width: "25rem"}}>
                <Card.Header 
                    className="text-center " 
                    style={{ backgroundColor: "#800000", color: "#fafad2"}}>
                    <h1>{ hLabel }</h1>
                </Card.Header>
                <br />
                <Container>
                <Form id='create-account-form'>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Name *"
                            name="name"
                            value={name}
                            onChange = { (e) => onInputChange(e)}
                        />
                    </Form.Group>
                    {nameError && (
                      <div style={{ color: 'red'}}>{nameError}</div>
                    )}
                    <br />
                    <Form.Group>
                        <Form.Control
                            type="email"
                            placeholder="Email *"
                            name="email"
                            value={email}
                            onChange = { (e) => onInputChange(e)}
                        />
                    </Form.Group>
                    {emailError && (
                      <div style={{ color: 'red'}}>{emailError}</div>
                    )}
                    <br />
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange = { (e) => onInputChange(e)}
                        />
                    </Form.Group>
                    {passwordError && (
                      <div style={{ color: 'red'}}>{passwordError}</div>
                    )}
                    <br />
                    <Container className="text-center">
                        <Button type="submit" block style={{ backgroundColor: "#800000"}} onClick={handleSubmit} disabled={shouldDisableButton}>
                            Create Account
                        </Button>
                    </Container>
                    <br />
                </Form>
                </Container>
            </Card>
        </Container>
     )
}

export default CreateAccount;