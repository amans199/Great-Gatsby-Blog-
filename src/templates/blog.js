import React from 'react';
import {graphql,Link} from 'gatsby' 

import Layout from '../components/layout'

export const query = graphql`
  query($slug:String!){
    markdownRemark(fields:{slug:{eq:$slug}}){
      frontmatter{
        title
        date
      }
      html
      excerpt
      fields {
        slug
      }
    }
  }
`

const Blog = (props) => {
  return(
    <Layout>
      <article className="container post">
        <small><Link to="/blog/">{`< \xa0Blog`}</Link></small>
        <header>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}>
        </section>
      </article>
    </Layout>
  )
}


export default Blog