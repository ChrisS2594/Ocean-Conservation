import axios from "axios";

export default {
    addUser: function(user) {
        return axios.post('/users/add', user);

    },
    loginUser: function(login) {
        return axios.post('/login/users/login', login);
    },
    userLoggedin: function(logged) {
        return axios.get('/login/users/login' , logged);
    },

    forum: function(forum) {
        return axios.get('/events/', forum);
    }
}


