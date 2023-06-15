import axios from './configAxios'

const CategoryApi = {
   getCategory() {
      const url = '/admin/categories'
      return axios.get(url)
   },
}
export default CategoryApi
