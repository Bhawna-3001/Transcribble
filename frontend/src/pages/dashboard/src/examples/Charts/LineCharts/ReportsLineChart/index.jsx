import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Avatar from "./sign.jpeg";
import MDBox from "../../../../components/MDBox";
import MDTypography from "../../../../components/MDTypography";
import { Link } from "react-router-dom";

function ReportsLineChart({ color="info", title, description="" }) {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox padding="1rem">
        <MDBox
          variant="gradient"
          bgColor={color}
          borderRadius="inherit"
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
            src={Avatar}
            alt="Sign Language Avatar"
            style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "lg" }}
          />
        </MDBox>
        <MDBox pt={3} pb={1} px={1}>
        <Link to="http://localhost:8000" style={{ textDecoration: "none" }}>
          <MDTypography variant="h6" textTransform="capitalize">
            {title}
          </MDTypography>
        </Link>
          <MDTypography component="div" variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
          <Divider />
        </MDBox>
      </MDBox>
    </Card>
  );
}

ReportsLineChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default ReportsLineChart;
