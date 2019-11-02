import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div className="contactmainpage">
        <div className="cheader">CONTACT</div>
        <div id="pcontact">
          If you want to contact us directly,
          <Link id="pcontact1" to="/working-team">
            {" "}
            Click Here
          </Link>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdXg1OBbnFKZeFw_g08Cyk7RWOxzHNl9R8XdR9MQlwr7U3IkQ/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          id="gform"
          title="Contact Us"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}

export default Contact;
