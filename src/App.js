import React , {useState} from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people , setPeople] = useState(data);
  const clear = () =>{
    setPeople([]);
  }; 
  return (
    <div className="bg-pink-500 w-full h-screen flex justify-center items-center font-sans">
      <div className="bg-white rounded-lg w-1/3">
        <h1 className="text-4xl font-bold my-6 mx-6">{people.length} birthdays today</h1>
        <List people={people}/>
        <button className="flex justify-center text-3xl items-center text-white bg-pink-500 h-14 rounded-lg my-8 w-11/12 mx-auto" onClick={clear}>Clear All</button>
      </div>
    </div>
  );
};

export default App;
