import axios from 'axios'; 

class DiaryDataService{

    createDiary(diary){
        return axios.post(`http://localhost:8080/api/diaries`, diary)
    }

    getDiariesByUsername(){
        return axios.get(`http://localhost:8080/api/diaries`)
    }


}

export default new DiaryDataService;