import { CREATE_ITEM } from "./action_types";
import { setStore, getStore } from "../localStore";

export const CreateItem = item => dispatch => {
    const store = getStore("payments");
    const jsonStore = JSON.parse(store);
    jsonStore.push(item);
    setStore("payments", jsonStore);

    dispatch({
        type: CREATE_ITEM,
        payload: item
    });
};
