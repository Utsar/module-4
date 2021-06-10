import { useState } from "react";

const Hooks = (props) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("kristian");

  return (
    <div>
      <h2>{props.toDo?.title}</h2>
      <h1>
        Hey my name is {name}, the counter is: {counter}
      </h1>
      <button onClick={() => setName("Beer")}>change name</button>
      <button onClick={() => setCounter(10)}> change counter</button>
    </div>
  );
};
export default Hooks;
