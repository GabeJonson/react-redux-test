import { DELETE } from "../actions/action_types";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case DELETE:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}
