import axios from "axios";

export default {
    addUser: function(user) {
        return axios.post('/users/add', user);

    },
    loginUser: function(login) {
        return axios.post('/users', login);
    }
}

