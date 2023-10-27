import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const {id, name, age, image} = person;
        return(
        <article className="flex justify-start items-center my-6" key={id}>
          <img className="w-20 h-20 rounded-full mx-6" src={image} alt={name} />
          <div>
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-gray-500 font-medium">{age} years</p>
          </div>
        </article>);
      })}
    </>
  );
};

export default List;
