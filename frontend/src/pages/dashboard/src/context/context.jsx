import React, { createContext, useContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";

// Material Dashboard 2 React main context
const MaterialUI = createContext();
MaterialUI.displayName = "MaterialUIContext";

// Material Dashboard 2 React reducer
function reducer(state, action) {
  switch (action.type) {
    case "MINI_SIDENAV":
      return { ...state, miniSidenav: action.value };
    case "TRANSPARENT_SIDENAV":
      return { ...state, transparentSidenav: action.value };
    case "WHITE_SIDENAV":
      return { ...state, whiteSidenav: action.value };
    case "SIDENAV_COLOR":
      return { ...state, sidenavColor: action.value };
    case "TRANSPARENT_NAVBAR":
      return { ...state, transparentNavbar: action.value };
    case "FIXED_NAVBAR":
      return { ...state, fixedNavbar: action.value };
    case "OPEN_CONFIGURATOR":
      return { ...state, openConfigurator: action.value };
    case "DIRECTION":
      return { ...state, direction: action.value };
    case "LAYOUT":
      return { ...state, layout: action.value };
    case "DARKMODE":
      return { ...state, darkMode: action.value };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Material Dashboard 2 React context provider
export function MaterialUIControllerProvider({ children }) {
  const initialState = {
    miniSidenav: false,
    transparentSidenav: false,
    whiteSidenav: false,
    sidenavColor: "info",
    transparentNavbar: true,
    fixedNavbar: true,
    openConfigurator: false,
    direction: "ltr",
    layout: "dashboard",
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

export function useMaterialUIController() {
  const context = useContext(MaterialUI);
  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }
  return context;
}

MaterialUIControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Context module functions
export const setMiniSidenav = (dispatch, value) => dispatch({ type: "MINI_SIDENAV", value });
export const setTransparentSidenav = (dispatch, value) =>
  dispatch({ type: "TRANSPARENT_SIDENAV", value });
export const setWhiteSidenav = (dispatch, value) => dispatch({ type: "WHITE_SIDENAV", value });
export const setSidenavColor = (dispatch, value) => dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (dispatch, value) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (dispatch, value) => dispatch({ type: "FIXED_NAVBAR", value });
export const setOpenConfigurator = (dispatch, value) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });
export const setDirection = (dispatch, value) => dispatch({ type: "DIRECTION", value });
export const setLayout = (dispatch, value) => dispatch({ type: "LAYOUT", value });
export const setDarkMode = (dispatch, value) => dispatch({ type: "DARKMODE", value });
