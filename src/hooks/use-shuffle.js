import { useState } from "react";

import shuffle from "../helpers/shuffle";
import chunkArray from "../helpers/chunkArray";

const useShuffle = (array) => {
  const [shuffledArray, setShuffledArray] = useState([]);
  const shuffleArray = (players) => {
    const shuffledArray = shuffle(array);
    const chunks = chunkArray(shuffledArray, players);
    setShuffledArray(chunks);
    return chunks;
  };

  return {
    shuffledArray,
    shuffle: shuffleArray,
  };
};

export default useShuffle;
