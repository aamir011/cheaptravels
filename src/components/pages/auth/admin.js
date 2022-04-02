import React, { Component } from 'react'

export default class admin extends Component {
  componentDidMount(){
    this.scrollTop();
    // if(localStorage.getItem('userToken') === null){
    //   this.props.history.push('/admin')
    // }
}
  render() {
    return (
      <div>admin</div>
    )
  }
}
