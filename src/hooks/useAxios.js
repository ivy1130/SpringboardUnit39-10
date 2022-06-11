import { useState } from "react";
import {v4 as uuid} from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const [cards, setCards] = useState([])
  const addCard = async (addlUrl= "") => {
    const response = await axios.get(
      `${url}${addlUrl}`
    );
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
};

export default useAxios;