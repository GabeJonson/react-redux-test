import { combineReducers } from "redux";
import init from "./initCalculation";
import create from "./createCalculation";
import deleteItem from "./deleteCalculation";

export default combineReducers({
    init,
    create,
    deleteItem
});
