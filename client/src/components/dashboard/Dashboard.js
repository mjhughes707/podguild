import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import { getCurrentProfile } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 class="large text-primary">Dashboard</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Welcome, {user && user.name}!
      </p>
      {profile !== null ? (
        <Fragment>
          {" "}
          <DashboardActions />
          <h2 class="my-2">Experience Credentials</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Company</th>
                <th class="hide-sm">Title</th>
                <th class="hide-sm">Years</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Microsoft</td>
                <td class="hide-sm">Senior Developer</td>
                <td class="hide-sm">Oct 2011 - Current</td>
                <td>
                  <button class="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Sun Microsystems</td>
                <td class="hide-sm">Senior Developer</td>
                <td class="hide-sm">Oct 2004 - Nov 2010</td>
                <td>
                  <button class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 class="my-2">Education Credentials</h2>
          <table class="table">
            <thead>
              <tr>
                <th>School</th>
                <th class="hide-sm">Degree</th>
                <th class="hide-sm">Years</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>University of Washington</td>
                <td class="hide-sm">Masters</td>
                <td class="hide-sm">Sep 1993 - June 1999</td>
                <td>
                  <button class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="my-2">
            <button class="btn btn-danger">
              <i class="fas fa-user-minus"></i> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            You have not yet set up a profile. To do so, please click the button
            below.
          </p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
