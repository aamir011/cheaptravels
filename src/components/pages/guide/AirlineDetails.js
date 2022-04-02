import React, { Component } from "react";
import {Link} from "react-router-dom";

import p_1 from "../../../assets/images/package/p-1.png"
import p_2 from "../../../assets/images/package/p-2.png"
import p_3 from "../../../assets/images/package/p-3.png"
import p_4 from "../../../assets/images/package/p-4.png"
import p_5 from "../../../assets/images/package/p-5.png"
import p_6 from "../../../assets/images/package/p-6.png"
import sidebarBanner from "../../../assets/images/sidebar-banner.png"
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider';
// To include the default styles
import 'react-rangeslider/lib/index.css';
import $ from "jquery";
import AirlinesData from './../../../airlines.json';
import DefaultData from './../../../Data.json'
import Divider from '@mui/material/Divider';
import { connect } from "react-redux";

class AirlineDetails extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            value: 10,
            manageState:'',
            bookType: 'economy',
            data: DefaultData
        }
    }

    render() {
        const { value, bookType } = this.state;
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Airline Details</h2>
                                {/* <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Package Sidebar</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            {/* ===============  Package  area start =============== */}
            <div className="package-sidebar-wrapper pt-120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3">
                            <div className="package-sidebar">
                                <div className="row">
                                   
                                    
                                    <div className="col-lg-12 col-md-6">
                                        <div className="sidebar-banner mt-40">
                                            <img src={sidebarBanner} alt="" className="img-fluid" />
                                            <div className="sidebar-banner-overlay">
                                                <div className="overlay-content">
                                                    <h3>Get 50% Off
                                                        In Dubai Tour</h3>
                                                    <div className="sidebar-banner-btn">
                                                        <Link to={"#"} >Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                           
                            <div className="row">
                            <div className="offer-area ">
                    <div className="container">
                        <div className="row">
                            {DefaultData.length !== 0 ?
                                DefaultData.map((item, key) => {
                                    if(item.AirlineCode === this.props.currentCountry){
                                        let currentAirline = [{
                                            "AirlineCode": "AA",
                                            "airlineLogo": "https://www.alexatravel.co.uk/wp-content/uploads/2018/09/american-airlines-logo.png"
                                        }];
                                        currentAirline = AirlinesData.filter(d => d.AirlineCode === item.AirlineCode)
                                    return (
                                        <div className="col-lg-12">
                                            <div className="package-card-xl">
                                                <div className="package-thumb-xl">
                                                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "20px", padding: "8px", border: '2px solid #eae9e9', borderRadius: '100px', height: "150px", width: "150px"}}>
                                                    <Link style={{  }} to=''>
                                                    {currentAirline.length !== 0 ? <img src={currentAirline[0].airlineLogo} alt="" className="img-fluid" /> : null}
                                                    </Link>
                                                    </div>
                                                   
                                                </div>
                                                <div className="package-details-xl" style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between", width: '100%'}}>
                                                    <div className="package-info justify-content-lg-end">
                                                        <h5><span>${ item.BusinessFare}</span>/Per Person</h5>
                                                        {/* <h5><i className="flaticon-calendar" />5 Days/6 night</h5> */}
                                                    </div>
                                                    <div style={{display: 'flex', justifyContent: "space-around"}}>
                                                    <div>
                                                    <h3 >{item.OriginCode}</h3>
                                                    <h6 style={{color: '#9e9e9e', fontWeight: '700'}} >
                                                        {item.deptCity}
                                                    </h6>
                                                    <h6 style={{color: '#000', fontWeight: '700', marginTop: '8px'}}>{item.deptCountry}</h6>
                                                    </div>
                                                    <div style={{display: 'flex', border: '1px dotted #000', margin: "10px"}}>
                                                        </div>

                                                    <div>
                                                    <h3>{item.DestinationCode} </h3>
                                                    <h6 style={{color: '#9e9e9e', fontWeight: '700'}}>{item.arivalCity}</h6>
                                                    <h6 style={{color: '#000', fontWeight: '700', marginTop: '8px'}}>{item.Country}</h6>
                                                    </div>
                                                    </div>
                                                    <div style={{border: '1px dotted #000', margin: "10px"}}>
                                                        </div>

                                                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem saepe amet magni!</p> */}
                                                    {/* <div className="package-rating">
                                                        <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                                                    </div> */}
                                                     <div className="row">
                                                     <div className="col-lg-6 p-4" style={{color: '#FF7F47', fontWeight: '700'}}>
                                                    <i className="bx bx-phone"/> {" "}
                                                    0309 5122807
                                                </div>
                                                    <div className="col-lg-6 btn align-end"  
                                                    onClick={e => {
                                                            e.preventDefault();
                                                            this.props.currentFlight(item);
                                                        }} 
                                                        >
                                                        <Link to={`${process.env.PUBLIC_URL}/package-details`} 
                                                       
                                                        className="btn-second">Book now</Link>
                                                    </div>
                                                </div>
                                                
                                                </div>
                                               
                                            </div>
                                            
                                        </div>
                                    )
                                                    }
                                })
                                : null}

                        </div>
                    </div>
                </div>
                            </div>
                           
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* ===============  Package  area end =============== */}
        </>
    );
  }
}
function mapStateToProps(state) {
    return {
        currentCountry: state.currentCountry,
    };
}
const currentFlight = (currentState) => ({
    type: "SET_CURRENT",
    payload: currentState,
});
const mapDispatchToProps = (dispatch) => {
    return {
        currentFlight: (payload) => {
            // console.log(payload)
            dispatch(currentFlight(payload));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AirlineDetails);
// export default AirlineDetails;
