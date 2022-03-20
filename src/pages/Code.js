//Import MaterialUI Components
import { Typography, Box } from "@mui/material";

import First from "../resources/tutorial/1.png";
import Second from "../resources/tutorial/2.png";
import Third from "../resources/tutorial/3.png";
import Fourth from "../resources/tutorial/4.png";
import Fifth from "../resources/tutorial/5.png";
import Sixth from "../resources/tutorial/6.png";
import Seventh from "../resources/tutorial/7.png";

const Code = () => {
  return (
    <Box>
      <Typography variant="h2" align="center" sx={{ mt: 5 }}>
        Getting Started
      </Typography>
      <Typography variant="h4" textAlign="center">
        Using our Server (Microbit)
      </Typography>
      <Box
        sx={{ width: "80%", m: "auto", d: "block" }}
        style={{ fontSize: "1.2em" }}
      >
        <ol>
          {" "}
          <li style={{ mt: 2 }}>
            {" "}
            Go to our{" "}
            <a
              href="https://microbit-ic-jyd3j.ondigitalocean.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              MakeCode-Iceberg Server{" "}
            </a>
          </li>
          <li style={{ marginTop: "8px" }}>
            {" "}
            Click "import" and then "import url"
          </li>
          <img
            src={First}
            alt="clicking import on MakeCode"
            style={{
              width: "60vw",
              display: "block",
              margin: "auto",
              marginTop: "8px",
            }}
          />
          <img
            src={Second}
            alt="clicking import url on MakeCode"
            style={{
              width: "60vw",
              display: "block",
              margin: "auto",
              marginTop: "8px",
            }}
          />
          <li style={{ marginTop: "8px" }}>
            {" "}
            Paste this github link:
            https://github.com/chrispkraemer/fram-driver-iceberg
          </li>
          <img
            src={Third}
            alt="pasting github link"
            style={{
              width: "60vw",
              display: "block",
              margin: "auto",
              marginTop: "8px",
            }}
          />
          <li style={{ marginTop: "8px" }}>Start a new project</li>
          <li style={{ marginTop: "8px" }}>
            Add the fram driver as an extension by clicking on "Advanced" and
            then "Extensions"
          </li>
          <img
            src={Fourth}
            alt="adding fram driver"
            style={{
              width: "60vw",
              display: "block",
              margin: "auto",
              marginTop: "8px",
            }}
          />
          <li style={{ marginTop: "8px" }}>
            Click on the FRAM Driver local extension to add it to your MakeCode
            project
          </li>{" "}
          <img
            src={Fifth}
            alt="clicking on fram driver local extension"
            style={{
              width: "60vw",
              display: "block",
              margin: "auto",
              marginTop: "8px",
            }}
          />
          <li style={{ marginTop: "8px" }}>
            Add fram.init to the top of your program
          </li>
          <img
            src={Sixth}
            alt="adding fram.init to top of program"
            style={{
              width: "60vw",
              display: "block",
              margin: "auto",
              marginTop: "8px",
            }}
          />
          <img
            src={Seventh}
            alt="adding fram.init to top of program in blocks"
            style={{
              width: "60vw",
              display: "block",
              margin: "auto",
              marginTop: "8px",
            }}
          />
          <li style={{ marginTop: "8px" }}>Begin Coding!</li>
        </ol>
      </Box>
    </Box>
  );
};

export default Code;
