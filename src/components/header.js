import React from 'react';
import { graphql, Link , useStaticQuery} from 'gatsby'
// import '../styles/components/header.scss'
import headerStyles from '../styles/components/header.module.scss'
const Navbar = () => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
  `)
  return (
 <header className={headerStyles.header}>
    <nav>
        <h1>{data.site.siteMetadata.title}</h1>
    <ul>
    <li><Link to="/" activeClassName={headerStyles.activeNavItem}>Home</Link></li>
    <li><Link to="/blog" activeClassName={headerStyles.activeNavItem}>Blog</Link></li>
    <li><Link to="/about" activeClassName={headerStyles.activeNavItem}>About us</Link></li>
    <li><Link to="/contact" activeClassName={headerStyles.activeNavItem}>Contact us</Link></li>
  </ul>
  </nav>
 </header>
  )
}


export default Navbar