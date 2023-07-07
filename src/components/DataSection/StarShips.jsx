import { useState, useEffect } from "react";
import starship from "../../img/starship-2.jpg";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const StarShips = ({ starShipData, currentPage, setCurrentPage }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState(starShipData.results);
  const data = starShipData.results

  useEffect(() => {
    setFilteredData(starShipData.results)
  }, [currentPage, starShipData]);

  const reloadData = () => {
    setInputValue("");
    setFilteredData(starShipData.results);
  };

  const filterData = () => {
    const filtered = data.filter((result) =>
      result.name.toLowerCase().includes(inputValue.toLowerCase()),
    );

    setFilteredData(filtered);
  };

  const nextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  const previousPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  return (
    <section className="flex flex-col gap-4 w-full p-4">
      <div className="flex flex-row flex-wrap gap-2 justify-between items-center w-full">
        <h1 className="text-xl font-semibold">Popular Starship</h1>
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={() => filterData()}
          value={inputValue}
          className="min-h-[1.2rem] focus:shadow-[0px_0px_0px_3px_] focus:shadow-buttonBlue duration-300 focus:outline-0 rounded-lg p-4 max-w-xs w-full border border-[#1D1A2B]"
        />
      </div>
      {inputValue.length > 0 && filteredData.length < 1 ? (
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-center gap-y-4 justify-center w-full max-w-sm">
            <h1 className="text-lg font-semibold">NO MATCH FOUND</h1>
            <button
              type="button"
              onClick={() => reloadData()}
              className="bg-[#1D1A2B] text-white max-w-[7rem] min-h-[2rem] rounded-md w-full hover:opacity-80 duration-500 ease-linear"
            >
              Back
            </button>
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {filteredData?.map((result, index) => (
          <div key={index} className="flex flex-col gap-4">
            <img
              src={starship}
              alt="starship"
              className="w-full hover:scale-95 duration-300 ease-linear"
              width={250}
              height={250}
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-base md:text-lg">
                <span className="font-normal">Name:</span> {result.name}
              </p>
              <p className="font-bold text-base md:text-lg">
                <span className="font-normal">Model:</span> {result.model}
              </p>
              <p className="font-bold text-base md:text-lg">
                <span className="font-normal">Manufacturer:</span>
                {result.manufacturer}
              </p>
            </div>

            <button
              type="button"
              className="w-full max-w-[8rem] min-h-[3rem] border border-black rounded-md hover:scale-105 duration-300 ease-linear"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <div
        className={
          filteredData.length < 1
            ? "hidden"
            : "flex items-center justify-center"
        }
      >
        <div className="flex flex-row items-center justify-center gap-4">
          <button
            type="button"
            title="Previous Page"
            disabled={starShipData.previous ? false : true}
            onClick={() => previousPage()}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <AiOutlineLeft className="text-lg" />
          </button>
          <button
            type="button"
            title="Next Page"
            disabled={starShipData.next ? false : true}
            onClick={() => nextPage()}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <AiOutlineRight className="text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StarShips;
