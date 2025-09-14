import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "blue" }}>
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Test Heading</h1>
            <img
                src="https://as2.ftcdn.net/v2/jpg/13/93/01/47/1000_F_1393014723_Kr4N5gHQ3lZYiwicwoS7B2VraE1BAYYi.webp"
                alt="Smiley!"
            />
            <ol>
                <li>Star Wars Episode IV</li>
                <li>Star Wars Episode V</li>
                <li>Star Wars Episode VI</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Gabriel Poulin Hello World
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%", // fills the column width
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
