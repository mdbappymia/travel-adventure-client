import React from "react";
import useStore from "../../../hooks/useStore";

const ManageOrder = () => {
  const { userBooking } = useStore();
  console.log(userBooking);
  return (
    <div>
      <h1>This is manage order</h1>
      {userBooking?.map((booking) => (
        <div>{booking?.booked.name}</div>
      ))}
    </div>
  );
};

export default ManageOrder;
