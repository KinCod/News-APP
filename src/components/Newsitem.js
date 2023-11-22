("use client");
import React, { Component } from "react";
import { Card, Button } from "flowbite-react";

export class Newsitem extends Component {
  render() {

    let {heading,description,imgurl,newsurl,date} = this.props;   //this is known as destructuring
    
    return (
      <Card horizontal imgSrc={imgurl}>
        
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{heading}</p>
        </h5>
        <h2 className="font-semibold">Published on: {new Date(date).toGMTString()}</h2>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          <p>
            {description}
          </p>
        </div>
        <Button className="w-fit m-auto" gradientMonochrome="cyan">
        <a href={newsurl} target="#" >Click here for news</a>
        </Button>
      </Card>
    );
  }
}

export default Newsitem;
