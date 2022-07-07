import React from "react";
import { Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
const customHistory = require("history").createBrowserHistory();

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history={customHistory} >
                <div>
                    <Navbar />
                    
                </div>
            </Router>
        )
    }
}