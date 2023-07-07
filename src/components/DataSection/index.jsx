import useSWR from "swr";
import { useState } from "react";
import Loader from "../Loader";
import Failed from "../Failed";
import StarShips from "./StarShips";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DataSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/starships/?page=${currentPage}`,
    fetcher,
  );

  if (error) return <Failed />;
  if (isLoading) return <Loader />;

  return <StarShips starShipData={data} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
};

export default DataSection;
