import React from 'react'
import '../../assets/styles/global.scss'
import './project.scss'
import { Footer, Header } from '../../components'
import Jumbotron from '../../components/Jumbotron/jumbotron'

const Projects = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
        <section >
            <div className="badging">
              <div className="search">
                <button className='filter'>M Filter</button>
                <input type="input" className='filter-input' />
                <button className='search-button'>Search</button>
              </div>
              <div className="badging-table">
                <table>
                  <thead>
                    <tr>
                      <th>Hello</th>
                      <th>Hello</th>
                      <th>Hello</th>
                      <th>Hello</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>jsdkdkj</td>
                      <td>jsdkdkj</td>
                      <td>jsdkdkj</td>
                      <td>jsdkdkj</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="badging-table">
               Paginate
              </div>
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default Projects