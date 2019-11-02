import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import ieeelogoleft from "../../../src/resources/ieeelogoleft.jpg";
import ieeemainbanner from "../../../src/resources/ieeemainbanner.png";
import tulogoright from "../../../src/resources/tulogoright.png";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";

const Component = ({ user }) => {
  return <Header user={user} />;
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    let user = this.props.user;
    return (
      <div>
        {user.login === undefined ||
        user.login.error === true ||
        user.login.isAuth === null ? (
          <div className="admin1">
            <Link className="container" to="/login">
              Admin Login
            </Link>
          </div>
        ) : (
          <div className="admin2">
            <Link className="container" to="/logout">
              Admin LogOut
            </Link>
            <Link className="container" to="/add-admin">
              Add Admin
            </Link>
          </div>
        )}

        <div className="jumbotron1">
          <img
            src={ieeelogoleft}
            alt="ieee logo"
            className="ieeelogo"
            height="70px"
            width="250px"
          />
          <img
            src={ieeemainbanner}
            alt="banner"
            className="banner"
            height="40px"
            width="600px"
          />
          <a
            className="logoright"
            href="http://www.tezu.ernet.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tulogoright}
              alt="tu logo"
              height="80px"
              width="80px"
            />
          </a>
          <div className="header-right">
            <a
              className="ieeesite"
              href="https://www.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IEEE.ORG
            </a>
          </div>
        </div>
        <div className="tabs">
          <Nav tabs id="navtabs">
            <NavItem className="navItemNavbar">
              <NavLink id="home">
                <Link className="container" id="home1" to="/">
                  {" "}
                  HOME{" "}
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="navItemNavbar">
              <NavLink id="events">
                <Link className="container" id="events1" to="/events">
                  EVENTS
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="navItemNavbar">
              <NavLink id="gallery">
                <Link className="container" id="gallery1" to="/gallery">
                  GALLERY
                </Link>
              </NavLink>
            </NavItem>
            <Dropdown
              className="navItemNavbar"
              nav
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle nav caret className="drop" id="drop">
                IEEE TEAM
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem id="drop1">
                  <Link className="drop1" to="/working-team">
                    WORKING TEAM
                  </Link>
                </DropdownItem>
                <DropdownItem id="drop2">
                  <Link className="drop2" to="/founding-team">
                    FOUNDING TEAM
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem className="navItemNavbar">
              <NavLink id="contact">
                <Link className="container" id="contact1" to="/contact">
                  CONTACT
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Component);
