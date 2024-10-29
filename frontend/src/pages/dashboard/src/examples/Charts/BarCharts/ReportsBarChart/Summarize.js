import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import TranscriptionImage from "./summary3.jpeg";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Summarize({ color, title, description, date }) {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        <MDBox
          variant="gradient"
          bgColor={color}
          borderRadius="lg"
          coloredShadow={color}
          py={2}
          pr={0.5}
          mt={-5}
          height="12.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img
            src={TranscriptionImage}
            alt="Summarize"
            style={{
              width: "120%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "inherit",
            }}
          />
        </MDBox>
        <MDBox pt={3} pb={1} px={1}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ReportsBarChart
Summarize.defaultProps = {
  color: "info",
  description: "",
};

// Typechecking props for the ReportsBarChart
Summarize.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  date: PropTypes.string.isRequired,
};

export default Summarize;
