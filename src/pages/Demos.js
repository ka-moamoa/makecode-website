//Import MaterialUI Components
import { Typography, Box } from "@mui/material";

import YoutubeVideo from "../components/Youtube";
import Terrarium from "../resources/demos/terrarium.png";
import StepCounter from "../resources/demos/step.png";
const Demos = () => {
  return (
    <Box>
      <Typography variant="h2" align="center" sx={{ mt: 5 }}>
        Demos{" "}
      </Typography>
      <Box sx={{ maxWidth: "80vw", display: "block", m: "auto", mt: 2 }}>
        <Typography variant="h4" textAlign="center">
          Smart Terrarium
        </Typography>
        <YoutubeVideo youtubeId="J5xnh9Pt5t0" />
        <img
          src={Terrarium}
          style={{ width: "100%", marginTop: "14px" }}
          alt="Smart Terrarium Code"
        />
      </Box>

      <Box sx={{ maxWidth: "80vw", display: "block", m: "auto", mt: 2 }}>
        <Typography variant="h4" textAlign="center">
          Step Counter
        </Typography>
        <YoutubeVideo youtubeId="rEv17xDkQRI" />
        <img
          src={StepCounter}
          style={{ width: "100%", marginTop: "14px" }}
          alt="Smart Terrarium Code"
        />
      </Box>

      <Box sx={{ maxWidth: "80vw", display: "block", m: "auto", mt: 2 }}>
        <Typography variant="h4" textAlign="center">
          DC Motor
        </Typography>
        <YoutubeVideo youtubeId="BljtCiyK36s" />
      </Box>
    </Box>
  );
};

export default Demos;
