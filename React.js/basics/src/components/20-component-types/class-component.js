import React, { Component } from 'react'

export default class ClassComponent extends Component {
  componentDidMount(){
    console.log("ilk mount da calisir")
  }
  componentWillUnmount(){
    console.log("component unmountta calisir")
  }
  render() {
    console.log("ilk buea calisir")
    return (
      <div>classComponent</div>
    )
  }
}
