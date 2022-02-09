import React from 'react'
import { useState, useContext } from "react";
import {Card, Container, Form, Button, Row } from 'react-bootstrap';
import { AccountContext } from '../contexts/AccountContext';



function Withdraw () {
    const hLabel = "NoSafe Bank";

    const { currentUserId, accounts, decreaseBalance } = useContext(AccountContext);

    const currentUser = accounts.filter(account => account.id === currentUserId)[0];
    console.log('current User: ', currentUser);

    const [amount, setAmount] = useState('');
    const [amountError, setAmountError] = useState(null);

    const handleChange = (e) => {
        setAmount(e.target.value);
        setAmountError(null);

    };

    const updateUserBalance = () => {
        let tempAmountError = null;
        if(isNaN(+amount)) {
            tempAmountError = "Please enter numbers only.";
        }
        else if(+amount < 0){
            tempAmountError = "Please enter a number that is greater than zero";
        }
        else if(amount === ''){
            tempAmountError = "Please enter a number in order to make a withdrawal";
        } else {
            decreaseBalance(amount);
            setAmount('');           
        }
        setAmountError(tempAmountError);
    }

    return (
        <div>
        
        <Container >
            <br />
            <h1>Withdraw</h1>
            <br />
            <Card style={{ backgroundColor: "#eedd82", width: "25rem"}}>
                <Card.Header 
                    className="text-center " 
                    style={{ backgroundColor: "#800000", color: "#fafad2"}}>
                    <h1>{ hLabel }</h1>
                </Card.Header>
                <Form>
                    <Form.Group>
                        <br />
                        <Container>
                            <Row>
                                <h2>Balance: ${currentUser.balance}</h2>
                            </Row>
                        </Container>
                    </Form.Group>
                    <Form.Group>
                        <br />
                        <Container>
                            <Form.Label 
                                style={{ width: "12rem"}} 
                                column lg={2}
                            >
                                Withdrawal Amount:
                            </Form.Label>
                            
                            <Form.Control
                                className="text-end"
                                placeholder={0}
                                onChange = {handleChange}
                                value={amount}
                            />
                        </Container>
                    </Form.Group>
                    {amountError && <div style={{ color: 'red'}}>{amountError}</div>}
                    <br />
                    <Container className="text-center">
                        <Button type="submit" block style={{ backgroundColor: "#800000"}} onClick={updateUserBalance}>
                            Make Withdrawal
                        </Button>
                    </Container>
                    <br />
                </Form>
            </Card> 
        </Container> 
    
        
        </div>
     )
}

export default Withdraw;
