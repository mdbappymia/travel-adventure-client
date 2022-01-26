import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useData = () => {
  const [places, setPlaces] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [userBooking, setUserBooking] = useState([]);
  const { user } = useFirebase();
  useEffect(() => {
    fetch(`http://localhost:5000/places/${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const count = data.count;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
        setPlaces(data.places);
      });
  }, [page]);
  useEffect(() => {
    fetch(`http://localhost:5000/userBooking/${user.uid}`)
      .then((res) => res.json())
      .then((data) => setUserBooking(data));
  }, [user.uid]);
  return { places, setPage, pageCount, page, userBooking, setUserBooking };
};

export default useData;