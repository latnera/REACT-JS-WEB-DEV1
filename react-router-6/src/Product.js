import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

let arr = [
  { id: "1", fName: "Shibiru", lName: "Ararso" },
  { id: "2", fName: "Garamu", lName: "Tolosa" },
  { id: "3", fName: "Dejene", lName: "Ayana" }
];
export default function Product() {
  const [state, setState] = useState(arr);
  const navigate = useNavigate();

  // let idFunc = (e) => {
  //   navigate("product/:productId");
  // };
  return (
    <div>
      {state.map((item) => {
        return (
          <>
            <p>{item.fName}</p>

            <Link to={`/home/product/${item.id}`}>more info</Link>
          </>
        );
      })}
    </div>
  );
}
