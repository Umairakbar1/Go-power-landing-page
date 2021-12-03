import React, { Component } from 'react';
//      importing components
//      importing images/Icons
import Logo from "../../Assests/Images/logo.PNG"
import {FaBars,FaTimes} from "react-icons/fa"
//      importing css files
import "./sideBar.css";
class SideBar extends Component {
    state={} 
    opneSideBar = ()=>{
        document.getElementById("sideBar").classList.add("show-side-bar")

        // document.getElementById("sideBar").classList.remove("sidebar-main-div")
        document.getElementById("sideBar").classList.remove("hide-side-bar")
    }
    HideSideBar = ()=>{
        // document.getElementById("sideBar").classList.remove("show-side-bar")
        document.getElementById("sideBar").classList.add("hide-side-bar")

    }
    render() { 
        return (
            <React.Fragment>
                <div className="side-bar-main-div">
                <button onClick={()=>this.opneSideBar()} className="open-sidebar-button"><FaBars/></button>
                        <img className="logo" src={Logo} />
                <div className="sidebar-main-div" id="sideBar">
                    <div className="close-button-div">
                    <button className="close-side-bar-button" onClick={()=>this.HideSideBar()}><FaTimes/></button>
                    </div>
                    <ul>
                        <li className="sidebar-heading">Property Managers</li>
                        <li className="sidebar-heading">Tenants</li>
                        <li className="sidebar-heading">Electrical Contractors</li>
                        <li className="sidebar-heading">Investor <hr/></li>
                        <li className="sidebar-sub-heading">About Us</li>
                        <li className="sidebar-sub-heading">Industry News</li>
                        <li className="sidebar-sub-heading">Contact Us</li>
                    </ul>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default SideBar;