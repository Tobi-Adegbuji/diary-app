import axios from 'axios'; 

class UserDataService{

    registerUser(signUpRequest){
        return axios.post(`http://localhost:8080/api/auth/register`, signUpRequest)
    }

    authenticateUser(loginRequest){
        return axios.post(`http://localhost:8080/api/auth`, loginRequest)
    }

    findUserById(id){
        return axios.get(`http://localhost:8080/users/${id}`)
    }

    deleteUserById(id){
        return axios.delete(`http://localhost:8080/users/${id}`)
    }

}

export default new UserDataService;