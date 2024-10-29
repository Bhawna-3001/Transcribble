// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import QuizGeneration from "examples/Charts/LineCharts/ReportsLineChart/QuizGeneration";
import Summarize from "examples/Charts/BarCharts/ReportsBarChart/Summarize";
import Translate from "examples/Charts/BarCharts/ReportsBarChart/Translate";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
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
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
