import React, { useEffect } from "react";
import { getIndexApi } from "../../api/authApi";

export default function Home() {
  useEffect(() => {
    getIndexApi().then((response) => {
      console.log(response);
    });
  }, []);
  return <div>Home</div>;
}
