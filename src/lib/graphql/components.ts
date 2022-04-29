import { gql } from "@urql/svelte";

export const COMPONENTS = gql`
query components {
    components {
        nodes {
            code
            name
        }
    }
}
`