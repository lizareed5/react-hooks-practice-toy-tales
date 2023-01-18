import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const url = "http://localhost:3001/toys"
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setToyList(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newToyObj = {
      name: e.target.name.value,
      image: e.target.image.value,
      likes: 0
    }
  handleNewToyPost(newToyObj)
  }

  const handleNewToyPost = (newToyObj) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
      body: JSON.stringify(newToyObj)
      }
    )
    .then(response => response.json())
    .then(returnData => {
      setToyList([...toyList, returnData])
    })
  }

  const handleDeleteToy = (deletedToy) => {
    const updatedToys = toyList.filter(toy => toy.id !== deletedToy.id)
    setToyList(updatedToys)
  }

  const handleLikeToy = (likedToy) => {
    const updatedLikedToys = toyList.map(toy => 
      toy.id === likedToy.id ? likedToy : toy
      )
    setToyList(updatedLikedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
        handleSubmit={handleSubmit}
      /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toyList={toyList}
        handleDeleteToy={handleDeleteToy}
        handleLikeToy={handleLikeToy}
      />
    </>
  );
}

export default App;
