import axios from './configAxios'

const ProductApi = {
   getProduct() {
      const url = '/products/all-paging'
      return axios.get(url)
   },
}
export default ProductApi
