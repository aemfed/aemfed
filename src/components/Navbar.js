import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/AEM-Logo.png';

const Navbar = props => {
  const NavLinkClasses = `navbar-item text-cream font-bold mx-4 px-3 py-2 rounded-md focus:bg-gray-900 hover:bg-gray-900 hover:text-white`;
  return (
    <nav
      className="navbar bg-gray-800 flex items-center p-4"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container mx-auto flex items-center">
        <Link to="/" className="navbar-item w-10 h-10" title="Logo">
          <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
        </Link>
        <Link to="/" className="text-cream font-bold text-lg mx-6">
          AEM FED
        </Link>
        {/* <Link className={NavLinkClasses} to="/about">
          About
        </Link>
        <Link className={NavLinkClasses} to="/blog">
          Articles
        </Link>
        <Link className={NavLinkClasses} to="/courses">
          Courses
        </Link> */}
      </div>
    </nav>
  );
}

// const Navbar = class extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       active: false,
//       navBarActiveClass: '',
//     }
//   }

//   toggleHamburger = () => {
//     // toggle the active boolean in the state
//     this.setState(
//       {
//         active: !this.state.active,
//       },
//       // after state has been updated,
//       () => {
//         // set the class in state for the navbar accordingly
//         this.state.active
//           ? this.setState({
//             navBarActiveClass: 'is-active',
//           })
//           : this.setState({
//             navBarActiveClass: '',
//           })
//       }
//     )
//   }

//   render() {
//     return (
//       <nav
//         className="navbar is-transparent"
//         role="navigation"
//         aria-label="main-navigation"
//       >
//         <div className="container">
//           <div className="navbar-brand">
//             <Link to="/" className="navbar-item" title="Logo">
//               <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
//             </Link>
//             {/* Hamburger menu */}
//             <div
//               className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//               data-target="navMenu"
//               onClick={() => this.toggleHamburger()}
//             >
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//           <div
//             id="navMenu"
//             className={`navbar-menu ${this.state.navBarActiveClass}`}
//           >
//             <div className="navbar-start has-text-centered">
// <Link className="navbar-item" to="/about">
//   About
// </Link>
// <Link className="navbar-item" to="/blog">
//   Blog
// </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     )
//   }
// }

export default Navbar
