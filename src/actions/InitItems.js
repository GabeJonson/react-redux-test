import { INIT } from "./action_types";
import { setStore, getStore } from "../localStore";

export const Init = () => dispatch => {
    const jsonStore = getStore("payments");

    if (jsonStore === null) setStore("payments", []);

    dispatch({
        type: INIT,
        payload: JSON.parse(jsonStore)
    });
};
