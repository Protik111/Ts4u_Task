import { combineReducers } from "redux";
import alertReducer from "./reducer/Alert.ruducer";
import authReducer from "./reducer/Auth.reducer";

export default combineReducers({
    authReducer,
    alertReducer
})