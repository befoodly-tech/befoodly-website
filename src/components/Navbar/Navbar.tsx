import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Container } from "@mui/system";

const styles = {
  h4: {
    color: "#dcdcdc",
  },
};

const Navbar = () => {
  return (
    <AppBar
      style={{ backgroundColor: "black", boxShadow: "none", opacity: "70%" }}
    >
      <Container>
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1, mt: 2 }}>
            Befoodly
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Button sx={{ color: "white" }}>Home</Button>
            <Button sx={{ color: "white" }}>About</Button>
            <Button sx={{ color: "white" }}>Blog</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
