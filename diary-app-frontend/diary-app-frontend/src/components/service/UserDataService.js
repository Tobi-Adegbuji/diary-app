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

    updateUserDetails(userUpdateRequest){
        return axios.put(`http://localhost:8080/api/auth/user`, userUpdateRequest)
    }

    deleteUserByUsername(){
        return axios.delete(`http://localhost:8080/api/auth/user`)
    }

}

export default new UserDataService;