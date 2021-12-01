import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterLogo from "../../Assests/Images/footerlogo.PNG";
import {FaLinkedinIn} from "react-icons/fa";
import "./footer.css"
class Footer extends Component {
    render() { 
        return (
            <React.Fragment>
                <Container fluid className="footer-container">
                    <Container className="footer-div">
                        <div className="footer-image-div">
                            <img src={FooterLogo} width="100%"/>
                            <button className="footer-linkedin-button"><FaLinkedinIn/></button>
                        </div>
                        <div className="footer-text-main-div">
                            <div className="footer-text-div">
                                <div>
                                    <h3>Products</h3>
                                    <p>Property Manager</p>
                                    <p>Tenant</p>
                                    <p>Electrical Contractor</p>
                                    <p>Investor</p>
                                </div>
                                <div>
                                    <h3>Company</h3>
                                    <p>About Us</p>
                                    <p>Industry News</p>
                                    <p>Contact Us</p>
                                </div>
                            </div>
                        </div>

                    </Container>
                        <div className="footer-copyright-text-div">
                            <div>
                                <p>Copyright 2010 - 2021</p>
                            </div>
                            <div>
                                <p>Privacy Policy  I  Website Terms</p>
                            </div>
                        </div>
                </Container>
            </React.Fragment>
        );
    }
}
 
export default Footer;