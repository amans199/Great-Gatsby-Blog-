import React from 'react';
import {graphql,Link} from 'gatsby' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout'
import Helmet from '../components/head'

export const query = graphql`
  query($slug:String!){
    contentfulBlogPost(slug:{eq:$slug}){
        title
        publishedDate(fromNow:true)
        body{
          raw
          references {
            title
          ... on ContentfulAsset {
            contentful_id
            __typename
            fluid(maxWidth: 2560) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        }
    }
  }
`

const Blog = (props) => {
  const body = JSON.parse(props.data.contentfulBlogPost.body.raw)
  // todo : fix images not displaying issue 
  // console.log(props.data.contentfulBlogPost.body.references[0].title)
  // console.log(props.data.contentfulBlogPost.body.references)
  const options = {
    renderNode:{
      "embedded-asset-block":(node,children) => {
        // console.log(node)
        // const alt = node.data.target.fields.title['en-US']
        // const url = node.data.target.fields.file['en-US'].url
        return <img alt='' src={props.data.contentfulBlogPost.body.references[0].fluid.src} />
      }
    }
  }
  // console.log(JSON.parse(props.data.contentfulBlogPost.body.raw))
  return(
    <Layout>
      <Helmet title={props.data.contentfulBlogPost.title} />
      <article className="container post">
        <small><Link to="/blog/">{`< \xa0Blog`}</Link></small>
        <header>
            <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {/* <p>{props.data.contentfulBlogPost.body.references.file.url}</p> */}
        </header>
        {/* <section dangerouslySetInnerHTML={{__html:props.data.contentfulBlogPost.body.raw}}> 
        </section> */}
        {documentToReactComponents(body,options)}
      </article>
    </Layout>
  )
}


export default Blog