import axios from "axios";

const BASEURL = "https://api.github.com/users/";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    }
}