import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import rootReducer from "./reducers";

// export default createStore(
//   rootReducer,
//   applyMiddleware(promiseMiddleware, logger)
// );

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger)
);

let persistor = persistStore(store);

export default { store, persistor };
