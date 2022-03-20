//Import MaterialUI Components
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
const Homepage = () => {
  return (
    <>
      <Typography variant="h2" align="center" sx={{ mt: 5 }}>
        MakeCode Iceberg
      </Typography>
      <Typography variant="h4" align="center">
        Battery-free MakeCode
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 5 }}>
        <Card sx={{ maxWidth: "70vw" }}>
          <CardMedia
            component="iframe"
            alt="MakeCode Iceberg Overview Video"
            src="https://www.youtube.com/embed/9pRQGuJyE80"
            sx={{
              height: "400px",
              width: "600px",
            }}
          />
        </Card>
      </Grid>
      <Typography variant="body1" sx={{ margin: 5 }} align="center">
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
