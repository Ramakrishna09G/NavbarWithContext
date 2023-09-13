// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar/index'

import './index.css'

const NotFound = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value

      const notFoundContainerClassName = isDarkTheme
        ? 'dark-theme'
        : 'light-theme'

      const notFoundHeadingClassName = isDarkTheme
        ? 'light-not-found-heading'
        : 'dark-not-found-heading'
      const notFoundSubHeadingClassName = isDarkTheme
        ? 'light-not-found-sub-heading'
        : 'dark-not-found-sub-heading'

      return (
        <div className="not-found-bg-container">
          <Navbar />
          <div className={`${notFoundContainerClassName} not-found-container`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1
              className={`${notFoundHeadingClassName} dark-not-found-heading`}
            >
              Lost Your Way?
            </h1>
            <p
              className={`${notFoundSubHeadingClassName} dark-not-found-sub-heading`}
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext>
)

export default NotFound
