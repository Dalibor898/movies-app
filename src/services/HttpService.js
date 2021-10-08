import axios from "axios";

class HttpService
{
  constructor() {
    this.apiCall = axios.create({
      baseURL: "http://127.0.0.1:8000/api"
    })
  }
}

export default HttpService;