import HttpService from "./HttpService";

class MoviesService extends HttpService
{
  getAll = async () => {
    const { data } = await this.apiCall.get('/movies');
    
    return data;
  }
}

export default new MoviesService();