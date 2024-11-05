// // import React from "react";
// // import "./dashboard.css";
// // import { CourseData } from "../../context/CourseContext.jsx";
// // // import CourseCard from "../../components/coursecard/courseCard.jsx";

// // const Dashbord = () => {
// //   const { mycourse } = CourseData();
// //   return (
// //     <div className="student-dashboard">
// //       <h2>All Enrolled Courses</h2>
// //       <div className="dashboard-content">
// //         {mycourse && mycourse.length > 0 ? (
// //           mycourse.map((e) => <CourseCard key={e._id} course={e} />)
// //         ) : (
// //           <p>No course Enrolled Yet</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashbord;

// /**
// =========================================================


// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// import { useState, useEffect, useMemo } from "react";

// // react-router components
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// // @mui material components
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Icon from "@mui/material/Icon";

// // Material Dashboard 2 React components
// import MDBox from "./src/components/MDBox";

// // Material Dashboard 2 React example components
// import Sidenav from "./src/examples/Sidenav/index";
// import Configurator from "./src/examples/Configurator/index";

// // Material Dashboard 2 React themes
// import theme from "./src/assets/theme";
// import themeRTL from "./src/assets/theme/theme-rtl";

// // Material Dashboard 2 React Dark Mode themes
// import themeDark from "./src/assets/theme-dark";
// import themeDarkRTL from "./src/assets/theme-dark/theme-rtl";

// // RTL plugins
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

// // Material Dashboard 2 React routes
// import routes from "./routes";

// // Material Dashboard 2 React contexts
// import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "./src/context/context";

// // Images
// import brandWhite from "./src/assets/images/logo-ct.png";
// import brandDark from "./src/assets/images/logo-ct-dark.png";

// export default function Dash() {
//   const [controller, dispatch] = useMaterialUIController();
//   const {
//     miniSidenav,
//     direction,
//     layout,
//     openConfigurator,
//     sidenavColor,
//     transparentSidenav,
//     whiteSidenav,
//     darkMode,
//   } = controller;
//   const [onMouseEnter, setOnMouseEnter] = useState(false);
//   const [rtlCache, setRtlCache] = useState(null);
//   const { pathname } = useLocation();

//   // Cache for the rtl
//   useMemo(() => {
//     const cacheRtl = createCache({
//       key: "rtl",
//       stylisPlugins: [rtlPlugin],
//     });

//     setRtlCache(cacheRtl);
//   }, []);

//   // Open sidenav when mouse enter on mini sidenav
//   const handleOnMouseEnter = () => {
//     if (miniSidenav && !onMouseEnter) {
//       setMiniSidenav(dispatch, false);
//       setOnMouseEnter(true);
//     }
//   };

//   // Close sidenav when mouse leave mini sidenav
//   const handleOnMouseLeave = () => {
//     if (onMouseEnter) {
//       setMiniSidenav(dispatch, true);
//       setOnMouseEnter(false);
//     }
//   };

//   // Change the openConfigurator state
//   const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

//   // Setting the dir attribute for the body element
//   useEffect(() => {
//     document.body.setAttribute("dir", direction);
//   }, [direction]);

//   // Setting page scroll to 0 when changing the route
//   useEffect(() => {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//   }, [pathname]);

//   const getRoutes = (allRoutes) =>
//     allRoutes.map((route) => {
//       if (route.collapse) {
//         return getRoutes(route.collapse);
//       }

//       if (route.route) {
//         return <Route exact path={route.route} element={route.component} key={route.key} />;
//       }

//       return null;
//     });

//   const configsButton = (
//     <MDBox
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       width="3.25rem"
//       height="3.25rem"
//       bgColor="white"
//       shadow="sm"
//       borderRadius="50%"
//       position="fixed"
//       right="2rem"
//       bottom="2rem"
//       zIndex={99}
//       color="dark"
//       sx={{ cursor: "pointer" }}
//       onClick={handleConfiguratorOpen}
//     >
//       <Icon fontSize="small" color="inherit">
//         settings
//       </Icon>
//     </MDBox>
//   );

//   return direction === "rtl" ? (
//     <CacheProvider value={rtlCache}>
//       <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
//         <CssBaseline />
//         {layout === "dashboard" && (
//           <div>
//             <Sidenav
//               color={sidenavColor}
//               brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
//               brandName="Transcribble"
//               routes={routes}
//               onMouseEnter={handleOnMouseEnter}
//               onMouseLeave={handleOnMouseLeave}
//             />
//             <Configurator />
//             {configsButton}
//           </div>
//         )}
//         {layout === "vr" && <Configurator />}
//         <Routes>
//           {getRoutes(routes)}
//           <Route path="*" element={<Navigate to="/dashboard/*" />} />
//         </Routes>
//       </ThemeProvider>
//     </CacheProvider>
//   ) : (
//     <ThemeProvider theme={darkMode ? themeDark : theme}>
//       <CssBaseline />
//       {layout === "dashboard" && (
//         <div>
//           <Sidenav
//             color={sidenavColor}
//             brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
//             brandName="Transcribble"
//             routes={routes}
//             onMouseEnter={handleOnMouseEnter}
//             onMouseLeave={handleOnMouseLeave}
//           />
//           <Configurator />
//           {configsButton}
//         </div>
//       )}
//       {layout === "vr" && <Configurator />}
//       <Routes>
//         {getRoutes(routes)}
//         <Route path="*" element={<Navigate to="/dashboard/*" />} />
//       </Routes>
//     </ThemeProvider>
//   );
// }


import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "./src/components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "./src/examples/Sidenav/index";
import Configurator from "./src/examples/Configurator/index";
import DashboardNavbar from "./src/examples/Navbars/DashboardNavbar/index";
import Footer from "./src/examples/Footer/index";
import ReportsBarChart from "./src/examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "./src/examples/Charts/LineCharts/ReportsLineChart";
import QuizGeneration from "./src/examples/Charts/LineCharts/ReportsLineChart/QuizGeneration";
import Summarize from "./src/examples/Charts/BarCharts/ReportsBarChart/Summarize";
import Translate from "./src/examples/Charts/BarCharts/ReportsBarChart/Translate";

// Material Dashboard 2 React themes
import theme from "./src/assets/theme";
import themeRTL from "./src/assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "./src/assets/theme-dark";
import themeDarkRTL from "./src/assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "./routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "./src/context/context";

// Images
import brandWhite from "./src/assets/images/logo-ct.png";
import brandDark from "./src/assets/images/logo-ct-dark.png";

export default function Dash() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  const DashboardContent = (
    <MDBox py={3}>
      <MDBox mt={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <MDBox mb={3}>
              <ReportsBarChart
                color="dark"
                title="Transcript"
                description="Convert your Video to text"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <MDBox mb={3}>
              <ReportsLineChart
                color="dark"
                title="Sign Language Translate"
                description="Your assistant to sign language"
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <MDBox mb={3}>
              <QuizGeneration
                color="dark"
                title="Generate Quiz"
                description="Generate quizzes to enhance learning "
              />
            </MDBox>
          </Grid>
          <Grid container item xs={12} justifyContent="center" spacing={3}>
            <Grid item xs={12} md={4}>
              <MDBox mb={3}>
                <Summarize color="dark" title="Summarize" description="Get Quick Summaries" />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={4}>
              <MDBox mb={3}>
                <Translate
                  color="dark"
                  title="Translate"
                  description="Translate your content in just 1 click"
                />
              </MDBox>
            </Grid>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );

  const sidebarWidth = "300px";

  return direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <div style={{ display: "flex" }}>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Transcribble"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              style={{ width: sidebarWidth, position: "fixed", height: "100vh", overflow: "auto" }}
            />
            <div style={{ marginLeft: sidebarWidth, width: "100%" }}>
              <DashboardNavbar />
              {DashboardContent}
              <Configurator />
              {configsButton}
              <Footer />
            </div>
          </div>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard/*" />} />
        </Routes>
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <div style={{ display: "flex" }}>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Transcribble"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            style={{ width: sidebarWidth, position: "fixed", height: "100vh", overflow: "auto" }}
          />
          <div style={{ marginLeft: sidebarWidth, width: "100%"}}>
            <DashboardNavbar />
            {DashboardContent}
            {configsButton}
            <Footer />
          </div>
        </div>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard/*" />} />
      </Routes>
    </ThemeProvider>
  );
}
