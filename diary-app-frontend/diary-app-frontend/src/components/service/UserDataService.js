import axios from 'axios'; 

class UserDataService{

    registerUser(signUpRequest){
        return axios.post(`http://localhost:8080/api/auth/register`, signUpRequest)
    }

    authenticateUser(loginRequest){
        return axios.post(`http://localhost:8080/api/auth/sign_in`, loginRequest)
    }

    retrieveUser(config){
        return axios.get(`http://localhost:8080/api/auth/user`, config)
    }

    deleteUserById(id){
        return axios.delete(`http://localhost:8080/users/${id}`)
    }

}

export default new UserDataService;