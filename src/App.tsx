// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { connect, useSelector } from "react-redux"
import fakeBackend from "/src/helpers/AuthType/fakeBackend"

import { Route, Routes } from "react-router-dom"

// Import scss
import "./assets/scss/theme.scss"
import HorizontalLayout from "./components/HorizontalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"

// Import Routes all
import { authProtectedRoutes, publicRoutes } from "./routes"

// Import all middleware
import Authmiddleware from "./routes/route"

// Activating fake backend
fakeBackend()

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APP_APIKEY,
//   authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
//   databaseURL: import.meta.env.VITE_APP_DATABASEURL,
//   projectId: import.meta.env.VITE_APP_PROJECTID,
//   storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APP_APPID,
//   measurementId: import.meta.env.VITE_APP_MEASUREMENTID,
// };

// init firebase backend
// initFirebaseBackend(firebaseConfig)

const App = (props: any) => {
  const { layoutType } = useSelector((state: any) => ({
    layoutType: state.Layout.layoutType,
  }))

  useEffect(() => {
    if (!localStorage.getItem("intervalFormat")) {
      localStorage.setItem("intervalFormat", "seconds")
    }
  }, [])

  function getLayout(layoutType: any) {
    let layoutCls = VerticalLayout
    switch (layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout
        break
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  }

  const Layout = getLayout(layoutType)

  return (
    <>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={<NonAuthLayout>{route.component}</NonAuthLayout>}
            key={idx}
            exact={true}
          />
        ))}

        {authProtectedRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <Authmiddleware>
                <Layout>{route.component}</Layout>
              </Authmiddleware>
            }
            key={idx}
            exact={true}
          />
        ))}
      </Routes>
    </>
  )
}

App.propTypes = {
  layout: PropTypes.any,
}

const mapStateToProps = (state: any) => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
