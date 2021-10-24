import React from "react";

type propTypes = {
  text?: string;
  name?: string;
  synonym1?: any;
  synonym2?: any;
  keyVal?: any;
};

const ButtonInCard = ({
  text,
  name,
  synonym1,
  synonym2,
  keyVal,
}: propTypes) => {
  return (
    <div className="button">
      <div className="overlap-group-3">
        <input
          type="text"
          className="suis lato-medium-san-juan-18px"
          value={text}
          placeholder="synonyme"
        ></input>
      </div>
    </div>
  );
};

export const CardComponent = ({
  text,
  name,
  synonym1,
  synonym2,
  keyVal,
}: propTypes) => {
  return (
    <div className="card">
      <div className="synonyme-de-je lato-bold-san-juan-16px">
        Synonyme de {name}
      </div>
      <div className="overlap-group2">
        <ButtonInCard />
        <ButtonInCard />
      </div>
    </div>
  );
};
