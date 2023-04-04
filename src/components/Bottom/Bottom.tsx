import React from "react";
import { Box, Container } from "@mui/system";
import { Typography } from "@mui/material";

const Bottom = () => {
  return (
    <Box
      sx={{ background: "#F3E32B", paddingTop: "5px" }}
      marginTop={5}
      height={"800"}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box paddingLeft={15} paddingY={20}>
            <Typography variant="h4">01/07/2023</Typography>
          </Box>
          <Box paddingX={5} paddingY={10}>
            <Typography textAlign="center" variant="h2">
              Event
            </Typography>
            <hr />
            <Box>
              <Typography variant="h5" paddingY={2}>
                We Are Launching In Bangalore!
              </Typography>
              <Typography sx={{ opacity: "70%" }}>
                Our mobile application will launch by first week of the July,
                2023 and initially we will start providing service on Suncity
                lane, Bellandur....
              </Typography>
            </Box>
          </Box>
          <Box paddingRight={15} paddingY={20}>
            <Typography variant="h5">11am&#8209;10pm</Typography>
            <Typography>Bellandur</Typography>
          </Box>
        </Box>
        <hr />
      </Container>
    </Box>
  );
};

export default Bottom;
