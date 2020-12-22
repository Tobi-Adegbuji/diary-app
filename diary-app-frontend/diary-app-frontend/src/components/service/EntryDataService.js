import axios from "axios";

class EntryDataService {
  createEntry(entry) {
    return axios.post(`http://localhost:8080/api/entries`, entry);
  }
  retrieveEntries(diaryId) {
    return axios.post(`http://localhost:8080/api/entries/retrieve`, diaryId);
  }
}

export default new EntryDataService();
