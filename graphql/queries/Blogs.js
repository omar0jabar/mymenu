import gql from "graphql-tag";

// get article (permalink)
const CONTENT_FRAGMENT = gql `
  fragment ContentFields on ArticleContentDynamicZone {
    ... on ComponentBlogMediaContent {
      __typename
      id
      type
      title
      body
      image {
        data {
          attributes {
            url
          }
        }
      }
    }
  }
`;
const OTHER_FRAGMENT = gql `
  fragment OtherFields on ArticleContentDynamicZone {
    ... on ComponentBlog3Blog {
      __typename
      id
      title
      subTitle
      cta {
        text
        url
      }
    }
  }
`;
export const BlogQuery = gql `
${CONTENT_FRAGMENT}
${OTHER_FRAGMENT}
query Article($permalink: String) {
  articles(filters: { seo: { permalink: { eq: $permalink } } }) {
    data {
      id
      attributes {
        title
        image {
          data {
            attributes {
              url
            }
          }
        }
        seo {
          permalink
        }
        content {
          ...ContentFields
          ...OtherFields
        }
        categories {
          data {
            id
            attributes {
              title
              subtitle
            }
          }
        }
      }
    }
  }
}
`
