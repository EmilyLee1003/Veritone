import React from "react";
import Button from "../components/button";

export default function Home() {
  return (
    <div className="main">
      <div className="header">
        <h1> Your shopping list is empty:(</h1>
      </div>

      <div className="button">
        <Button />
      </div>
    </div>
  );
}
