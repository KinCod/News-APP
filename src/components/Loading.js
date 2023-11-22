import React, { Component } from 'react'    //here react is exported by default from other file
                                            //but component is named export(can be accessed only using its name)
import loading from './loading.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className=" flex justify-center">
        <img src={loading} alt="loading" className="src w-24" />
      </div>
    )
  }
}
