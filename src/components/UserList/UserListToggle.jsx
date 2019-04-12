import React from "react";
import PropTypes from "prop-types";

const UserListToggle = props => {
    return (
        <div className='user-list__toggle'>
            <button
                className={props.mode === "list" ? "active" : null}
                onClick={() => props.onListStyleToggle("list")}
            >
                List
            </button>
            <button
                className={props.mode === "grid" ? "active" : null}
                onClick={() => props.onListStyleToggle("grid")}
            >
                Grid
            </button>
        </div>
    );
};

UserListToggle.propTypes = {
    onListStyleToggle: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
};

export default UserListToggle;
