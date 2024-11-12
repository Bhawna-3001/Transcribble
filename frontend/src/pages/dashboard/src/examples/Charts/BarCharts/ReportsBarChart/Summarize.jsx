import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import TranscriptionImage from "./summary3.jpeg";
import MDBox from "../../../../components/MDBox";;
import MDTypography from "../../../../components/MDTypography";
import { Link } from "react-router-dom";

function Summarize({ color="info", title, description="" }) {
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
        <Link to="/summary" style={{ textDecoration: "none" }}>
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

Summarize.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Summarize;
