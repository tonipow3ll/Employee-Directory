import axios from 'axios';

export default {
    getUsers: function () {
        return axios.get ("https://randomuser.me/api/?results=100&nat=us")
        // return console.log(axios.get("https://randomuser.me/api/?results=200&nat=us"))
    }
}

