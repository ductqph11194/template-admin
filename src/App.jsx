import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import List from './pages/product/List'
import Login from './pages/login/Login'
import AddNew from './pages/product/add/AddNew'
function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Routes>
               <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="login" element={<Login />} />
                  <Route path="category" element={<List />} />
                  <Route path="product">
                     <Route index element={<List />}></Route>
                     <Route path="add-new-product" element={<AddNew />} />
                     <Route path="edit-new-product/:id" element={<AddNew />} />
                  </Route>
                  <Route path="service" element={<List />} />
                  <Route path="application" element={<List />} />
                  <Route path="new" element={<List />} />
                  <Route path="sale" element={<List />} />
                  <Route path="report" element={<List />} />
                  <Route path="recruitment" element={<List />} />
                  <Route path="partner" element={<List />} />
                  <Route path="office" element={<List />} />
                  <Route path="promotion_video" element={<List />} />
                  <Route path="newsletter" element={<List />} />
                  <Route path="activity" element={<List />} />
                  <Route path="content" element={<List />} />
                  <Route path="support_request" element={<List />} />
                  <Route path="user_accept_receive_news" element={<List />} />
                  <Route path="support" element={<List />} />
                  <Route path="file" element={<List />} />

                  <Route path="logout" element={<Login />} />
                  {/* <Route path="products">
                     <Route index element={<List />}></Route>
                     <Route path=":productId" element={<Product />} />
                     <Route path="new" element={<New />} />
                  </Route> */}
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   )
}

export default App
