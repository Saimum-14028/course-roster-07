/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Cart = ({ selectedCourses, remaining, totalCredit }) => {

  let count = 0;

  return (
    <div className="card bg-slate-100">
      <div className="card-body">
        <h2 className="text-cyan-600 font-bold text-lg">Credit Hour Remaining {remaining} hr</h2>

        <hr />
        
        <h3 className="font-bold text-lg">Course Name</h3>
        
        {selectedCourses.map((course) => (
          <li className="font-normal text-base list-none" key={course.id}>{++count}. {course.name}</li>
        ))}

        <hr />
      
        <h3 className="font-semibold text-base">Total Credit Hour : {totalCredit}</h3>

      </div>
    </div>
  );
};

export default Cart;
