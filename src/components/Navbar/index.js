// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChangeTheme = () => {
        toggleTheme(isDarkTheme)
      }

      const themeClassName = isDarkTheme ? 'nav-dark-theme' : 'nav-light-theme'
      const itemClassName = isDarkTheme ? 'light-item' : 'dark-item'
      const websiteLogoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <div className={`${themeClassName} nav-bar-container`}>
          <img
            src={websiteLogoImg}
            alt="website logo"
            className="website-logo"
          />

          <div className="nav-links-card">
            <Link to="/" className="link-item">
              <p className={`${itemClassName} item`}>Home</p>
            </Link>
            <Link to="/about" className="link-item">
              <p className={`${itemClassName} item`}>About</p>
            </Link>
          </div>
          <button
            type="button"
            className="theme-change-btn"
            data-testid="theme"
            onClick={onChangeTheme}
          >
            <img src={themeImg} alt="theme" className="theme-img" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
