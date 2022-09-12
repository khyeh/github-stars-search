import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Button from "./shared/components/Button";
import "./index.css";

import { GetRepositoriesResponse, Repository } from "./types/repositories";
import TextField from "./shared/components/TextField";
import Loading from "./shared/components/Loading";
import clsx from "clsx";

const API_URL = "https://api.github.com";

const App = () => {
  const [query, setQuery] = React.useState<string>("");
  const [results, setResults] = React.useState<Repository[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

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
    setIsLoading(true);
    const results = await fetchResults(query);
    setIsLoading(false);
    setResults(results);
  };

  return (
    <div className="xl:mx-48 lg:mx-24 md:mx-48 sm:mx-24 mx-6 my-6">
      <h1 className="text-3xl font-bold text-center">
        Top Github Repositories by User
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <div className="flex flex-row justify-center my-6 space-x-12 mb-6">
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
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-rows-15 lg:grid-flow-col md:grid-flow-row md:grid-col-1 gap-4">
          {results.map((result, index) => (
            <React.Fragment key={result.id}>
              <div
                className={clsx(
                  "px-4",
                  "sm:px-6",
                  "py-3",
                  "bg-gray-100",
                  "border-gray-300",
                  "dark:bg-gray-700",
                  "dark:bg-border-gray-600"
                )}
              >
                <div className="flex justify-between">
                  <div>{`${index + 1}.`}</div>
                  <a href={result.url}>{result.name}</a>
                  <div className="flex row align-center space-x-2">
                    <StarIcon className="h-6 w-6 text-yellow-500" />
                    <div>{result.stargazers_count}</div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
