import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import MDBox from "./src/components/MDBox";
import Sidenav from "./src/examples/Sidenav/index";
import Configurator from "./src/examples/Configurator/index";
import ReportsBarChart from "./src/examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "./src/examples/Charts/LineCharts/ReportsLineChart";
import QuizGeneration from "./src/examples/Charts/LineCharts/ReportsLineChart/QuizGeneration";
import Summarize from "./src/examples/Charts/BarCharts/ReportsBarChart/Summarize";
import Translate from "./src/examples/Charts/BarCharts/ReportsBarChart/Translate";
import theme from "./src/assets/theme";
import themeDark from "./src/assets/theme-dark";
import routes from "./routes";
import { useMaterialUIController } from "./src/context/context";
import brandWhite from "./src/assets/images/logo-ct.png";
import brandDark from "./src/assets/images/logo-ct-dark.png";

export default function Dash() {
  const [controller] = useMaterialUIController();
  const {
    layout,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  
 
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <div style={{ display: "flex" }}>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Transcribble"
            routes={routes}
            style={{ width: sidebarWidth, position: "fixed", height: "100vh", overflow: "auto" }}
          />
          <div style={{ marginLeft: sidebarWidth, width: "100%"}}>
            {DashboardContent}
          </div>
        </div>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}
