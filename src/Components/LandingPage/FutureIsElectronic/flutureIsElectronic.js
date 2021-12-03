import React, { Component } from 'react';
//    importing components
import { Container } from 'react-bootstrap';
import {Buttons} from "../../../BasicComponents/Button/button"
//    importing css files
import "./futureIsElectronic.css";

class FutureIsElectronic extends Component {
    render() { 
        return (
            <React.Fragment>
                <Container fluid  className="future-is-electronic-container">
                    <div className="future-electronic-div">
                        <p>The Future is Electric</p>
                        <h2>Go<span>PowerEV</span> provides an affordable, hassle-free charging solution for property owners and tenants.</h2>
                        <Buttons>Learn More</Buttons>
                    </div>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default FutureIsElectronic;