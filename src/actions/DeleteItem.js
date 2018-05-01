import { DELETE } from "./action_types";
import { setStore, getStore } from "../localStore";

export const Delete = itemIndex => dispatch => {
    const storeElements = getStore("payments");
    const jsonElements = JSON.parse(storeElements);

    jsonElements.splice(itemIndex, 1);

    setStore("payments", jsonElements);

    dispatch({
        type: DELETE,
        payload: jsonElements
    });
};
