import React from "react";
import Button from "./shared/components/Button";

type Props = {
  onNext: () => void;
  onPrev: () => void;
  currentPage: number;
};

const PaginationButtons = ({ onNext, onPrev, currentPage }: Props) => {
  return (
    <div className="flex row justify-between space-x-12 my-12">
      {currentPage !== 1 ? (
        <Button aria-label="prevButton" onClick={onPrev} className="py-2">
          Previous
        </Button>
      ) : null}
      <Button aria-label="nextButton" onClick={onNext} className="py-2">
        Next
      </Button>
    </div>
  );
};

export default PaginationButtons;
