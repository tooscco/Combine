import CounterSlice from "../Counter/CounterSlice";
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        counter: CounterSlice,
    }
});

export default store;