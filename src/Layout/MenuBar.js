import React, {Component} from 'react';
import { Link } from "react-router-dom";


export default class MenuBar extends Component {

    render() {
        return(
            <div>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal text-white">Resume</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link to="/" className="p-2 text-white" >Profile</Link>
                        <Link to="/Ability" className="p-2 text-white" >Ability</Link>
                        <Link to="/Education" className="p-2 text-white" >Education</Link>
                        <Link to="/Training" className="p-2 text-white" >Training</Link>
                    </nav>
                    <a class="btn btn-outline-primary" href="#">Sign up</a>
                </div>
            </div>
        )
    }
}