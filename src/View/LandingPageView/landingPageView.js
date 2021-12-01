import React, { Component } from 'react';
//    importing components
import FutureIsElectronic from '../../Components/LandingPage/FutureIsElectronic/flutureIsElectronic';
import TenantDemand from '../../Components/LandingPage/TenantDemand/tenantDemand';
import ExploreOurTurnKey from '../../Components/LandingPage/ExploreOurTurnKey/exploreOurTurnKey';
import AppDesigned from '../../Components/LandingPage/AppDesigned/appDesigned';
//    importing css files

class LandingPageView extends Component {
    render() { 
        return (
            <React.Fragment>
                <div style={{backgroundColor:"#161825"}}>
                    <FutureIsElectronic/>
                    <TenantDemand/>
                    <ExploreOurTurnKey/>
                    <AppDesigned/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default LandingPageView;