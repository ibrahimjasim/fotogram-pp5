import axios from "axios";


axios.defaults.baseURL = 'https://drf-api1-df01c14b5fdd.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] ='multipart/form-data';
axios.defaults.withCredentials =true;