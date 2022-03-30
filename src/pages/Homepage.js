//Import MaterialUI Components
import { Typography, Card, Box, Link } from "@mui/material/";

import YoutubeVideo from "../components/Youtube";
const Homepage = () => {
  return (
    <Box justifyContent="center" sx={{ mb: 3 }}>
      <Typography variant="h2" align="center" sx={{ mt: 5 }}>
        Battery-free MakeCode
      </Typography>
      <Card sx={{ maxWidth: "70vw", display: "block", m: "auto", mt: 2 }}>
        <YoutubeVideo youtubeId="9pRQGuJyE80" />
      </Card>
      <Typography
        variant="body1"
        sx={{ width: "70vw", display: "block", m: "auto", my: 5 }}
        align="center"
      >
        Microsoft MakeCode is one of the most popular platforms for learning and
        teaching computer science. It is found in classrooms, as well as used by
        the “maker” movement. Our project, Battery-free MakeCode transforms
        standard Microsoft MakeCode programs to add additional system support,
        which allows these programs to run on harvested energy. It enables
        novice programmers to take their in-class/in-lab fun projects to the
        wild/in the real world without having to power them through batteries.
      </Typography>

      <Link
        href="https://dl.acm.org/doi/10.1145/3517236"
        target="_blank"
        rel="noreferrer"
      >
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Link to Paper at IMWUT
        </Typography>
      </Link>
    </Box>
  );
};

export default Homepage;
