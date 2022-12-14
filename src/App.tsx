import React from "react";
import Button from "./shared/components/Button";
import "./index.css";

import { GetRepositoriesResponse, Repository } from "./types/repositories";
import TextField from "./shared/components/TextField";
import Loading from "./shared/components/Loading";
import Results from "./Results";
import PaginationButtons from "./PaginationButtons";

const API_URL = "https://api.github.com";

const App = () => {
  const [query, setQuery] = React.useState<string>("");
  const [results, setResults] = React.useState<Repository[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const fetchResults = async (query: string, page: number = 1) => {
    const params = {
      q: `user:${query}`,
      sort: "stars",
      page: page.toString(),
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

  const handlePagination = async (page: number, direction: "next" | "prev") => {
    setIsLoading(true);
    setCurrentPage(direction === "next" ? currentPage + 1 : currentPage - 1);
    const results = await fetchResults(query, page);
    setIsLoading(false);
    setResults(results);
  };

  console.log("current page", currentPage);

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
        <Results results={results} currentPage={currentPage}>
          <PaginationButtons
            onPrev={() => handlePagination(currentPage - 1, "prev")}
            onNext={() => handlePagination(currentPage + 1, "next")}
            currentPage={currentPage}
          />
        </Results>
      )}
    </div>
  );
};

export default App;
