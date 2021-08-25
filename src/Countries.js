import React from "react";

import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
	query GetCountries($code: ID!) {
		continent(code: $code) {
			code
			countries {
				code
                name
			}
		}
	}
`;

const Countries = (props) => {
    
	const { loading, error, data } = useQuery(GET_COUNTRIES, {
		variables:  { code: props.code }  
	});
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			<ul>
                { 
                    data.continent.countries.map(country => {
                        return <li key={country.code}>{country.name}</li>
                    })
                }
            </ul>
		</div>
	);
};

export default Countries;
