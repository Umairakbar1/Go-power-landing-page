import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import AppDesignImage from "../../../Assests/Images/AppDesignImage.png"
import {Buttons} from "../../../BasicComponents/Button/button";
import "./appDesigned.css";
class AppDesigned extends Component {
    state={}
    render() { 
        return (
            <React.Fragment>
                <Container fluid className="pt-5">
                    <Row>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <img src={AppDesignImage} width="100%"/>
                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <div className="app-designed-text-div">
                            <h2 className="app-designed-heading">App designed for Designed for <span> easy, hassle-free charging.</span></h2>
                            <p className="app-designed-description">Attractive, discreet IoT devices enable every parking spot for convenient L1 or L2 charging with no messy cords or bulky stations. Tenants can customize each charging session with an easy app that handles electrical usage and payments.</p>
                            <div className="get-in-button-div">
                            <Buttons>Get in Touch</Buttons>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </React.Fragment>
        );
    }
}
 
export default AppDesigned;