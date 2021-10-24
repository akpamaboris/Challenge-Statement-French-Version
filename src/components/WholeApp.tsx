import React, { useState } from "react";
import { InputRewriteChallenge } from "../InputRewriteChallenge";
import { ButtonChallenge } from "./ButtonChallenge";
import { CardComponent } from "./CardComponent";

import { InputStateYourChallenge } from "./InputStateYourChallenge";
import { RewriteChallenge } from "./RewriteChallenge";
import { StatementSummary } from "./StatementSummary";

type propTypes = {
  challengeText: any;
  setChallengeText: any;
};

export const WholeApp = ({ setChallengeText, challengeText }: propTypes) => {
  const [listOfWords, setListOfWords] = useState([]);

  return (
    <div className="container-center-horizontal">
      {/* CENTRE TON CHALLENGE DEBUT*/}
      <div className="web-9 screen">
        <div className="group-70">
          <div className="overlap-group">
            <div className="ellipse"></div>
            <div className="text-1">
              <span className="span0">C</span>
              <span className="span1">
                entre <br />
                <span style={{ marginLeft: 5 }}>ton challenge</span>
              </span>
            </div>
          </div>
        </div>
        {/* CENTRE TON CHALLENGE FIN*/}
        <InputStateYourChallenge
          challengeText={challengeText}
          setChallengeText={setChallengeText}
        />
        <StatementSummary challengeText={challengeText} />
        <ButtonChallenge
          challengeText={challengeText}
          listOfWords={listOfWords}
          setListOfWords={setListOfWords}
        />
        <div className="flex-row">
          {listOfWords.length > 0 ? (
            listOfWords.map((item: any, index: number) => {
              return (
                <CardComponent
                  keyVal={index}
                  name={item.word}
                  synonym1={item.synonym1}
                  synonym2={item.synonym2}
                />
              );
            })
          ) : (
            <CardComponent />
          )}
        </div>
        <RewriteChallenge />
        <InputRewriteChallenge />
      </div>
    </div>
  );
};
