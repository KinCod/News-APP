"use client";

import React, { Component } from "react";
import { Button, Navbar } from "flowbite-react";
import {Link } from "react-router-dom";
import logo from './news.svg';

export default class NavBar extends Component {
  render() {
    return (
      <div className='sticky'>
        <Navbar fluid className=" bg-sky-100">
          <Link to="/business" className="hover:text-sky-500 duration-10 transition-colors">
            <Navbar.Brand to="logo.svg">
            <img
              alt="Logo"
              className="mr-3 h-9 sm:h-9"
              src={logo}
            />
            <span className="self-center whitespace-nowrap text-xl font-vina dark:text-white">
              News Monkey
            </span>
          </Navbar.Brand></Link>
          <div className="flex md:order-2">
            <Button>Click here</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Link to="/" className="hover:text-sky-300">Home</Link>

            <Link to="/business" className="hover:text-sky-300">Business</Link>

            <Link to="/entertainment"  className="hover:text-sky-300">Entertainment</Link>

            <Link to="/general" className="hover:text-sky-300">General</Link>

            <Link to="/health"  className="hover:text-sky-300">Health</Link>

            <Link to="/technology"  className="hover:text-sky-300">Technology</Link>

            <Link to="/sports"  className="hover:text-sky-300">Sports</Link>

            <Link to="/science" className="hover:text-sky-300">Science</Link>
          </Navbar.Collapse>
        </Navbar>
        </div>
    );
  }
}
