import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import "./styles/index.css";

import App from "./App.jsx";

const client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql",
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
