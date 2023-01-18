import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, handleDeleteToy, handleLikeToy}) {
  
  const toyCards = 
    toyList.map(toy => 
      <ToyCard
        key={toy.id}
        toy={toy}
        handleDeleteToy={handleDeleteToy}
        handleLikeToy={handleLikeToy}
      />
      )  

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
