import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const [id, name, age, img] = person;
        <article key={people.id}>
          <img src={img} alt={name} />
          <div>
            <h2>{name}</h2>
            <p>{age} years</p>
          </div>
        </article>;
      })}
    </>
  );
};

export default List;
