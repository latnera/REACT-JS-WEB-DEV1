import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

let arr = [
  { id: "1", fName: "Shibiru", lName: "Ararso" },
  { id: "2", fName: "Garamu", lName: "Tolosa" },
  { id: "3", fName: "Dejene", lName: "Ayana" }
];
export default function Login() {
  const [state, setState] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    let product = arr.filter((pro) => pro.id === productId);

    setState(product);
  }, [productId]);

  return (
    <div>
      {state.map((item) => {
        return (
          <>
            <p>Id: {item.id}</p>
            <p>First Name: {item.fName}</p>
            <p>Last Name: {item.lName}</p>
          </>
        );
      })}
    </div>
  );
}
