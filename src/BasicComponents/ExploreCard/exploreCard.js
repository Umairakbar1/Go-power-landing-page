import React from 'react';
//     importing components
import { Col, Container, Row } from 'react-bootstrap';
//     importing css files
import "./exploreCard.css";
export const ExploresCard = (props) =>{
    return(
            <Row className="explore-card-div">
                <Col className="my-auto text-col" xl={6} lg={6} md={12} sm={12} xs={12}>
                    <h3>{props.heading}</h3>
                    <p className="explore-card-text">{props.descrip}</p>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    {props.children}
                </Col>
            </Row>
    )
}
export const IconCard = (props) =>{
    return(
        <div className="icon-card-div">
            <img src={props.icon} className="card-icon" />
            <p className="icon-card-title">{props.title}</p>
            <p className="icon-card-explore-text">Explore</p>
        </div>
    )
}
