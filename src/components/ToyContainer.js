import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDelete, onUpdateToy }) {
  const toy = toys.map((toy) => (
    <ToyCard toy={toy} handleDelete={handleDelete} onUpdateToy={onUpdateToy} />
  ));

  return <div key={toy.id}>{toy}</div>;
}

export default ToyContainer;
