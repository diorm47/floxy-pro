import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "react-tooltip/dist/react-tooltip.css"
import App from "./App"
import "./i18n"
import * as serviceWorker from "./serviceWorker"
import store from "./store"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      {/*BrowserRouter changed to hashrouter*/}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
)

serviceWorker.unregister()
