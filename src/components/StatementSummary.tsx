import React from "react";

type propTypes = {
  challengeText: any;
};
export const StatementSummary = ({ challengeText }: propTypes) => {
  return (
    <h1 className="statementSummary rubik-medium-havelock-blue-40px">
      {challengeText.length > 3
        ? challengeText
        : "Exemple de challenge 'En quoi je peux vendre plus de joggings Nike'"}
    </h1>
  );
};
