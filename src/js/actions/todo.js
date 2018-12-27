import { ADD_TODO } from "../constants/actionTypes.js"

export function addArticle(payload) {
  return { type: ADD_TODO, payload };
}
