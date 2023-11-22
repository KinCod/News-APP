import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {

  apikey = 'ceb1426f62ad49ff9ec7a8183de02640';

  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          
          <Routes>
              <Route key={"home"} exact path="/" element={<News api={this.apikey} pagesize={10} country={"in"} category={"general"} />}/>
            </Routes>
          <Routes>
              <Route  key={"general"} exact path="/general" element={<News api={this.apikey} pagesize={10} country={"in"} category={"general"} />}/>
            </Routes>

            <Routes>
              <Route  key={"business"} exact path="/business" element={<News api={this.apikey} pagesize={10} country={"in"} category={"business"} />}/>
            </Routes>

            <Routes>
              <Route key={"entertainment"}  exact path="/entertainment" element={<News api={this.apikey} pagesize={10} country={"in"} category={"entertainment"} />}/>
            </Routes>

            <Routes>
              <Route key={"health"}  exact path="/health" element={<News api={this.apikey} pagesize={10} country={"in"} category={"health"} />}/>
            </Routes>

            <Routes>
              <Route  key={"technology"} exact path="/technology" element={<News api={this.apikey} pagesize={10} country={"in"} category={"technology"} />}/>
            </Routes>

            <Routes>
              <Route  key={"sports"} exact path="/sports" element={<News api={this.apikey} pagesize={10} country={"in"} category={"sports"} />}/>
            </Routes>

            <Routes>
              <Route key={"science"}  exact path="/science" element={<News api={this.apikey} pagesize={10} country={"in"} category={"science"} />}/>
            </Routes>
        </Router>
        
      </div>
    );
  }
}
