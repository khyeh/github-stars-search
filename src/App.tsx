import React from "react";
import Button from "./shared/components/Button";
import "./index.css";

import { GetRepositoriesResponse, Repository } from "./types/repositories";
import TextField from "./shared/components/TextField";

const API_URL = "https://api.github.com";

const App = () => {
  const [query, setQuery] = React.useState<string>("");
  const [results, setResults] = React.useState<Repository[]>([]);

  const fetchResults = async (query: string) => {
    const params = {
      q: `user:${query}`,
      sort: "stars",
    };
    try {
      const response = await fetch(
        `${API_URL}/search/repositories?` + new URLSearchParams(params)
      );
      const json: GetRepositoriesResponse = await response.json();
      console.log("json", json);
      return json.items || [];
    } catch (e: any) {
      throw new Error(e);
    }
  };

  const handleSearch = async () => {
    const results = await fetchResults(query);
    setResults(results);
  };

  return (
    <div className="lg:mx-48 md:mx-24 mx-0 my-6">
      <h1 className="text-3xl font-bold text-center">
        Top Github Repositories by User
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className="flex flex-row justify-center my-6 space-x-12">
          <TextField
            placeholder="Search GitHub Users"
            spellCheck="false"
            value={query}
            type="text"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button disabled={!query} onClick={handleSearch}>
            Search
          </Button>
        </div>
      </form>
      <div className="mt-6 grid grid-cols-12 gap-4">
        {results.map((result) => (
          <React.Fragment key={result.id}>
            <div className="col-start-6 col-span-4">{result.name}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default App;
