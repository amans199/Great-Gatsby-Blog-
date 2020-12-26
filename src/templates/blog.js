import React from 'react';
import {graphql,Link} from 'gatsby' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout'

export const query = graphql`
  query($slug:String!){
    contentfulBlogPost(slug:{eq:$slug}){
        title
        publishedDate(fromNow:true)
        body{
          raw
        }
    }
  }
`

const Blog = (props) => {
  const body = JSON.parse(props.data.contentfulBlogPost.body.raw)
  // todo : fix images not displaying issue 
  const options = {
    // renderNode:{
    //   "embedded-asset-block":(node) => {
    //     const alt = node.data.target.fields.title['en-US']
    //     const url = node.data.target.fields.file['en-US'].url
    //     return <img alt={alt} src={url} />
    //   }
    // }
  }
  // console.log(JSON.parse(props.data.contentfulBlogPost.body.raw))
  return(
    <Layout>
      <article className="container post">
        <small><Link to="/blog/">{`< \xa0Blog`}</Link></small>
        <header>
            <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {/* <p>{props.data.contentfulBlogPost.body.references.file.url}</p> */}
        </header>
        {/* <section dangerouslySetInnerHTML={{__html:props.data.allContentfulBlogPost.html}}>
        </section> */}
        {props.data.contentfulBlogPost.body.raw ? documentToReactComponents(body,options) : ''}
      </article>
    </Layout>
  )
}


export default Blog