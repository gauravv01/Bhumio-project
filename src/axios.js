import axios from "axios";

const instance=axios.create({
    baseURL: 'https://bhumio-project-default-rtdb.firebaseio.com/'
});

export default instance;