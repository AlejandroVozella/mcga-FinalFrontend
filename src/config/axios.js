import axios from 'axios';

const axiosClient=axios.create({
    baseURL:'https://final-mcga-alejandrovozella.herokuapp.com/'
})

export default axiosClient;