import { gql } from "@urql/svelte";

export const PRODUCTION_STATIONS = gql`
query productionStations {
    productionStations {
        nodes {
            code
            name
            createdAt
            removedAt
        }
    }
}
`