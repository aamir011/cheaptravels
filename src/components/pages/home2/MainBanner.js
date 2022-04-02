import React, { Component } from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pv_1 from "../../../assets/images/package/pv-1.png"
import mk from '../../../assets/images/flights/BA.png'
import offer1Image from "../../../assets/images/package/offer-1.png"
import offer2Image from "../../../assets/images/package/offer-2.png"
import offer3Image from "../../../assets/images/package/offer-3.png"
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import AirlinesData from './../../../airlines.json';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { ConstructionTwoTone, ContactSupportOutlined } from "@mui/icons-material";
import sidebarBanner from "../../../assets/images/sidebar-banner.png"
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot} from 'firebase/firestore';

// import Autocomplete from "react-google-autocomplete";
// import './pikerStyle.css'

class MainBanner extends Component {

    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            departure: '',
            destination: '',
            outBond: '',
            returnBond: '',
            adults: 1,
             child: 0,
              infants: 0 ,
            bookType: 'economy',
            list: [],
            result: [],
            anchorEl: null,
            outBondDatePickerIsOpen: false,
            piker: false,
            plusPadding: '21px',
            plusPadding1: '21px',
            data: []

        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeOutBond = this.handleChangeOutBond.bind(this);
        this.openDatePickerOutBond = this.openDatePickerOutBond.bind(this)
        this.handleChangeReturnBond = this.handleChangeReturnBond.bind(this);
        this.openDatePickerReturnBond = this.openDatePickerReturnBond.bind(this);
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
    handleClick = (event) => {
        console.log(event.currentTarget)
        this.setState({ anchorEl: event.currentTarget });
    };
    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    handleSearch = () => {
        let resultArr = [];
        let tempArr = [...this.state.data];
        resultArr = tempArr.filter(
            (val) =>
                val?.OriginCode?.toLowerCase() === this.state.departure?.toLowerCase() &&
                //    val?.date === this.formatDate(this.state.outBond) &&
                val?.DestinationCode?.toLowerCase() === this.state.destination?.toLowerCase()
        );
        this.setState({ list: resultArr, result: resultArr })
    }
    filteredData = e => {
        let name = e.target.value;
        console.log(name)
        let res = this.state.list.filter( d => d.AirlineCode === name)
        this.setState({result: res})
        //  return res;
    }
    changeHandeller = (date) => {
        this.setState({ outBond: date });
    }
    handleChangeOutBond(date) {
        this.setState({
            outBond: date
        });
        this.setState({plusPadding: '4px'})

    }

    openDatePickerOutBond() {
        this.setState({
            outBondDatePickerIsOpen: true,
        });
    };
    handleChangeReturnBond(date) {
        console.log(date)
        this.setState({
            returnBond: date
        });
        this.setState({plusPadding1: '4px'})
    }

    openDatePickerReturnBond() {
        this.setState({
            outBondDatePickerIsOpen: false,
        });
        this.setState({
            returnBondDatePickerIsOpen: true,
        });
    };
    render() {
        const open = Boolean(this.state.anchorEl);

        const mainBannerOptions = {
            stagePadding: 1,
            items: 3,
            loop: true,
            margin: 25,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='bx bx-chevron-left' ></i>", "<i class='bx bx-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                600: {
                    items: 2,
                    nav: false,
                    dots: false,
                },
                1000: {
                    items: 3,
                    dots: false,
                    nav: false,
                    loop: true
                }
            }
        };
        const startDate = this.state.startDate;
        const {
            destination,
            departure,
            outBond,
            returnBond,
            adults,
            child,
            infants,
            bookType,
            list,
            piker,
            anchorEl
        } = this.state

        console.log(AirlinesData.filter(item => item.AirlineCode === 'AA'))
        // const image = require(`../../../assets/images/flights/BA.png`);
        return (
            <>
                {/* ===============  main banner area 2 start =============== */}
                <div className="main-banner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="main-banner-content-2">
                                    <div className="find-form-2">
                                        <form className="findfrom-wrapper">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="col-lg-12">
                                                        <input className="inputContainer" type="text" placeholder="Departure..." value={departure} onChange={(e) => this.setState({ departure: e.target.value })} />
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <input className="inputContainer" type="text" placeholder="Destination..." value={destination} onChange={(e) => this.setState({ destination: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mb-3">
                                                <div className="row">
                                                <div className="col-sm-6 col-lg-6">
                                                    <div className="calendar-input"  >
                                                        {/* <i className="flaticon-calendar"/> */}
                                                        <div onClick={e => {
                                                                    e.preventDefault();
                                                                    this.openDatePickerOutBond()
                                                                }} style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            // justifyContent: 'space-around',
                                                            background: '#fff',
                                                            borderRadius: '5px',
                                                            padding: this.state.plusPadding,
                                                            cursor: 'pointer'
                                                        }}>
                                                            <label style={{
                                                                fontWeight: 700,
                                                                fontSize: '13px',
                                                                lineHeight: '16px',
                                                                color: '#262339',
                                                            }} class="placehold">Outbound</label>
                                                            <div class="plus-checkIn sameclass" >
                                                                <DatePicker
                                                                    selected={outBond}
                                                                    onChange={this.handleChangeOutBond}
                                                                    onClickOutside={this.openDatePickerOutBond}
                                                                    
                                                                    open={this.state.outBondDatePickerIsOpen}
                                                                    className="my-class"
                                                                />
                                                               {!outBond ? <img  src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/plus.png" alt="plus icons"/>
                                                                :
                                                                <>
                                                                <div style={{color: '#FF7F47', fontSize: '30px', fontWeight: 'bold'}}>
                                                                    {('0' + outBond.getDate()).slice(-2)}
                                                                </div>
                                                                <div>
                                                                {
                                                                    
                                                                
                                                                outBond.toLocaleString('default', { month: 'long' })}
                                                                </div>
                                                                </>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-lg-6">
                                                    <div className="calendar-input"  >
                                                        {/* <i className="flaticon-calendar"/> */}
                                                        <div onClick={e => {
                                                                    e.preventDefault();
                                                                    this.openDatePickerReturnBond()
                                                                    // this.setState({plusPadding1: '4px'})
                                                                }} style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            // justifyContent: 'space-around',
                                                            background: '#fff',
                                                            borderRadius: '5px',
                                                            padding: this.state.plusPadding1,
                                                            cursor: 'pointer'
                                                        }}>
                                                            <label style={{
                                                                fontWeight: 700,
                                                                fontSize: '13px',
                                                                lineHeight: '16px',
                                                                color: '#262339',
                                                            }} class="placehold">Returnbond</label>
                                                            <div class="plus-checkIn sameclass" >
                                                                <DatePicker
                                                                    selected={returnBond}
                                                                    onChange={this.handleChangeReturnBond}
                                                                    onClickOutside={this.openDatePickerReturnBond}
                                                                    open={this.state.returnBondDatePickerIsOpen}
                                                                    className="my-class"
                                                                />
                                                               {!returnBond ? <img  src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/plus.png" alt="plus icons"/>
                                                                :
                                                                <>
                                                                <div style={{color: '#FF7F47', fontSize: '30px', fontWeight: 'bold'}}>
                                                                    {('0' + returnBond.getDate()).slice(-2)}
                                                                </div>
                                                                <div>
                                                                {
                                                                    
                                                                
                                                                returnBond.toLocaleString('default', { month: 'long' })}
                                                                </div>
                                                                </>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="col-lg-12">
                                                        {/* <div className="custom-select"> */}
                                                        <div className="calendar-input">
                                                        <div className= "inputContainer"
                                                         onClick={e => {
                                                            e.preventDefault();
                                                            this.setState({
                                                                returnBondDatePickerIsOpen: false,
                                                                outBondDatePickerIsOpen: false
                                                            });
                                                            // console.log('dfsf')
                                                            this.handleClick(e)
                                                        }}
                                                        >
                                                            <div
                                                            style={{
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                fontWeight: 700,
                                                                fontSize: '13px',
                                                                color: '#262339',
                                                                cursor: 'pointer'
                                                            }}
                                                                id="demo-positioned-button"
                                                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                                                aria-haspopup="true"
                                                                // style={{  }}
                                                                aria-expanded={open ? 'true' : undefined}
                                                               
                                                            >
                                                                {adults}{' '} Adt - {child}{" "} Chd - {infants}{" "}Inf
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className="col-lg-12 mt-3">
                                                        <select onChange={ e => {
                                                             this.setState({
                                                                returnBondDatePickerIsOpen: false,
                                                                outBondDatePickerIsOpen: false
                                                            });
                                                            this.setState({bookType: e.target.value})}} value={bookType}>
                                                            <option value='economy'>Economy</option>
                                                            <option value="business">Business</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="d-grid justify-content-lg-end" style={{ margin: '15px' }}>
                                                    <div className="btn me-mt-2 ">
                                                        <Link to='' onClick={e => {
                                                            e.preventDefault();
                                                            this.setState({
                                                                returnBondDatePickerIsOpen: false,
                                                                outBondDatePickerIsOpen: false
                                                            });
                                                            this.handleSearch();
                                                        }} className="btn-second"><i className="bx bx-search-alt" /> Find now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <h2>Amazing Tour In <br />
                                        <span className="element">Hampshire</span> </h2>
                                    {/* <h3>7 Days, 8 Night Tour</h3> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <Menu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => this.handleClose()}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
               {/* <div className="row flex justifyContent" maxW>
                   <div className="col-sm-3 col-lg-12" > */}
                <MenuItem >
                    <ListItemIcon>

                        <img src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/adult-icon.png" alt="adult icon"></img>
                    </ListItemIcon>
                    <div class="passenger">


                        <span class="label">Adult(s)</span>
                        <span
                         onClick={ e => {
                            e.preventDefault();
                            if( adults !== 1){
                                this.setState({adults: adults - 1 })
                            }
                        }}
                        class="minus" style={{
                            fontFamily: 'GothamMedium',
                            fontSize: '18px',
                            color: '#db2027',
                            width: '30px',
                            height: '26px',
                            color: '#db2027',
                            backgroundColor: '#f4f4f4',
                            display: 'inline-block',
                            textAlign: 'center',
                            lineHeight: '26px',
                            cursor: 'pointer'
                        }}>-</span>
                        <input class="passengerInput totalAdult" type="number" name="adult" id="adult" min="0" max="9" value={adults}></input>

                        <span
                          onClick={ e => {
                            e.preventDefault();
                            this.setState({adults: adults + 1})
                        }}
                        class="plus" style={{
                            fontFamily: 'GothamMedium',
                            fontSize: '18px',
                            color: '#db2027',
                            width: '30px',
                            height: '26px',
                            color: '#db2027',
                            backgroundColor: '#f4f4f4',
                            display: 'inline-block',
                            textAlign: 'center',
                            lineHeight: '26px',
                            cursor: 'pointer'
                        }}>+</span>
                    </div>
                </MenuItem>
                {/* </div>
                <div className="col-sm-3 col-lg-12" > */}

                <MenuItem>
                    <ListItemIcon>
                        <img src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/adult-icon.png" alt="adult icon"></img>
                    </ListItemIcon>
                    <div class="passenger">



                        <span class="label">Child(s)</span>
                        <span
                         onClick={ e => {
                            e.preventDefault();
                            if( child !== 0){
                                this.setState({child: child - 1 })
                            }
                        }}
                        class="minus" style={{
                            fontFamily: 'GothamMedium',
                            fontSize: '18px',
                            color: '#db2027',
                            width: '30px',
                            height: '26px',
                            color: '#db2027',
                            backgroundColor: '#f4f4f4',
                            display: 'inline-block',
                            textAlign: 'center',
                            lineHeight: '26px',
                            cursor: 'pointer'

                        }}>-</span>
                        <input class="passengerInput totalChild" type="number" min="0" max="10" value={child}/>

                        <span
                          onClick={ e => {
                            e.preventDefault();
                            this.setState({child: child + 1})
                        }}
                        class="plus" style={{
                            fontFamily: 'GothamMedium',
                            fontSize: '18px',
                            color: '#db2027',
                            width: '10px',
                            height: '26px',
                            fill:'black',
                            backgroundColor: '#f4f4f4',
                            display: 'inline-block',
                            textAlign: 'center',
                            lineHeight: '26px',
                            cursor: 'pointer'

                        }}>+</span>
                    </div>
                </MenuItem>
                {/* </div>
                <div className="col-sm-3 col-lg-12" > */}

                <MenuItem>
                    <ListItemIcon>
                        <img src="https://www.alexatravel.co.uk/wp-content/themes/travel/images/icons/infant-icon.png" alt="adult icon"></img>
                    </ListItemIcon>
                    <div class="passenger">



                        <span class="label">Infant(s)</span>
                        <span 
                        onClick={ e => {
                            e.preventDefault();
                            if( infants !== 0){
                                this.setState({infants: infants - 1 })
                            }
                        }}
                        class="minus" style={{
                            fontFamily: 'GothamMedium',
                            fontSize: '18px',
                            color: '#db2027',
                            width: '30px',
                            height: '26px',
                            color: '#db2027',
                            backgroundColor: '#f4f4f4',
                            display: 'inline-block',
                            textAlign: 'center',
                            lineHeight: '26px',
                            cursor: 'pointer'
                        }}>-</span>
                        <input class="passengerInput totalChild" type="number" name="child" id="child" min="0" max="10" value={infants} onChange={inf => this.setState({infants: inf.target.value}) } />

                        <span
                        onClick={ e => {
                            e.preventDefault();
                            this.setState({infants: infants + 1})
                        }}
                        class="plus" style={{
                            fontFamily: 'GothamMedium',
                            fontSize: '18px',
                            color: '#db2027',
                            width: '30px',
                            height: '26px',
                            color: '#db2027',
                            backgroundColor: '#f4f4f4',
                            display: 'inline-block',
                            textAlign: 'center',
                            lineHeight: '26px',
                            cursor: 'pointer'
                        }}>+</span>
                    </div>
                </MenuItem>
                {/* </div> */}
                {/* </div> */}
            </Menu>
                </div>
                {/* ===============  main banner area 2 end =============== */}

                {list.length !== 0 ? 
                <div className="offer-area pt-120">
                <div className="container">
                        <div className="row">
                        <div className="col-lg-3">
                            <div className="package-sidebar">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="sidebar-searchbox">
                                            <div className="input-group search-box">
                                                Sort & Filter
                                                {/* <input type="text" className="form-control" placeholder="Search Tour..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                <button className="btn btn-outline-secondary" type="button"><i className="bx bx-paper-plane" /></button> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12 col-md-12">
                                        <div className="sidebar-range mt-40">
                                            <h5 className="categorie-head">Price Range</h5>
                                            <div className='slider'>
                                                <Slider
                                                    min={0}
                                                    max={100}
                                                    value={value}
                                                    onChangeStart={this.handleChangeStart}
                                                    onChange={this.handleChange}
                                                    onChangeComplete={this.handleChangeComplete}
                                                />
                                                <div className='value'>{value}</div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-lg-12 col-md-6">
                                        <div className="sidebar-duration mt-40">
                                            <h5 className="categorie-head">Durations</h5>
                                            <div className="durations-option radio-box">
                                                <div className="single-option">
                                                    <input type="radio" name="duration" id="duration1" />
                                                    <label htmlFor="duration1">0 - 24 Hour</label>
                                                </div>
                                                <div className="single-option">
                                                    <input type="radio" name="duration" id="duration2" />
                                                    <label htmlFor="duration2">1 - 2 Days</label>
                                                </div>
                                                <div className="single-option">
                                                    <input type="radio" name="duration" id="duration3" />
                                                    <label htmlFor="duration3">2 - 3 Days</label>
                                                </div>
                                                <div className="single-option">
                                                    <input type="radio" name="duration" id="duration4" />
                                                    <label htmlFor="duration4">3 - 4 Days</label>
                                                </div>
                                                <div className="single-option">
                                                    <input type="radio" name="duration" id="duration5" />
                                                    <label htmlFor="duration5">5 - 6 Days</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12 col-md-6">
                                        <div className="sidebar-categorie mt-40">
                                            <h5 className="categorie-head">Airlines</h5>
                                            <div className="durations-option radio-box">
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)}  value="KL" type="radio" name="categorie" id="categorie1" />
                                                    <label htmlFor="categorie1">KLM</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="BA" type="radio" name="categorie" id="categorie2" />
                                                    <label htmlFor="categorie2">British Airways</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="UA" type="radio" name="categorie" id="categorie3" />
                                                    <label htmlFor="categorie3">United Airlines</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="DA" type="radio" name="categorie" id="categorie4" />
                                                    <label htmlFor="categorie4">Delta Airlines</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="VA" type="radio" name="categorie" id="categorie5" />
                                                    <label htmlFor="categorie5">Virgin Altlantic</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="AA" type="radio" name="categorie" id="categorie6" />
                                                    <label htmlFor="categorie6">American Airlines</label>
                                                </div>
                                                <div className="single-option">
                                                    <input onClick={(e) => this.filteredData(e)} value="AF" type="radio" name="categorie" id="categorie7" />
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
                            
                                {this.state.result.map((item, key) => {
                                    let currentAirline = [{
                                        "AirlineCode": "AA",
                                        "airlineLogo": "https://www.alexatravel.co.uk/wp-content/uploads/2018/09/american-airlines-logo.png"
                                    }];
                                    currentAirline = AirlinesData.filter(d => d.AirlineCode === item.AirlineCode)
                                    return (
                                        <div className="col-lg- col-md-12">
                                            <div className="package-card-xl ">
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
                            }
                        </div>
                    </div>
                     </div>
                    </div>
                    
                </div>
  : null}

            </>
        );
    }
}
function mapStateToProps(state) {
    return {
        currntObj: state.currntObj,
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
export default connect(mapStateToProps, mapDispatchToProps)(MainBanner);

// export default MainBanner;