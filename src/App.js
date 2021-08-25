<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
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
>>>>>>> 299a9db (Initial commit)
}

export default App;
