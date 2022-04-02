import React, { Component } from "react";
import {Link} from "react-router-dom";

import sidebarBannar  from "../../../assets/images/sidebar-banner.png";
import { SRLWrapper } from "simple-react-lightbox";
import AirlinesData from './../../../airlines.json';
import emailjs from '@emailjs/browser';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Switch from '@mui/material/Switch';
import CircularProgress from '@mui/material/CircularProgress';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

class PackageDetails extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            departureDate:'',
            returnDate:'',
            type: false,
            sent: false,
            isClicked: false
        };
        this.sendEmail = this.sendEmail.bind(this)
    }
    sendEmail = (e, data) => {
        e.preventDefault();
        let user_captcha = document.getElementById('user_captcha_input').value;
 
        if (validateCaptcha(user_captcha)==true) {
            // alert('Captcha Matched');
            loadCaptchaEnginge(6); 
            document.getElementById('user_captcha_input').value = "";
            this.setState({isClicked: true})
            console.log(this.form)
                emailjs.sendForm('service_mvzun0t', 'template_mx08mb9', this.form.current, 'Qu2OlbN20RhUB5zHG')
                  .then((result) => {
                      console.log(result.text);
                      this.setState({sent: true, isClicked: false})
                  }, (error) => {
                    this.setState({sent: true, isClicked: false})
                      console.log(error.text);
                  });
        }
 
        else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
        }
       
      };

    changeDatepickerHandeller=(date)=>{
        this.setState({ departureDate: date });
    }
    handleReturnDate=(date)=>{
        this.setState({ returnDate: date });
    }
    // componentDidMount () {
    //     loadCaptchaEnginge(6); 
    //  };

    componentDidMount(){
        loadCaptchaEnginge(6); 
        this.scrollTop();
    }
    doSubmit = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;
 
        if (validateCaptcha(user_captcha)==true) {
            alert('Captcha Matched');
            loadCaptchaEnginge(6); 
            document.getElementById('user_captcha_input').value = "";
        }
 
        else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
        }
    };
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
                                <h2>Booking Request Form</h2>
                                <h2>Flight from {data.deptCity} to {data.arivalCity} with {data.AirlineCode}</h2>
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

          

            <div className="package-details-wrapper mt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="newsletter-area pt-80 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="newsletter-wrapper">
                                    <h2>Need Help ? Call Now <span style={{color: '#FF7F47', fontSize:'25px'}}>0303-1234567</span></h2>
                                    <p className="text-white" style={{fontSize: '15px'}}>Note : If the requested fare will not be available then we will offer you the best alternate fare.</p>
                                    {/* <form>
                                        <div className="input-group newsletter-input">
                                            <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                            <div className="package-details">
                                {/* <div className="package-thumb">
                                    <div className="row item-center" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                        <div className="col-lg-6" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "80px", width: "180px"}}>
                                        <img src={(AirlinesData.filter(d => d.AirlineCode === data.AirlineCode)[0].airlineLogo)} alt="" />
                                        </div>
                                    </div>
                                </div> */}
                                <div className="package-header">
                                    <div className="package-title">
                                        
                                    <img src={(AirlinesData.filter(d => d.AirlineCode === data.airlineCode)[0].airlineLogo)} alt="" />

                                        {/* <h3>{data.AirlineCode}</h3>
                                        <strong><i className="flaticon-arrival" />
                                          {data.arivalCity}
                                        </strong> */}
                                    </div>
                                    <div className="pd-review">
                                        <p>Excellent</p>
                                        <ul>
                                            <li><i className="bx bxs-star" /></li>
                                            <li><i className="bx bxs-star" /></li>
                                            <li><i className="bx bxs-star" /></li>
                                            <li><i className="bx bxs-star" /></li>
                                            <li><i className="bx bx-star" /></li>
                                        </ul>
                                        <p>800 Review</p>
                                    </div>
                                </div>
                                <div className="p-short-info">
                                    <div className="single-info">
                                        <i className="flaticon-clock" />
                                        <div className="info-texts">
                                            <strong>{data.originCode}</strong>
                                            <p>{data.deptCity}</p>
                                        </div>
                                    </div>
                                    <div className="single-info">
                                        <i className="flaticon-footprints" />
                                        <div className="info-texts">
                                            <strong>{data.destinationCode}</strong>
                                            <p>{data.arivalCity}</p>
                                        </div>
                                    </div>
                                    <div className="single-info">
                                        <i className="flaticon-traveller" />
                                        <div className="info-texts">
                                            <strong>{this.state.type? data.fares :data.fares} /Per Person</strong>
                                            <div><span>Economy</span> <Switch
            checked={this.state.type}
            onChange={() => this.setState({type: !this.state.type})}
            name="loading"
            color="primary"
          /><span>Businesss</span>
          </div>
                                        </div>
                                    </div>
                                    {/* <div className="single-info">
                                        <i className="flaticon-translate" />
                                        <div className="info-texts">
                                            <strong>Languages</strong>
                                            <p>Any Language</p>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="package-tab">
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="package-d-sidebar">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="p-sidebar-form">
                                            <form  ref={this.form} onSubmit={e => this.sendEmail(e)}>
                                                <h5 className="package-d-head">Passenger Detail</h5>
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
                                                    <LoadCanvasTemplate />
                                                    <div className="col-lg-12">
                                                        <input className="inputContainer" id="user_captcha_input" name="user_captcha_input" type="text" placeholder="Enter Captcha Value" />
                                                    </div>
                                                    {/* <input placeholder="Enter Captcha Value" id="user_captcha_input" name="user_captcha_input" type="text"></input> */}
                                                    {/* <LoadCanvasTemplateNoReload /> */}
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
function mapStateToProps(state) {
    return {
        currntObj: state.currntObj,
    };
}
export default connect(mapStateToProps, null)(PackageDetails);
// export default PackageDetails;
