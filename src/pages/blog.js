import { useStaticQuery,Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout'

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
query{
  allMarkdownRemark{
    edges{
      node{
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
  }
}
  `)
  return (
    <Layout>
    <h1>Blog</h1>
    {posts.allMarkdownRemark.edges.map((edge)=>{
     return (
       <div>
        <Link to={`/blog/${edge.node.fields.slug}`}><h2>{edge.node.frontmatter.title}</h2></Link>
      <p>{edge.node.frontmatter.date}</p>
       </div>
     )
    })}
    </Layout>
  )
}


export default BlogPage