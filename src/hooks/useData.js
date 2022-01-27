import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useData = () => {
  const [places, setPlaces] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [userBooking, setUserBooking] = useState([]);
  const [recall, setRecall] = useState(false);
  const { user } = useFirebase();
  useEffect(() => {
    fetch(`https://blooming-reaches-46527.herokuapp.com/places/${page}`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pageNumber = Math.ceil(count / 10);
        setPageCount(pageNumber);
        setPlaces(data.places);
      });
  }, [page]);
  useEffect(() => {
    fetch(
      `https://blooming-reaches-46527.herokuapp.com/userBooking/${user.uid}`
    )
      .then((res) => res.json())
      .then((data) => setUserBooking(data));
  }, [user.uid, recall]);

  return {
    places,
    setPage,
    pageCount,
    page,
    userBooking,
    setUserBooking,
    setRecall,
    recall,
  };
};

export default useData;
