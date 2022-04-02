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
import Divider from '@mui/material/Divider';
import { connect } from "react-redux";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot} from 'firebase/firestore';

class PackageSidebar extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
            value: 10,
            manageState:'',
            bookType: 'economy',
            data: [],
            selectedCountry: [],
            storeData: []
        }
    }
    componentDidMount() {
        // this.intiScripts();
        const q = query(collection(db, 'FaresData'))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                // console.log(doc.data().Data);
                // this.setState({data: doc.data().Data});
                this.setState({storeData: JSON.parse(doc.data().Data), data: JSON.parse(doc.data().Data), selectedCountry: JSON.parse(doc.data().Data)});

            })
        })


    }
    filteredData = e => {
        let _temp = this.state.selectedCountry;

        let name = e.target.value;
        console.log(name)
        let res = _temp.filter( d => d.AirlineCode === name)
        this.setState({data: res})
        //  return res;
    }
    filteredData1 = e => {
        let name = e.target.value;
        let res = this.state.storeData.filter( d => d.Country === name)
        console.log(res)  
        this.setState({data: res, selectedCountry: res})
        //  return res;
    }

    render() {
        // console.log(typeof JSON.parse(this.props.currentData))
        const { value, bookType } = this.state;
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Business Class Flights</h2>
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
                                    <div className="col-lg-12 col-md-12">
                                        <div className="sidebar-searchbox">
                                            <div className="input-group search-box d-flex justify-content-between">
                                                <span className="">Sort & filter </span><span role="button" onClick={e => this.setState({data: this.state.storeData})} className="text-primary " >Show All</span>
                                                </div>
                                        </div>
                                    </div>
                                       <div className="col-lg-12 col-md-6">
                                        <div className="sidebar-categorie mt-40">
                                            <h5 className="categorie-head">Destinations</h5>
                                            <div className="durations-option radio-box">
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData1(e)}  value="United States" type="radio" name="categorie" id="categorieus" />
                                                    <label htmlFor="categorieus">United States</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData1(e)}  value="Australia" type="radio" name="categorie" id="categorieas" />
                                                    <label htmlFor="categorieas">Australia</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData1(e)} value="Nigeria" type="radio" name="categorie" id="categorieni" />
                                                    <label htmlFor="categorieni">Nigeria</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData1(e)} value="Pakistan" type="radio" name="categorie" id="categoriepa" />
                                                    <label htmlFor="categoriepa">Pakistan</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData1(e)} value="Jamaica" type="radio" name="categorie" id="categorieja" />
                                                    <label htmlFor="categorieja">Jamaica</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData1(e)} value="Ghana" type="radio" name="categorie" id="categoriegh" />
                                                    <label htmlFor="categoriegh">Ghana</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="sidebar-categorie mt-40">
                                            <h5 className="categorie-head">Airlines</h5>
                                            <div className="durations-option radio-box">
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)}  value="KL" type="radio" name="categorie1" id="categorie1" />
                                                    <label htmlFor="categorie1">KLM</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="BA" type="radio" name="categorie1" id="categorie2" />
                                                    <label htmlFor="categorie2">British Airways</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="UA" type="radio" name="categorie1" id="categorie3" />
                                                    <label htmlFor="categorie3">United Airlines</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="DA" type="radio" name="categorie1" id="categorie4" />
                                                    <label htmlFor="categorie4">Delta Airlines</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="VA" type="radio" name="categorie1" id="categorie5" />
                                                    <label htmlFor="categorie5">Virgin Altlantic</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="AA" type="radio" name="categorie1" id="categorie6" />
                                                    <label htmlFor="categorie6">American Airlines</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="AF" type="radio" name="categorie1" id="categorie7" />
                                                    <label htmlFor="categorie7">Air France</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                            {this.state.data.length !== 0 ?
                                this.state.data.map((item, key) => {
                                    let currentAirline = [{
                                        "AirlineCode": "AA",
                                        "airlineLogo": "https://www.alexatravel.co.uk/wp-content/uploads/2018/09/american-airlines-logo.png"
                                    }];
                                    currentAirline = AirlinesData.filter(d => d.AirlineCode === item.airlineCode)
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
                                                        <h5><span>${item.fares}</span>/Per Person</h5>
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
                                                    <h3>{item.destinationCode} </h3>
                                                    <h6 style={{color: '#9e9e9e', fontWeight: '700'}}>{item.arivalCity}</h6>
                                                    <h6 style={{color: '#000', fontWeight: '700', marginTop: '8px'}}>{item.country}</h6>
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
                                                    +447915634791
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
export default connect(null, mapDispatchToProps)(PackageSidebar);
// export default PackageSidebar;
