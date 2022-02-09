import React from 'react';
import {Card, Container } from 'react-bootstrap';
  
function Home(){
    const hLabel = "NoSafe Bank";
    const tLabel = "Welcome to the bank";
    const bText01 = "Please select from the menu above";

    return (
    <div>
        <Container>
            <Card  style={{ backgroundColor: "#eedd82", width: "25rem"}}>        
                <Card.Header 
                    className="text-center " 
                    style={{ backgroundColor: "#800000", color: "#fafad2"}}>
                    <h1>{ hLabel }</h1>
                </Card.Header>
                <Card.Title 
                    className= "text-center p-0 m-0" 
                    style={{ color: "maroon", fontWeight: 800}}>
                    <h3>{ tLabel }</h3>
                </Card.Title>
                <Card.Body>            
                    <Card.Text 
                        className= "text-center p-0 m-0" 
                        style={{ color: "maroon"}}>
                        <h5>{ bText01 }</h5>
                    </Card.Text>
                </Card.Body>
                <Card.Img 
                    className="p-3 justify-content-center text-center mx-auto"
                    variant="bottom"
                    src="/bank.png"
                                   
                />
            </Card> 
        </Container> 
    </div>  
    );  
  }
  
export default Home;
