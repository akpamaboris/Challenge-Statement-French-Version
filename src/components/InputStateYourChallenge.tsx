import React from "react";

type propTypes = {
  challengeText: any;
  setChallengeText: any;
};

export const InputStateYourChallenge = ({
  challengeText,
  setChallengeText,
}: propTypes) => {
  return (
    <div className="overlap-group12">
      <input
        className="group-87"
        type="text"
        placeholder="écris ton challenge"
        value={challengeText}
        onChange={(event) => {
          setChallengeText(event.target.value);
        }}
      />
    </div>
  );
};
