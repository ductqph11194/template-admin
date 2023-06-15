import axios from './configAxios'

const HomeApi = {
   getBanner() {
      const url = 'home/banners'
      return axios.get(url)
   },
}
export default HomeApi
