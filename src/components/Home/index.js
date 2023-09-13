// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar/index'

import './index.css'

const Home = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value
      const themeClassName = isDarkTheme ? 'dark-theme' : 'light-theme'
      const homeHeadingClassName = isDarkTheme
        ? 'light-home-heading'
        : 'dark-home-heading'
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      return (
        <div className="home-bg-container">
          <Navbar />
          <ul className={`${themeClassName} home-container`}>
            <li>
              {' '}
              <img src={homeImage} alt="home" className="home-img" />
            </li>
            <li>
              {' '}
              <h1 className={`${homeHeadingClassName} home-heading`}>Home</h1>
            </li>
          </ul>
        </div>
      )
    }}
  </ThemeContext>
)

export default Home
