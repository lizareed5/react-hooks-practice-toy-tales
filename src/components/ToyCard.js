import React, {useState} from "react";

function ToyCard({toy, handleDeleteToy, handleLikeToy}) {
   
  const [toyLikes, setToyLikes] = useState(toy.likes || 0)

  const handleDeleteButton = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    // .then(response => response.json())
    .then(handleDeleteToy(toy))
  }

  const handleLikeButton = () => {
    setToyLikes(prevCount => prevCount + 1)
    handleLikePATCH()
  }

  const handleLikePATCH = () => {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({likes: toyLikes + 1})
    })
    // .then(response => response.json())
    .then(handleLikeToy(toy))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"

      />
      <p>{toyLikes} Likes </p>
      <button 
        className="like-btn"
        onClick={handleLikeButton}
      >Like {"<3"}</button>
      <button 
        className="del-btn"
        onClick={handleDeleteButton}
      >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
