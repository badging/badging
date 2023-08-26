import React from 'react'
import { Header } from '../../components'
import { useLocation } from 'react-router-dom'
import "./ProjectBadgingSuccess.scss"

const ProjectBadgingSuccess = () => {
  const location = useLocation();
  const { state }  = location
  return (
    <div>
        <Header />
        <section className='container'>
            <p className='title-header'>Congratulations!</p>
            <div>
             <p> Hello {state?.name}! You will receive a DEI.md</p>
             <p>scan report in 1-4days</p>
            </div>
            <a href="/">Badge more repos</a>
        </section>
    </div>
  )
}

export default ProjectBadgingSuccess