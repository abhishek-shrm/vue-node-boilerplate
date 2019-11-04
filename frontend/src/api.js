import axios from 'axios'

export default()=>{
  return axios.create({
    baseURL:'http://localhost:3000/'//Enter your API Here
  });
}