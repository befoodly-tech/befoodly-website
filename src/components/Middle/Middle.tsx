import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import KitchenChef from "../../assets/images/kitchen-chef.jpg";
import Vegetable from "../../assets/images/vegetables.jpg";
import Cook from "../../assets/images/cook.jpg";

import { Box, Container } from "@mui/system";

const Middle = () => {
  return (
    <Grid container paddingTop={4} paddingX={15} spacing={2}>
      <Grid item xs={6}>
        <img
          src={KitchenChef}
          style={{
            width: "40vw",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="h5"
          textAlign={"center"}
          paddingTop={10}
          paddingBottom={2}
        >
          Looking For Homemade Food?
        </Typography>
        <Typography textAlign={"center"} paddingX={10}>
          Explore our food menu, all the recipes are made by our home-chefs
          inside their kitchen with the homely flavour and ingredients.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="h5"
          textAlign={"center"}
          paddingTop={10}
          paddingBottom={2}
        >
          Fear Of Quality And Hygiene?
        </Typography>
        <Typography textAlign={"center"} paddingX={10}>
          All the kitchens are verified as per govt. regulations, and as per our
          terms & conditions. Every home-chef cleans the kitchen before cooking
          any meal, we trust into using instamart to get fresh veggies and
          fruits.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img
          src={Vegetable}
          style={{
            width: "40vw",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <img
          src={Cook}
          style={{
            width: "40vw",
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Typography
          variant="h5"
          textAlign={"center"}
          paddingTop={10}
          paddingBottom={2}
        >
          Not a Great Cook?
        </Typography>
        <Typography textAlign={"center"} paddingX={10}>
          It's okay, we can connect you with very talented and experienced cook.
          The cook will come to your home and cook a delicious meal for you.
          Must try experience.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Middle;
