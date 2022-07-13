import gql from "graphql-tag";



//HOME BANNER
const BANNER_ITEMS = gql `
fragment Banner on HomePageContentDynamicZone {
  ... on ComponentGlobalBanner {
    __typename
    id
    title
    items {
      id
      title
      subTitle
      image {
        data {
          id
          attributes {
            url
          }
        }
      }
      link
    }
  }
}
`
export const HomeQuery = gql `
    query getBanner {
      tests {
        data {
          id
          attributes{
            titre
            discription
          }
        }
      }
    }
    
  `;
