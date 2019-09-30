import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {

    constructor() {
        super()

        this.state = {
            slide: false
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="container">
                        <h1 className="nav-title">Start Bootstrap</h1>
                        <ul className="desktop desktop-menu">
                                <li>SERVICES</li>
                                <li>PORTFOLIO</li>
                                <li>ABOUT</li>
                                <li>TEAM</li>
                                <li>CONTACT</li>
                        </ul>
                        <button className="mobile menu-button" onClick={ () => this.setState({ slide: !this.state.slide }) }>MENU &#9776;</button>
                    </div>
                    <div className={this.state.slide ? "slide-container slide mobile" : "slide-container mobile"}>
                        <ul className="slide-menu">
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>ABOUT</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
