import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import Countries from "./Countries";
import "./App.css";

const GET_CONTINENTS = gql`
	query GetContinents {
		continents {
			code
			name
		}
	}
`;

function App() {
	const [countryState, setCountryState] = useState('AF');

	const onChangeHandler = (event) => {
		setCountryState(event.target.value);
	};

	const { loading, error, data } = useQuery(GET_CONTINENTS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	return (
		<div className="App">
			<h2>My First Apollo App</h2>
			<select onChange={onChangeHandler}>
				{data.continents.map((continent) => {
					return (
						<option key={continent.code} value={continent.code}>
							{continent.name}
						</option>
					);
				})}
			</select>
			<Countries code={countryState}/>
		</div>
	);
}

export default App;
