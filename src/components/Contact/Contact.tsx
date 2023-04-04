import React from "react";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h3" sx={{ color: "#A19725" }}>
        Contact Us
      </Typography>
      <Box maxWidth={30} paddingX={65}>
        <hr />
      </Box>
      <Typography variant="h5" paddingTop={10}>
        Better yet, see us in person!
      </Typography>
      <Typography paddingTop={3} sx={{ opacity: "70%" }}>
        We love our customers, so feel free to contact us 24 hours.
      </Typography>
      <Typography paddingTop={2} variant="h5">
        BeFoodly
      </Typography>
      <Typography paddingY={2} sx={{ opacity: "70%" }}>
        GENESIS APARTMENT, the Main Road, Ibbaluru, Bellandur, Bengaluru,
        Karnataka, India
      </Typography>
      {/* footer */}
      <Box height={"100px"} sx={{ background: "black" }}>
        <Typography padding={5} sx={{ color: "white" }}>
          Copyright © 2023 BeFoodly - All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
