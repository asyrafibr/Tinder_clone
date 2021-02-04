import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Middle.css";
import axios from '../../axios';
function Middle() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loading();
  }, []);
  const loading = () => {
    async function fectchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }
    console.log(people);

    fectchData();
  };

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards_container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url( ${person.imgUrl} ) ` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Middle;
