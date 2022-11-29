import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys }) {
  const toy = toys.map((toy) => <ToyCard toy={toy} />);

  return <div key={toy.id}>{toy}</div>;
}

export default ToyContainer;
