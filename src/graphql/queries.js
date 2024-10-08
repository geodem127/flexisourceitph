/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStudents = /* GraphQL */ `
  query GetStudents($id: ID!) {
    getStudents(id: $id) {
      id
      student_id
      first_name
      last_name
      email
      dob
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        student_id
        first_name
        last_name
        email
        dob
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
