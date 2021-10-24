import React, { useState } from "react";
import "./App.css";
import "./Styleguide.css";

//I IMPORT THE COMPONENTS
import { WholeApp } from "./components/WholeApp";

function App() {
  const [challengeText, setChallengeText] = useState("");
  return (
    <div>
      <WholeApp
        challengeText={challengeText}
        setChallengeText={setChallengeText}
      />
    </div>
  );
}

export default App;
