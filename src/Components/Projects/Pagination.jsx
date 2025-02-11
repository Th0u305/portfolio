import React, { useState } from "react";
import { useContext } from "react";
import axios from "axios";

// react icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ContextData } from "../Context/ContextProvider";
import { useEffect } from "react";

const Pagination = () => {
  const { currentPage, setCurrentPage, setService } = useContext(ContextData);

  const totalPages = 6;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/allProjects?page=${currentPage}`)
      .then((response) => {
        // setService(response.data.sort(() => Math.random() - 0.5).slice(0, 6));
        setService(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`mx-1 px-4 py-2 text-[0.9rem] sm:text-[1rem] rounded-full transform transition-all duration-300 ${
            currentPage === i
              ? "bg-[#3B9DF8] text-white scale-110 shadow-md"
              : "bg-transparent text-white hover:bg-blue-500"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center flex-wrap justify-center mb-5 space-x-1 sm:space-x-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <FaChevronLeft />
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
