import React, { Component } from 'react';
//     importing components
import LandingPageView from '../View/LandingPageView/landingPageView';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import SideBar from '../Components/SideBar/sideBar';
import Footer from "../Components/Footer/footer";
class Routing extends Component {
    state={}
    render() { 
        return (
            <React.Fragment>
                  <Router> 
                {/* <Switch>
                    <Route exact path="/" render={props => <LandingPageView {...props} />}/>
                </Switch>              */}
                <SideBar/>
                <Routes>
                <Route path="/" element={<LandingPageView/>} />
                </Routes>
                </Router>
                <Footer/>
            </React.Fragment>
        );
    }
}
 
export default Routing;