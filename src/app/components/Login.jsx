import React from 'react';
import { connect } from 'react-redux';
import * as mutuations from '../store/mutations';

const LoginCompenent = ({authenticateUser, authenticated}) => (
    <div className="card p-3 col-6">
        <h2>
            Please Login
        </h2>
        <form onSubmit={authenticateUser}>
            <input type="text" placeholder="username" name="username" defaultValue="Dev" className="form-control"/>
            <input type="password" placeholder="password" name="password" defaultValue="" className="form-control mt-2" />

            {authenticated === mutuations.NOT_AUTHENTICATED ? <p> Login incorrect </p> : null }
            <button type="submit" className="form-control mt-2 btn btn-primary">Login</button>
        </form>
    </div>
);

const mapStateToProps = ({session}) => ({
    authenticated:session.authenticated
});

const mapDispatchToProps = (dispatch) => ({
    authenticateUser(e) {
        e.preventDefault(); // so page does not refresh in certain browswers
        let username = e.target[`username`].value;
        let password = e.target[`password`].value;

        console.log("Send login data..")
        dispatch(mutuations.requestAuthenticateUser(username, password));
    }
});

export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps) (LoginCompenent);

