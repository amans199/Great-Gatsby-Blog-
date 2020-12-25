import React from 'react';
import { graphql , useStaticQuery} from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        author
      }
    }
  }
  `)
  return (
 <footer>
   created by <a href="https://linkedin.com/in/amans199" target="_blank" rel="noopener noreferrer">{data.site.siteMetadata.author}</a>
 </footer>
  )
}


export default Footer