import React, { Component } from 'react';
//    importing components
import { Col, Container, Row } from 'react-bootstrap';
//    importing images
import TenantImage from "../../../Assests/Images/Plug2021 1.png";
import Switcgbackground from "../../../Assests/Images/Rectangle 92.png"
import SmallScreenCar from "../../../Assests/Images/shutterstock_1864450102-[Converted] 1.png";
//    importing css files
import "./tenentDemand.css";

class TenantDemand extends Component {
    render() { 
        return (
            <React.Fragment>
                <Container fluid className="tenant-demand-container" >
                    <Row>
                        <Col className="switch-image-col">
                            <img src={TenantImage} width="60%"/>
                        </Col>
                        <Col className="my-auto">
                            <h2 className="tenent-heading">Tenant demand for <span> EV charging </span>is skyrocketing</h2>
                            <Row className="tenant-demand-text-row">
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <div>
                                    <h5>Sales<span> Take Off</span></h5>
                                    <p>Electric vehicles expect to make up 52% of car sales in CA by 2030.</p>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <div>
                                    <h5>EV is <span>More Affordable</span> </h5>
                                    <p>With lower fuel/maintenance costs, EV tenants have more money in their pockets.</p>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <div>
                                    <h5><span>Happier</span> Tenant</h5>
                                    <p>Increase loyalty and occupancy, by providing an essential amenity</p>
                                    </div>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                                    <div>
                                    <h5><span>Green</span> Community </h5>
                                    <p>Future Proof - Renters are willing to pay more to live in a “green or sustainable community”</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="small-screen-col" xl={6} lg={6} md={12} sm={12} xs={12}>
                            <img src={SmallScreenCar} width="100%"/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default TenantDemand;