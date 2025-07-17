import axios from './httpRequester';

export const login = args => {
    return axios.post('/account/login', args).catch(e => e.response);
}

export const getDeptList = () =>  {
    return axios.get('/account/id').catch(e => e.response);
}