import React, { Component } from "react";
import {Link} from "react-router-dom";
import AirLinesData from '../../../airlines.json'
import { connect } from "react-redux";

class GuideComponent extends Component {
  render() {
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Flights</h2>
                                {/* <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Flights</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            <div className="guide-wrapper pt-100">
                <div className="container">
                    <div className="row">
                   { AirLinesData ?

AirLinesData.map((item, i) => (<div className="col-lg-2 col-md-6 col-sm-6">
<div className="guide-card">
    <div className="guide-thumb p-3" style={{border:'2px solid lightgrey'}}>
    <Link onClick={() => this.props.currentCountry(item.AirlineCode)} to={`${process.env.PUBLIC_URL}/airlines-details`}>
        <img src={item.airlineLogo} alt={item.AirlineCode} className="img-fluid" />
        </Link>
    </div>
</div>
</div>)) : null}
                        {/* <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide3Img} alt="" className="img-fluid" />
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide4Img} alt="" className="img-fluid" />
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide5Img} alt="" className="img-fluid" />
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide6Img} alt="" className="img-fluid" />
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide7Img} alt="" className="img-fluid" />
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide8Img} alt="" className="img-fluid" />
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide9Img} alt="" className="img-fluid" />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide10Img} alt="" className="img-fluid" />
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide11Img} alt="" className="img-fluid" />
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <img src={guide12Img} alt="" className="img-fluid" />
                                   
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
  }
}
const currentCountry = (currentState) => ({
    type: "SET_CURRENT_COUNTRY",
    payload: currentState,
});
const mapDispatchToProps = (dispatch) => {
    return {
        currentCountry: (payload) => {
            // console.log(payload)
            dispatch(currentCountry(payload));
        },
    };
};
export default connect(null, mapDispatchToProps)(GuideComponent);
// export default GuideComponent;
