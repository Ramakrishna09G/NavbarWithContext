// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar/index'

import './index.css'

const About = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value
      const themeClassName = isDarkTheme ? 'dark-theme' : 'light-theme'
      const aboutHeadingClassName = isDarkTheme
        ? 'light-about-heading'
        : 'dark-about-heading'
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <div className="about-bg-container">
          <Navbar />
          <ul className={`${themeClassName} about-container`}>
            <li>
              {' '}
              <img src={aboutImage} alt="about" className="about-img" />
            </li>
            <li>
              <h1 className={`${aboutHeadingClassName} about-heading`}>
                About
              </h1>
            </li>
          </ul>
        </div>
      )
    }}
  </ThemeContext>
)

export default About
