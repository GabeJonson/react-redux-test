import { CREATE_ITEM } from "../actions/action_types";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_ITEM:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
