import React, { Component } from "react";
import "./home.css";
import { connect } from "react-redux";
import { getGallerys } from "../../actions";

class Home extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(getGallerys());
  }

  showCar = gallery => {
    return gallery.list && gallery.list.length > 0 ? (
      [gallery.list[0], ...gallery.list.reverse().slice(0,5)].map(item => (
        <figure key={item._id}>
          <img src={item.image} alt={item.name} />
          <figcaption>{item.name}</figcaption>
        </figure>
      ))
    ) : (
      <figure>
        <img src="https://i.imgur.com/879KlVL.png" alt="IEEE logo" />
        <figcaption>Welcome to IEEE, TU</figcaption>
      </figure>
    );
  };

  render() {
    return (
      <div className="container" id="mainhome">
        <div id="slider">
          <div id="captioned-gallery">
            <figure className="slider">
              {this.showCar(this.props.gallerys)}
            </figure>
          </div>
        </div>
        <div className="about">
          <div className="aboutieee">
            <div className="header">ABOUT IEEE</div>
            <div className="text">
              IEEE is the world's largest professional association dedicated to
              advancing technological innovation and excellence for the benefit
              of humanity. IEEE and its members inspire a global community
              through IEEE's highly cited publications, conferences, technology
              standards, and professional and educational activities.
              <br />{" "}
              <a
                href="https://www.ieee.org/about/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to know more
              </a>
            </div>
          </div>
          <div className="abouttuieee">
            <div className="header">
              ABOUT IEEE STUDENTS' BRANCH CHAPTER | TEZPUR UNIVERSITY
            </div>
            <div className="text">
              Tezpur University IEEE Branch was established on 27th
              March,2014.It has conducted weekend classes for the students and
              has also conducted different activities such as Hosting a Talk
              Show with Prof. Debatosh Guha, Dr. Paul El Khoury, Dr. N.R. Das
              and many more.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gallerys: state.gallerys
  };
}

export default connect(mapStateToProps)(Home);
