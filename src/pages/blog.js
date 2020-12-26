import { useStaticQuery,Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout'

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
query{
  allContentfulBlogPost(
    sort:{
      fields:publishedDate,
      order:DESC
    }
  ){
    edges{
      node{
        title
        slug
        publishedDate(fromNow:true)
      }
    }
  }
}
  `)
  return (
    <Layout>
    <h1>Blog</h1>
    {posts.allContentfulBlogPost.edges.map((edge,index)=>{
     return (
       <div key={index}>
        <Link to={`/blog/${edge.node.slug}`}><h2>{edge.node.title}</h2></Link>
      <p>{edge.node.publishedDate}</p>
       </div>
     )
    })}
    </Layout>
  )
}


export default BlogPage