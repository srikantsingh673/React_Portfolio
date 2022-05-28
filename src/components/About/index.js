import { useEffect, useState } from 'react'
import {
  faAws,
  faNodeJs,
  faGitAlt,
  faJava,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious well-organized, creative and Happy minded student who is persuing MCA in AIML.
            I have problem-solving and leadership skills with a flair to explore suitable avenues in Computer Science Engineering and Data Analysis
            as well as developing advanced projects with efficiency and quality.
          </p>
          <br />
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['s', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <div className='second_header'>
            <h2 >
              <ul>
                <li>Python (Numpy, Pandas, Matplotlib, Seaborn)</li>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>HTML & CSS</li>
                <li>Bootstrap</li>
                <li>SQL & MongoDB</li>
                <li>PowerBI</li>
                <li>NLP (NLTK)</li>
                <li>NodeJS & ReactJS</li>
                <li>AWS Essentials</li>
              </ul>
            </h2>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAws} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faJava} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
