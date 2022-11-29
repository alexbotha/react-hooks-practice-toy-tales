import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import ToyCard from "./ToyCard";

const API = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  function updatingToylist(newToyDetails) {
    setToys([...toys, newToyDetails]);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updatingToylist={updatingToylist} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  );
}

export default App;
