import React, {useState} from "react";

function ToyForm({handleSubmit}) {
  
  const [newNameInput, setNewNameInput] = useState("")
  const [newImageInput, setNewImageInput] = useState("")
  
  const handleNameInput = (e) => {
    setNewNameInput(e.target.value)
  }

  const handleImageInput = (e) => {
    setNewImageInput(e.target.value)
  }

  return (
    <div className="container" onSubmit={handleSubmit}>
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={newNameInput}
          onChange={handleNameInput}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={newImageInput}
          onChange={handleImageInput}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
