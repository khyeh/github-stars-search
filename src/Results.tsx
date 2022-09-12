import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import "./index.css";

import { Repository } from "./types/repositories";
import clsx from "clsx";

type Props = {
  results: Repository[];
  currentPage: number;
  children: React.ReactNode;
};

const Results = ({ results, currentPage, children }: Props) => {
  if (!results.length) {
    return null;
  }

  return (
    <div>
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
                <div>{`${calculateRanking(currentPage, index)}.`}</div>
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
      {children}
    </div>
  );
};

const calculateRanking = (currentPage: number, index: number) => {
  if (currentPage === 1) {
    return index + 1;
  }
  return currentPage * (currentPage * 5 + 5) + index + 1;
};

export default Results;
