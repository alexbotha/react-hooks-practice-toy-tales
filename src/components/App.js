import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = "http://localhost:3001/toys";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then(setToys);
  }, []);

  function updatingToylist(newToyDetails) {
    setToys([...toys, newToyDetails]);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleDelete(toyToDelete) {
    const deletedToyUpdate = toys.filter((toy) => toy.id !== toyToDelete.id);
    setToys(deletedToyUpdate);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updatingToylist={updatingToylist} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        handleDelete={handleDelete}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;
