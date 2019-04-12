import React from "react";
import UserProfile from "../../components/UserProfile/UserProfile";

const Profile = props => {
    const userId = parseInt(props.match.params.id);
    return (
        <div>
            <UserProfile userId={userId} />
        </div>
    );
};

export default Profile;
