import React, { Component, useState } from "react";
import "./NavbarStyles.css";


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processDropdownVisible: false,
      blendingDropdownVisible: false,
      limbahDropdownVisible: false,
    };
  }

  
  toggleDropdown = (dropdown) => {
      this.setState((prevState) => ({
          [dropdown]: !prevState[dropdown],
        }));
    };
    
    render() {    
        return (
      <nav className="NavbarItems">
        <div className="logo-container"></div>
            <img src="https://growink.id/application/files/6215/7855/9789/LOGO-kALBE-NUTRITIONALS.png" className="navbar-logo" alt="logo-kalbe"></img>
            <h1 className="navbar-logo">SmartLab</h1>
        <ul className="nav-menu">
          {/* Process Navbar */}
          <li>
            <a href="#!" onClick={() => this.toggleDropdown("processDropdownVisible")}>
              <i className="fa-solid fa-gears"></i> Process
            </a>
            {this.state.processDropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="https://docs.google.com/spreadsheets/d/1rPu88WWMYukHayaKGnr1cGNr-HMAgx4I/edit?usp=sharing&ouid=100806111176984488057&rtpof=true&sd=true
">Wet Process</a></li>
                <li><a href="https://docs.google.com/spreadsheets/d/1-rh_hLn65GEUbdWeO4o5RcJt38K5fTaHZQaxVj7FCCY/edit?usp=sharing
">Dry Process</a></li>
                <li><a href="https://docs.google.com/spreadsheets/d/1_qcSdps0OBzw66niamom8eFgZTekgGA0hyqcnITjwPg/edit?usp=sharing
">CIP</a></li>
              </ul>
            )}
          </li>

          {/* Blending dan Finish Good Navbar */}
          <li>
            <a href="#!" onClick={() => this.toggleDropdown("blendingDropdownVisible")}>
              <i className="fa-solid fa-blender"></i> Finish Good
            </a>
            {this.state.blendingDropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="https://docs.google.com/spreadsheets/d/1n36JqQ6JqL92Q9vhtJgiey90k6Fd6otIW1VGHj2Mu8Y/edit?usp=sharing
">Line A, Canning, dan F</a></li>
                <li><a href="https://docs.google.com/spreadsheets/d/1zq3X5T-wMVe60rs977TVF5Mv3eQeFc5_Uy2DwrsM8wA/edit?usp=sharing
">Line D</a></li>
                <li><a href="https://docs.google.com/spreadsheets/d/1MYCD7eY0ziPzaeHeXuvWlUW7BowAlgchvsv2p8m6R40/edit?usp=sharing
">Line E</a></li>
              </ul>
            )}
          </li>

          {/* Limbah Navbar */}
          <li>
            <a href="#!" onClick={() => this.toggleDropdown("limbahDropdownVisible")}>
              <i className="fa-solid fa-recycle"></i> Limbah
            </a>
            {this.state.limbahDropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="#nct-nbt">NCT & NBT</a></li>
                <li><a href="#analisa-limbah">Analisa Limbah</a></li>
                <li><a href="#klorin">Klorin</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
