import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Section from '../components/Section';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {featuredimage ? (
        <div className="featured-thumbnail">
          <PreviewCompatibleImage
            imageInfo={{
              image: featuredimage,
              alt: `featured image thumbnail for post ${title}`,
              classNames: `object-cover h-48 w-full`
            }}
          />
        </div>
      ) : null}
      <Section>
        <>
          {helmet || ''}

          <h1>{title}</h1>
          <h2 className="text-gray-500 mb-8">{description}</h2>

          {tags && tags.length ? (
            <div className="flex my-8 border-gray-100 border-t-2 border-b-2 py-2">
              <h4 className="font-semibold mr-2">Tags:</h4>
              <ul className="flex">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link
                      className="mx-2"
                      to={`/tags/${kebabCase(tag)}/`}
                    >{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <PostContent content={content} className="post" />
        </>
      </Section>
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
