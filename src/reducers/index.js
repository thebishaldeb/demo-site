import { combineReducers } from "redux";
import events from "./eventsReducer";
import user from "./userReducer";
import members from "./membersReducer";
import gallerys from "./gallerysReducer";

const rootReducer = combineReducers({
  events,
  user,
  members,
  gallerys
});

export default rootReducer;
