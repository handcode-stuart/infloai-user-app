import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/users'>See all available users</Link>
        </div>
    );
};

export default Home;
