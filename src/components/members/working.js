import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMembers } from "../../actions";
import "./working.css";

class Members extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(getMembers());
  }
  showMembers = member => {
    var memberYearwise = {};
    var years = [];
    if (member.list && member.list.length > 0) {
      member.list.map(item => {
        if (memberYearwise[item.year]) {
          memberYearwise[item.year].push(item);
        } else {
          memberYearwise[item.year] = [item];
          years.push(item.year);
        }
      });
    } else {
      return <div>No Members yet!</div>;
    }
    years.sort().reverse();

    return years.map(yr => (
      <div id="yearmap">
        <h2 id="yearhead">
          <p id="yearp">{yr}</p>
        </h2>
        <hr></hr>
        {memberYearwise[yr].map(item => (
          <div id="mrows">
            <div key={item._id} className="wcard">
              {this.props.user.login.isAuth === true ? (
                <Link id="edithead" to={`/editMember/${item._id}`}>
                  EDIT
                </Link>
              ) : null}
              <img src={item.image} className="wimages" alt={item.name} />
              <div className="wcbody">
                <p id="wname">{item.name}</p>
                <p id="wpos">{item.position}</p>
                {/* <p id="wyear">{item.year}</p> */}
                <br></br>
                <div className="wcontact" id="wcontact">
                  CONTACT
                </div>
                <p id="wmobile">{item.mobile}</p>
                <p id="wemail">{item.email}</p>
                <a id="wlinkedin" href={item.linkedin}>
                  {" "}
                  LinkedIN
                  <img
                    id="linkedinlogo"
                    src="https://i.imgur.com/avK3Wp7.png"
                    alt="linkedin"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
        <br></br>
        <br></br>
      </div>
    ));
  };

  render() {
    return (
      <div style={{ padding: "30px", paddingTop: 0 }}>
        {this.props.user.login.isAuth != null ? (
          <Link id="addmembut" className="wcontainer" to="/addMember">
            Add Member
          </Link>
        ) : null}
        <div className="wheader">WORKING MEMBERS</div>
        <br></br>

        <div>{this.showMembers(this.props.members)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members
  };
}

export default connect(mapStateToProps)(Members);
