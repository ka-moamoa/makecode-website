//Import MaterialUI Components
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import YoutubeVideo from "../components/Youtube";
const Homepage = () => {
  return (
    <>
      <Typography variant="h2" align="center" sx={{ mt: 5 }}>
        MakeCode Iceberg
      </Typography>
      <Typography variant="h4" align="center" sx={{ mx: 1 }}>
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
    </>
  );
};

export default Homepage;
