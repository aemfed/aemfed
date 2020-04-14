import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/AEM-logo.png'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer bg-gray-100 ">
        <div className="container mx-auto flex px-2 py-4 items-center">
          <img
            src={logo}
            alt="AEM FED"
            className="w-8 h-8 mr-4"
          />
          <p className="text-gray-800 m-0 font-bold">&copy; {new Date().getFullYear()} AEM FED</p>
        </div>
      </footer>
    )
  }
}

export default Footer
