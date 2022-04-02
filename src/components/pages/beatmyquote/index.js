import React, { Component } from "react";
import {Link} from "react-router-dom";

import pd_thumb from "../../../assets/images/package/pd-thumb.png"
import pr_1 from "../../../assets/images/package/pr-1.png"

import gallery1Img from "../../../assets/images/gallary/gl-1.png"
import gallery2Img from "../../../assets/images/gallary/gl-2.png"
import gallery4Img from "../../../assets/images/gallary/gl-4.png"
import gallery5Img from "../../../assets/images/gallary/gl-5.png"
import gallery6Img from "../../../assets/images/gallary/gl-6.png"

import galleryGxx1Img from "../../../assets/images/gallary/g-xxl-1.png"
import galleryGxx2Img from "../../../assets/images/gallary/g-xxl-2.png"
import galleryGxx3Img from "../../../assets/images/gallary/g-xxl-3.png"

import gallery17Img from "../../../assets/images/gallary/gl-17.png"
import gallery16Img from "../../../assets/images/gallary/gl-16.png"
import gallery14Img from "../../../assets/images/gallary/gl-14.png"

import galleryGxl1Img from "../../../assets/images/gallary/g-xl-1.png"
import galleryGxl2Img from "../../../assets/images/gallary/g-xl-2.png"
import galleryGxl3Img from "../../../assets/images/gallary/g-xl-3.png"
import galleryGxl4Img from "../../../assets/images/gallary/g-xl-4.png"

import pm_sm_1  from "../../../assets/images/package/p-sm-1.png";
import pm_sm_4  from "../../../assets/images/package/p-sm-4.png";
import pm_sm_2  from "../../../assets/images/package/p-sm-2.png";
import pm_sm_3  from "../../../assets/images/package/p-sm-3.png";

import organizer  from "../../../assets/images/organizer.png";
import sidebarBannar  from "../../../assets/images/sidebar-banner.png";

import { SRLWrapper } from "simple-react-lightbox";
import AirlinesData from './../../../airlines.json';
import emailjs from '@emailjs/browser';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CircularProgress from '@mui/material/CircularProgress';


class Index extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            departureDate:'',
            returnDate:'',
            type: false,
            isClicked: false
        };
        this.sendEmail = this.sendEmail.bind(this)
    }
    sendEmail = (e, data) => {
        e.preventDefault();
        this.setState({isClicked: true})
    console.log(this.form)
        emailjs.sendForm('service_mvzun0t', 'template_mx08mb9', this.form.current, 'Qu2OlbN20RhUB5zHG')
          .then((result) => {
              console.log(result.text);
              this.setState({sent: true, isClicked: false})
          }, (error) => {
              console.log(error.text);
              this.setState({sent: true, isClicked: false})

          });
      };

    changeDatepickerHandeller=(date)=>{
        this.setState({ departureDate: date });
    }
    handleReturnDate=(date)=>{
        this.setState({ returnDate: date });
    }

    componentDidMount(){
        this.scrollTop();
    }

    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
  render() {
        const departureDate =this.state.departureDate;
        const returnDate =this.state.returnDate;
        console.log(this.props.currntObj)
        const data = this.props.currntObj;
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Beat My Quote</h2>
                                <p>We find you the best flight quotes for your trip! To take this a bit further we have dedicated a team of professionals just to beat your quotes to worldwide destinations from UK. This form allows you to submit a request to beat an offer you found online. Fill out the form below and one of our experts will Beat Your Quote!</p>
                                {/* <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Package Details</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            <div className="package-details-wrapper pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="package-d-sidebar">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="p-sidebar-form">
                                            <form  ref={this.form} onSubmit={e => this.sendEmail(e)}>
                                                <h5 className="package-d-head">Book This Package</h5>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <input className="inputContainer" name="fname" type="text" placeholder="First Name" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input className="inputContainer" name="lname" type="text" placeholder="Last Name" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input className="inputContainer" name="email" type="email" placeholder="Your Email" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <input className="inputContainer" name="phone" type="tel" placeholder="Phone" />
                                                    </div>
                                                   
                                                    <div className="col-lg-12">
                                                        <div  className="calendar-input" id="packageCalenderMainDiv">
                                                        <label htmlFor="duration1">Departure Date</label>
                                                             <DatePicker selected={departureDate} name='depDate' onChange={(date) => this.changeDatepickerHandeller(date)}  className="input-field check-in" />
                                                            <i className="flaticon-calendar" id="packageCalenderIcon"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div  className="calendar-input" id="packageCalenderMainDiv">
                                                        <label htmlFor="duration1">Return Date</label>
                                                            <DatePicker selected={returnDate} name='returnDate' onChange={(date) => this.handleReturnDate(date)}  className="input-field check-in" />
                                                            <i className="flaticon-calendar" id="packageCalenderIcon"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <textarea cols={30} rows={7} name="message" placeholder="Message" defaultValue={""} />
                                                    </div>
                                                    <div className="col-lg-12">
                                                    {!this.state.isClicked ? <input type="submit" value='Send Request' defaultValue="Book Now" /> :
                                                         <Link to='' className="btn-second">
                                                        <CircularProgress style={{color:"#fff"}}/></Link>}
                                                    </div>
                                                </div>
                                            </form>
                                    {this.state.sent ? <p className="mt-5">Your message has been sent. We will contact you soon.</p> : null}

                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12 col-md-6">
                                        <div className="p-sidebar-cards mt-40">
                                            <h5 className="package-d-head">Popular Packages</h5>
                                            <ul className="package-cards">
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_1} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Lake Garda</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_4} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Paris Hill Tour</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_2} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Amalfi Costa</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_3} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Mount Dtna</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                                <li className="package-card-sm">
                                                    <div className="p-sm-img">
                                                        <img src={pm_sm_4} alt="" />
                                                    </div>
                                                    <div className="package-info">
                                                        <div className="package-date-sm">
                                                            <strong><i className="flaticon-calendar" />5 Days/6 night</strong>
                                                        </div>
                                                        <h3><i className="flaticon-arrival" />
                                                            <Link to={`${process.env.PUBLIC_URL}/package-details`}>Fench Rivirany</Link>
                                                        </h3>
                                                        <h5><span>$180</span>/ Per Person</h5>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="p-sidebar-organizer mt-40">
                                            <h5 className="package-d-head">Organized By</h5>
                                            <div className="organizer-card">
                                                <div className="organizer-img">
                                                    <img src={organizer} alt="" />
                                                </div>
                                                <div className="organizer-info">
                                                    <h5>Travelhotel</h5>
                                                    <p>Member since 2021</p>
                                                    <ul className="organizer-rating">
                                                        <li><i className="bx bxs-star" /></li>
                                                        <li><i className="bx bxs-star" /></li>
                                                        <li><i className="bx bxs-star" /></li>
                                                        <li><i className="bx bxs-star" /></li>
                                                        <li><i className="bx bx-star" /></li>
                                                    </ul>
                                                    <h5>500 Reviews</h5>
                                                </div>
                                            </div>
                                            <div className="p-ask-btn">
                                                <Link to={`${process.env.PUBLIC_URL}/contact`} >ASK A QUESTION</Link>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-12 col-md-6">
                                        <div className="p-sidebar-banner mt-40">
                                            <img src={sidebarBannar} alt="" className="img-fluid" />
                                            <div className="sidebar-banner-overlay">
                                                <div className="overlay-content">
                                                    <h3>Get 50% Off
                                                        In Dubai Tour</h3>
                                                    <div className="sidebar-banner-btn">
                                                        <Link to={`#`} >Book Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
}
export default Index;
