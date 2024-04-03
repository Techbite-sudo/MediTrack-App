import { gql } from '@apollo/client';

export const GET_MEDICATIONS = gql`
  query GetMedications {
    medications {
      id
      name
      description
      stock
    }
  }
`;