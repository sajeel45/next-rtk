const { configureStore } = require("@reduxjs/toolkit");
import Usersreducer from "./slice"
import todosReducer from "./slice"
export const store = configureStore({
    reducer:{
        usersData:Usersreducer,
        todosData:todosReducer

    }
})