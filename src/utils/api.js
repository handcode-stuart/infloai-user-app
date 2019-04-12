import axios from "axios";

const api = {
    getUsers: () => {
        return axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(res => res.data);
    },
    getUser: userId => {
        return axios
            .get("https://jsonplaceholder.typicode.com/users/" + userId)
            .then(res => res.data);
    },
};

export default api;
