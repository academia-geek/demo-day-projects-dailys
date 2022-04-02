import { typeQuiz } from "../types/types"
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";

export const listQuiz = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "preguntasEncuesta"));
        const quiz = [];
        querySnapshot.forEach((doc) => {
            quiz.push({
                ...doc.data()
            })
        });
        dispatch(listQ(quiz));
    }
}

export const listQ = (quiz) => {
    return {
        type: typeQuiz.list,
        payload: quiz
    }
}