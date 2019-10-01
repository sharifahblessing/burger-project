import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-react-project-ce231.firebaseio.com/'
    
})

export default instance;