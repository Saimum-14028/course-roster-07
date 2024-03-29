/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef*/
import React, { useEffect } from "react";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Home = () => {
  const creditLimit = 20;
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [remaining, setRemaining] = useState(creditLimit);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectedCourse = (course) => {
    const isExist = selectedCourses.find((item) => item.id === course.id);

    let credit = course.credit;

    if (isExist) {
      return alert("Course Already Added!");
    } 
    else {
      selectedCourses.forEach((item) => {
        credit += item.credit;
      });

      const remaining = creditLimit - credit;

      if (credit > creditLimit) {
        return alert("Credit Limit Exceeded!");
      } 
      else {
        setRemaining(remaining);
        setTotalCredit(credit);
        setSelectedCourses([...selectedCourses, course]);
      }
    }
  };

  return (
      <div className="flex w-11/12 mx-auto gap-5">
        <div className="grid grid-cols-3 gap-5 w-3/4">
          {allCourses.map((course) => (
            <div key={course.id} className="card bg-slate-100">
              <figure className="px-5 pt-5">
                <img src={course.image} alt={course.name} className="rounded-xl" />
              </figure>
              <div className="card-body items-center">
                <h2 className="font-semibold text-lg">{course.name}</h2>
                <p className="font-normal text-sm">{course.details}</p>          
              </div>

              <div className="flex gap-2 mx-5 items-center align-center">
                  <i className="fa-solid fa-dollar-sign"></i>
                  <p className="font-medium text-base">Price : {course.price}</p>
                  <i className="fa-solid fa-book-open"></i>
                  <p className="font-medium text-base">Credit : {course.credit}hr</p>
              </div>  

              <div className="card-actions m-5">
                  <button onClick={() => handleSelectedCourse(course)} className="btn btn-info w-full text-white">Select</button>
              </div>
          </div>
          ))}
        </div>
        <div className="w-1/4 ">
          <Cart
            selectedCourses={selectedCourses}
            remaining={remaining}
            totalCredit={totalCredit}
          ></Cart>
        </div>
      </div>
  );
};

export default Home;
