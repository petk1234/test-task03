import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./pokemons/pokemonsReducers";
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
});
export default store;
