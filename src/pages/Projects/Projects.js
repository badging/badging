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
              <div className="filter">
                Filter
              </div>
              <div className="badging-table">
                Badging Table
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