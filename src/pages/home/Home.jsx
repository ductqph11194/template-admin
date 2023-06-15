import React from 'react'
import Widget from '../../components/widget/Widget'
import Layout from '../../layout/Layout'

import './style.scss'
import { useLocation } from 'react-router-dom'
const Home = () => {
   return (
      <Layout>
         <div className="content-home">
            <div className="heading">Dashboard SmileTech</div>

            <div className="widgets">
               <Widget
                  background={'#860b69'}
                  title={'Ecommerce'}
                  price={56000}
                  desc={
                     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
               />
               <Widget
                  background={'#17623f'}
                  title={'SmileTech-intro'}
                  price={32000}
                  desc={
                     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
               />
               <Widget
                  title={'Eplaza'}
                  price={12300}
                  desc={
                     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  }
               />
            </div>
            <div className="chart">
               <div className="left"></div>
               <div className="right"></div>
            </div>
         </div>
      </Layout>
   )
}

export default Home
