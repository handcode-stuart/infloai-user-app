import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import api from "../../utils/api";

import "./UserProfile.scss";

import Loading from "../Loading/Loading";

class UserProfile extends Component {
    constructor() {
        super();

        this.state = {
            user: null,
            loading: true,
            found: false,
        };
    }
    componentDidMount() {
        api.getUser(this.props.userId)
            .then(res => {
                this.setState({
                    user: res,
                    loading: false,
                    found: true,
                });
            })
            .catch(err => {
                this.setState({
                    loading: false,
                    found: false,
                });
            });
    }
    render() {
        return (
            <div className='user-profile'>
                {!this.state.loading ? (
                    this.state.found ? (
                        <div>
                            <div className='user-profile__header'>
                                <h1>{this.state.user.name}</h1>
                                <p>Username: {this.state.user.username}</p>
                                <p>ID: {this.state.user.id}</p>
                            </div>
                            <div className='user-profile__details'>
                                <div className='user-profile__row'>
                                    <h3>Personal details</h3>
                                    <div className='icon-info-wrapper'>
                                        <i className='fa fa-envelope' />
                                        <p>{this.state.user.email}</p>
                                    </div>
                                    <div className='icon-info-wrapper'>
                                        <i className='fa fa-phone' />
                                        <p>{this.state.user.phone}</p>
                                    </div>
                                    <div className='icon-info-wrapper'>
                                        <i className='fa fa-laptop' />
                                        <a
                                            href={
                                                "http://" +
                                                this.state.user.website
                                            }
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {this.state.user.website}
                                        </a>
                                    </div>
                                    <div className='icon-info-wrapper icon-info-wrapper--align-top'>
                                        <i className='fa fa-address-card' />
                                        <ul>
                                            <li>
                                                {this.state.user.address.street}
                                            </li>
                                            <li>
                                                {this.state.user.address.suite}
                                            </li>
                                            <li>
                                                {this.state.user.address.city}
                                            </li>
                                            <li>
                                                {
                                                    this.state.user.address
                                                        .zipcode
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='user-profile__row'>
                                    <h3>Work details</h3>
                                    <div className='icon-info-wrapper'>
                                        <i className='fa fa-building' />
                                        <p>{this.state.user.company.name}</p>
                                    </div>
                                    <div className='icon-info-wrapper'>
                                        <i className='fa fa-comment' />
                                        <p>
                                            {
                                                this.state.user.company
                                                    .catchPhrase
                                            }
                                        </p>
                                    </div>
                                    <div className='icon-info-wrapper'>
                                        <i className='fa fa-tags' />
                                        <p>{this.state.user.company.bs}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1>User not found</h1>
                            <p>
                                <Link to='/users'>See all available users</Link>
                            </p>
                        </div>
                    )
                ) : (
                    <Loading />
                )}
            </div>
        );
    }
}

UserProfile.propTypes = {
    userId: PropTypes.number.isRequired,
};

export default UserProfile;
