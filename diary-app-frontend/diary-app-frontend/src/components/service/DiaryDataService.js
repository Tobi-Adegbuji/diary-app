import axios from 'axios'; 

class DiaryDataService{

    createDiary(diary){
        return axios.post(`http://localhost:8080/api/diaries`, diary)
    }

}

export default new DiaryDataService;