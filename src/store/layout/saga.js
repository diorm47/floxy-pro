// @flow
import { all, call, fork, put, takeEvery } from "redux-saga/effects"

import {
  CHANGE_LAYOUT,
  CHANGE_LAYOUT_MODE,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_THEME_IMAGE,
  CHANGE_SIDEBAR_TYPE,
  CHANGE_TOPBAR_THEME,
  SHOW_RIGHT_SIDEBAR,
} from "./actionTypes"

import {
  changeSidebarType as changeSidebarTypeAction,
  changeTopbarTheme as changeTopbarThemeAction,
} from "./actions"

/**
 * Changes the body attribute
 */
function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value)
  return true
}

/**
 * Toggle the class on body
 * @param {*} cssClass
 */
function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass)
      break
    case "remove":
      if (document.body) document.body.classList.remove(cssClass)
      break
    default:
      if (document.body) document.body.classList.toggle(cssClass)
      break
  }

  return true
}

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changeLayout({ payload: layout }) {
  try {
    if (layout === "horizontal") {
      yield put(changeTopbarThemeAction("dark"))
      document.body.removeAttribute("data-sidebar")
      document.body.removeAttribute("data-sidebar-image")
      document.body.removeAttribute("data-sidebar-size")
    } else {
      yield put(changeTopbarThemeAction("light"))
    }
    yield call(changeBodyAttribute, "data-layout", layout)
  } catch (error) {}
}

/**
 * Changes the layout mode
 * @param {*} param0
 */
export function* changeLayoutMode({ payload: mode }) {
  try {
    yield call(changeBodyAttribute, "data-layout-mode", mode)
  } catch (error) {
    // console.log(error);
  }
}

/**
 * Changes the layout width
 * @param {*} param0
 */
function* changeLayoutWidth({ payload: width }) {
  try {
    if (width === "boxed") {
      yield put(changeSidebarTypeAction("icon"))
      yield call(changeBodyAttribute, "data-layout-size", width)
      yield call(changeBodyAttribute, "data-layout-scrollable", false)
    } else if (width === "scrollable") {
      yield put(changeSidebarTypeAction("default"))
      yield call(changeBodyAttribute, "data-layout-scrollable", true)
    } else {
      yield put(changeSidebarTypeAction("default"))
      yield call(changeBodyAttribute, "data-layout-size", width)
      yield call(changeBodyAttribute, "data-layout-scrollable", false)
    }
  } catch (error) {}
}

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
function* changeLeftSidebarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-sidebar", theme)
  } catch (error) {}
}

/**
 * Changes the left sidebar theme Image
 * @param {*} param0
 */
function* changeLeftSidebarThemeImage({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-sidebar-image", theme)
  } catch (error) {}
}

/**
 * Changes the topbar theme
 * @param {*} param0
 */
function* changeTopbarTheme({ payload: theme }) {
  try {
    yield call(changeBodyAttribute, "data-topbar", theme)
  } catch (error) {}
}

/**
 * Changes the left sidebar type
 * @param {*} param0
 */
function* changeLeftSidebarType({
  payload: { sidebarType, isMobile },
}) {
  try {
    switch (sidebarType) {
      case "compact":
        yield call(changeBodyAttribute, "data-sidebar-size", "small")
        yield call(manageBodyClass, "sidebar-enable", "remove")
        yield call(manageBodyClass, "vertical-collpsed", "remove")
        break
      case "icon":
        yield call(changeBodyAttribute, "data-sidebar-size", "")
        yield call(changeBodyAttribute, "data-keep-enlarged", "true")
        yield call(manageBodyClass, "vertical-collpsed", "add")
        break
      case "condensed":
        yield call(manageBodyClass, "sidebar-enable", "add")
        if (window.screen.width >= 992) {
          yield call(manageBodyClass, "vertical-collpsed", "remove")
          yield call(manageBodyClass, "sidebar-enable", "remove")
          yield call(manageBodyClass, "vertical-collpsed", "add")
          yield call(manageBodyClass, "sidebar-enable", "add")
        } else {
          yield call(manageBodyClass, "sidebar-enable", "add")
          yield call(manageBodyClass, "vertical-collpsed", "add")
        }
        break
      default:
        yield call(changeBodyAttribute, "data-sidebar-size", "")
        yield call(manageBodyClass, "sidebar-enable", "remove")
        if (!isMobile)
          yield call(manageBodyClass, "vertical-collpsed", "remove")
        break
    }
  } catch (error) {}
}

/**
 * Show the rightsidebar
 */
function* showRightSidebar() {
  try {
    yield call(manageBodyClass, "right-bar-enabled", "add")
  } catch (error) {}
}

/**
 * Watchers
 */
export function* watchChangeLayoutType() {
  yield takeEvery(CHANGE_LAYOUT, changeLayout)
}

export function* watchChangeLayoutWidth() {
  yield takeEvery(CHANGE_LAYOUT_WIDTH, changeLayoutWidth)
}

export function* watchChangeLeftSidebarTheme() {
  yield takeEvery(CHANGE_SIDEBAR_THEME, changeLeftSidebarTheme)
}

export function* watchChangeLeftSidebarThemeImage() {
  yield takeEvery(
    CHANGE_SIDEBAR_THEME_IMAGE,
    changeLeftSidebarThemeImage
  )
}

export function* watchChangeLeftSidebarType() {
  yield takeEvery(CHANGE_SIDEBAR_TYPE, changeLeftSidebarType)
}

export function* watchChangeTopbarTheme() {
  yield takeEvery(CHANGE_TOPBAR_THEME, changeTopbarTheme)
}

export function* watchShowRightSidebar() {
  yield takeEvery(SHOW_RIGHT_SIDEBAR, showRightSidebar)
}

export function* watchSChangeLayoutMode() {
  yield takeEvery(CHANGE_LAYOUT_MODE, changeLayoutMode)
}

function* LayoutSaga() {
  yield all([
    fork(watchSChangeLayoutMode),
    fork(watchChangeLayoutType),
    fork(watchChangeLayoutWidth),
    fork(watchChangeLeftSidebarTheme),
    fork(watchChangeLeftSidebarThemeImage),
    fork(watchChangeLeftSidebarType),
    fork(watchShowRightSidebar),
    fork(watchChangeTopbarTheme),
  ])
}

export default LayoutSaga
