import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const friendsPromise = fetchFriends();

  function handleClick() {
    alert("I am Clicked.");
  }

  const handleClick3 = () => {
    alert("I am clicked3.");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Get started</h3>

      <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>

      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <br />
      <button
        onClick={function handleClick() {
          alert("I am clicked 2.");
        }}
      >
        Click Me 2
      </button>
      <br />
      <button onClick={handleClick3}>Click Me 3</button>
      <br />
      <button onClick={() => alert("I am Clicked 4")}>Click Me 4</button>
      <br />
      <button onClick={() => handleAdd5(10)}>Click Me 5</button>
    </>
  );
}

export default App;
