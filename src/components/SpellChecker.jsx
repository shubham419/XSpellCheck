import {useState} from "react";

const SpellChecker = () => {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
  const [sentance, setSentance] = useState("");
  const [suggestion, setSuggestion] = useState("");
  
  function handleSentance(e) {
    const currentVal = e.target.value
    setSentance(currentVal);
    const correctWords = currentVal.split(" ")
    .filter((word) =>{
        if(customDictionary[word])
            return customDictionary[word];
    
    })
    console.log(correctWords);
    if(correctWords){
        setSuggestion(correctWords[0]);
    }else{
        setSuggestion("");
    }
}


  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea cols="40" rows="7" value={sentance} onChange={handleSentance}></textarea>
      {
        suggestion ? <p>{`Did you mean: ${suggestion}?`}</p> : null
      }
    </div>
  );
};

export default SpellChecker;
