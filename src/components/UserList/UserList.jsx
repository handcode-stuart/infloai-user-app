import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../utils/api";
import "./UserList.scss";

import Loading from "../Loading/Loading";
import UserListToggle from "./UserListToggle";

class UserList extends Component {
    constructor() {
        super();

        this.state = {
            users: null,
            loading: true,
            found: false,
            mode: "list",
        };

        this.handleListStyleToggle = this.handleListStyleToggle.bind(this);
    }
    componentDidMount() {
        api.getUsers()
            .then(res => {
                this.setState({
                    users: res,
                    loading: false,
                    found: true,
                });
            })
            .catch(err => {
                this.setState({
                    users: null,
                    loading: false,
                    found: false,
                });
            });
    }
    handleListStyleToggle(toggleStyle) {
        this.setState({
            mode: toggleStyle,
        });
    }
    render() {
        const { users, mode } = this.state;
        const listClass =
            this.state.mode === "list"
                ? "user-list"
                : "user-list  user-list--grid";
        return (
            <div>
                {!this.state.loading ? (
                    this.state.found ? (
                        <div>
                            <h1>Users</h1>
                            <UserListToggle
                                onListStyleToggle={this.handleListStyleToggle}
                                mode={mode}
                            />
                            <div className={listClass}>
                                {users.map(user => (
                                    <div
                                        key={user.id}
                                        className='user-list__user'
                                    >
                                        <Link to={`users/${user.id}`}>
                                            <h3>{user.name}</h3>
                                            <div className='icon-info-wrapper'>
                                                <i className='fa fa-envelope' />
                                                <p>{user.email}</p>
                                            </div>
                                            <div className='icon-info-wrapper'>
                                                <i className='fa fa-phone' />
                                                <p>{user.phone}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>We could not fetch users at this time.</p>
                    )
                ) : (
                    <Loading />
                )}
            </div>
        );
    }
}

export default UserList;
