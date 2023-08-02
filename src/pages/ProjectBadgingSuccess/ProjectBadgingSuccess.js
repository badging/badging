import React from 'react'
import { Header } from '../../components'
import { Link } from 'react-router-dom'
import "./ProjectBadgingSuccess.scss"

const ProjectBadgingSuccess = () => {
  return (
    <div>
        <Header />
        <section className='container'>
            <p className='title-header'>Congratulations!</p>
            <div>
             <p> Hello Enoch! You will receive a DEI.md</p>
             <p>scan report in 1-4days</p>
            </div>
            <a href="/">Badge more repos</a>
        </section>
    </div>
  )
}

export default ProjectBadgingSuccess