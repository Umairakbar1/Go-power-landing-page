import React, { Component } from 'react';
//      importing components
import { Col, Container, Row } from 'react-bootstrap';
//      importing images/Icons
import AppDesignImage from "../../../Assests/Images/AppDesignImage.png"
import {Buttons} from "../../../BasicComponents/Button/button";
//      importing css files
import "./appDesigned.css";
class AppDesigned extends Component {
    state={}
    render() { 
        return (
            <React.Fragment>
                <div  className="pt-5">
                    <Row>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                            <img src={AppDesignImage} className="app-designed-image my-auto"/>
                        </Col>
                        <Col xl={6} lg={6} md={12} sm={12} xs={12} className="my-auto">
                            <div className="app-designed-text-div">
                            <h2 className="app-designed-heading">App designed for Designed for <span> easy, hassle-free charging.</span></h2>
                            <p className="app-designed-description">Attractive, discreet IoT devices enable every parking spot for convenient L1 or L2 charging with no messy cords or bulky stations. Tenants can customize each charging session with an easy app that handles electrical usage and payments.</p>
                            <div className="get-in-button-div">
                            <Buttons>Get in Touch</Buttons>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </div >
            </React.Fragment>
        );
    }
}
 
export default AppDesigned;