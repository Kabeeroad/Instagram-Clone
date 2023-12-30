import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const loginForm = () => {
  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <img src="/logo.png" height="95px" />
          <div>
            <TextField
              label="Email"
              type="email"
              margin="normal"
              fullWidth="true"
            />
          </div>
          <div>
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              fullWidth="true"
            />
          </div>
          <Button variant="contained">
            <Typography variant="h5">login</Typography>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default loginForm;
