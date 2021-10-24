import React from "react";
type propTypes = {
  challengeText: any;
  listOfWords: any;
  setListOfWords: any;
};

export const ButtonChallenge = ({
  challengeText,
  listOfWords,
  setListOfWords,
}: propTypes) => {
  return (
    <button
      onClick={() => {
        challengeText.trim();
        let countWords = challengeText.match(/(\w+)/g).length;

        if (challengeText.length > 60 || countWords > 9) {
          alert("désolé il y a trop de textes ou trop de mots");
        } else {
          let emptyArray = [];
          let newObject: any = {};
          let newWord = "";

          for (let i = 0; i < challengeText.length; i++) {
            newWord += challengeText[i];

            if (challengeText[i] === " " || i === challengeText.length - 1) {
              console.log("je rentre là ", newWord);
              newObject.word = newWord;
              newObject.synonym1 = "";
              newObject.synonym2 = "";
              emptyArray.push(newObject);
              newWord = "";
              newObject = {};
            }
          }
          setListOfWords(emptyArray);
          console.log("list of words", listOfWords);
        }
      }}
      className="challengeButton"
    >
      Challenge
    </button>
  );
};
