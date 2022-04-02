// import React from 'react'
// import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
// import {auth} from './../../../firebaseConfig'
// import {useHistory} from 'react-router-dom'
// import admin from './admin'
// export default function login(){

//    const login = e => {
//         e.preventDefault()
//         console.log('clicked')
//         signInWithEmailAndPassword(auth, 'admin@admin.com', '12345678')
//         .then(() => {
//           if(!auth.currentUser.emailVerified) {
//             sendEmailVerification(auth.currentUser)
//             .then(() => {
//                 console.log('logged in')
//             //   setTimeActive(true)
//             //   history.push('/verify-email')
//             })
//           .catch(err => alert(err.message))
//         }else{
//             console.log('no user')
//         //   history.push('/')
//         }
//         })
//         .catch(err => console.log(err.message))
//       }
//   return (
//     <button onClick={e => login(e)}>login</button>
//   )
// }
import React, { Component } from "react";
import {Link} from "react-router-dom";
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import CircularProgress from '@mui/material/CircularProgress';
import {auth} from './../../../firebaseConfig'
import { withRouter } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

// import admin from './admin'

// import {Link} from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
        isClicked: false,
        email:'',
        password: '',
        errorMessage: null
    };
}
    componentDidMount(){
  //       this.scrollTop();
  //       if(localStorage.getItem('userToken') !== null){
  //         this.props.history.push('/admin')
  // }
    }

    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    login = e => {
      e.preventDefault()
      console.log('clicked')
      // console.log(this.state.email, this.state.password)
      signInWithEmailAndPassword(auth, this.state.email, this.state.password)
      .then(() => {
        if(!auth.currentUser.emailVerified) {
          sendEmailVerification(auth.currentUser)
          .then( res => {
            // let userId = uuidv4();
            //   localStorage.setItem('userToken', userId);
            this.props.history.push('/admin')
          })
        .catch(err => alert(err.message))
      }else{
          console.log('no user')
      //   history.push('/')
      }
      })
      .catch(err => {
        console.log(err)
        this.setState({errorMessage: err})})
    }
  render() {
    return (
        <>
          
            {/* ===============  breadcrumb area end =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Login</h2>
                                {/* <ul className="breadcrumb-links">
                                    <li>
                                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Contact Us</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-wrapper pt-90" style={{padding:"0px"}} >
               
                <div className="container">
                    <div className="contact-inputs pt-80">
                        <div className="coulmn" style={{textAlign: '-webkit-center'}}>
                          
                            <div className="col-lg-6">
                                <div className="contact-form">
                                    <form action="#" onSubmit={e => this.login(e)} >
                                        <h5 className="contact-d-head">Login</h5>
                                        <div className="row" style={{display:'block'}}>
                                        
                                            <div className="col-lg-6">
                                                <input className="inputContainer" type="email" placeholder="Email Addess" value={this.state.email} onChange={e => this.setState({email: e.target.value})} required />
                                            </div>
                                           
                                            <div className="col-lg-6">
                                                <input className="inputContainer" type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} required/>
                                            </div>
                                            {this.state.errorMessage !== null ? <div className="col-lg-6 pb-5">
                                         <p className="" style={{color:'red'}}>Email/Password is incorrect.</p>

                                            </div> : null}
                                            <div className="col-lg-6">
                                                    
                                                    {!this.state.isClicked ? <input type="submit" className="inputContainer" value='Login' defaultValue="Book Now" /> :
                                                     <Link to='' className="btn-second">
                                                    <CircularProgress style={{color:"#fff"}}/></Link>}
                                                </div>
                                           
                                            {/* <div className="d-grid gap-2 col-6 mx-auto">
                                            <button style={{backgroundColor:"#FF7F47", fontWeight:"bold", border: 'none'}} class="btn btn-primary" type="button" onClick={e => this.login(e)}>Login</button>
                                            </div> */}
                                        </div>
                                    </form>
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

export default Login;
