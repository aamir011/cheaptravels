import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Link} from "react-router-dom";
import DefaultData from './../../../Data.json'
//Import Images
import destinations1Img from "../../../assets/images/destination/d-1.png"
import destinations4Img from "../../../assets/images/destination/d-4.png"
import destinations5Img from "../../../assets/images/destination/d-5.png"
import destinations6Img from "../../../assets/images/destination/d-6.png"
import destinations7Img from "../../../assets/images/destination/d-7.png"
import destinations8Img from "../../../assets/images/destination/d-8.png"
import destinations9Img from "../../../assets/images/destination/d-9.png"
import destinations10Img from "../../../assets/images/destination/d-10.png"
import destinations11Img from "../../../assets/images/destination/d-11.png"
import destinations2Img from "../../../assets/images/destination/d-2.png"
import destinations3Img from "../../../assets/images/destination/d-3.png"
import { connect } from "react-redux";
import db from "./../../../firebaseConfig";
import { collection, query, onSnapshot} from 'firebase/firestore';


class AboutUs extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        // this.intiScripts();
        const q = query(collection(db, 'FaresData'))
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.docs.forEach(doc => {
                // console.log(doc.data().Data);
                // this.setState({data: doc.data().Data});
                this.setState({data: JSON.parse(doc.data().Data)});

            })
        })


    }
  render() {
    const AllCountries = [...this.state.data.reduce((set,{Country}) => {
        set.add(Country);
        return set;
      }, new Set)];
      const destinationsOptions = {
          stagePadding: 1,
          items: 3,
          loop: true,
          margin:20,
          smartSpeed: 1500,
          autoplay: false,
          dots: false,
          nav: true,
          navText : ["<i class='bx bx-chevron-left' ></i>","<i class='bx bx-chevron-right'></i>"],
          responsive:{
              0:{
                  items:1,
                  nav:false,
                  dots : false
              },
              600:{
                  items:2,
                  nav:false,
                  dost : false,
              },
              1000:{
                  items:3,
                  nav:true,
                  loop:true
              }
          }
      };
    return (
       <>
            <BreadCrumb/>

           {/* =============== Destinations area start =============== */}
           <div className="destinations-area pt-120">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="section-head pb-40">
                               <h5>Choose Your Package</h5>
                               <h2>Select Your best Package For Your Travel</h2>
                           </div>
                       </div>
                   </div>
                  {/* {AllCountries.map(con => ( */}
                    <div className="row">
                       <div className="col-lg-3 col-md-3">
                           <div className="package-slider-wrap">
                               <img src={`/assets/images/${this.props.currentCountry}.png`} alt="" className="img-fluid" />
                               <div className="pakage-overlay">
                                   <strong>{this.props.currentCountry}</strong>
                               </div>
                           </div>
                       </div>
                       <div className="col-lg-9 col-md-9">
                          {this.state.data.length !== 0 ? <OwlCarousel className="row owl-carousel destinations-1"  {...destinationsOptions}>
                              {this.state.data.map( item => {
                                  if( item.country === this.props.currentCountry){
                                    //   console.log(item)
                                  return (
                                    <div className="package-card">
                                    <div className="package-thumb">
                                        <Link onClick={() => this.props.currentFlight(item)} to={`${process.env.PUBLIC_URL}/package-details`}>
                                            <img src={`/assets/images/${item.country}.png`} alt="" className="img-fluid" />
                                        </Link>
                                    </div>
                                    <div className="package-details">
                                        <div className="package-info">
                                            <h5><span>${item.Fares}</span>/Per Person</h5>
                                        </div>
                                        <h3><i className="flaticon-arrival" />
                                            <Link onClick={() => this.props.currentFlight(item)} to={`${process.env.PUBLIC_URL}/package-details`}>{item.arivalCity}</Link>
                                        </h3>
                                        <div className="package-rating">
                                            <i className="bx bxs-star" />
                                            <strong><span>1.3K+</span> Rating</strong>
                                        </div>
                                    </div>
                                </div>
                                  )
                                  }
                              } )}
                           </OwlCarousel>: null}
                       </div>
                   </div>
                  {/* ))  */}
                  {/* } */}
                  
                   {/* <div className="row">
                       <div className="col-lg-12">
                           <div className="pagination mt-30">
                               <Link to={"#"}><i className="bx bx-chevron-left" /></Link>
                               <Link to={"#"} className="active">1</Link>
                               <Link to={"#"} >2</Link>
                               <Link to={"#"} >3</Link>
                               <Link to={"#"} >4</Link>
                               <Link to={"#"}><i className="bx bx-chevron-right" /></Link>
                           </div>
                       </div>
                   </div> */}
               </div>
           </div> 
           {/* =============== Destinations area end =============== */}
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
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
// export default AboutUs;
