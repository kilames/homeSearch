import axios from 'axios'

const request = axios.create({
  baseURL: 'http://itcgq.com:8080'
})

export default request
