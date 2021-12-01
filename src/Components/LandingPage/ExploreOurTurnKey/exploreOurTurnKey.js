import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import {ExploresCard,IconCard} from "../../../BasicComponents/ExploreCard/exploreCard";
import Icons1 from "../../../Assests/Icons/Vector.png"
import Icons2 from "../../../Assests/Icons/Vector1.png"
import Icons3 from "../../../Assests/Icons/Vector2.png"
import Icons4 from "../../../Assests/Icons/Vector3.png"

class ExploreOurTurnKey extends Component {
    render() { 
        return (
        <React.Fragment>
                    <ExploresCard  heading={"Explore Our Turnkey Solution"} descrip={"GoPowerEV provides an all-inclusive answer to EV charging needs at multi-family properties. With $0 upfront cost, our subscription service manages electrical permitting, installation, tenant onboarding, energy costs, and maintenance. "}>
                        <Row>
                            <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            <IconCard icon={Icons1} title={"Tenants"}/>
                            </Col>
                            <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            <IconCard icon={Icons2} title={"Property Manager"}/>
                            </Col>
                            <Col className="mt-4" xl={6} lg={6} md={6} sm={6} xs={6}>
                            <IconCard icon={Icons3} title={"Electrical contractor"}/>
                            </Col>
                            <Col className="mt-4" xl={6} lg={6} md={6} sm={6} xs={6}>
                            <IconCard icon={Icons4} title={"Investor"}/>
                            </Col>
                        </Row>
                    </ExploresCard>
        </React.Fragment>
        );
    }
}
 
export default ExploreOurTurnKey;