import React from "react";
import { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function Fname(event) {
    return setFname(event.target.value);
  }

  function Lname(event) {
    return setLname(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fname}
          onChange={Fname}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={lname}
          onChange={Lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
