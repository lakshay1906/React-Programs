import { useContext } from "react";
import QuizContext from "../Context/QuizContext";

const Data = () => {
  const { state, dispatch } = useContext(QuizContext);
  return state, dispatch;
};

export default Data;
