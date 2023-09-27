import React from "react";
import im from "../images/10.jpeg";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        <b>“Hello to You! You will find food, harmony, and laughter here.”
        “Need food and a good place to eat? Welcome to our humble place where you can eat good food peacefully.”
        “We welcome your appetite. Let our food satisfy your stomach.”You will get all kind of food here..The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style cuisines just from a wide range of regions. We are known for our generous portions of Soups,Biriyani and Thalis.We always try to ensure best quality and hygiene of the food.
        We picked well trained chefs for every single dish. </b>
        </p>
        <br />
        <p>
        <b>Our Resturant is famous for veg food.All kind of Thalis,salads and Biriyanis are avaliable.Recently we started serving Mocktails,Icecreams and cupcakes too.Both online and offline orders are available and accepted.Timings are from 11am to 10pm.
        For more details do visit our website <mark>www.myrestaurant.com</mark>.</b>
        </p><br />
        <img src={im} height={600} width={800}/><br />
        <p><b>Our intimate seating arrangement ensures each visit feels like a personalized journey, while the soft hum of conversation adds to the restaurant's convivial atmosphere. The aroma of carefully crafted dishes, prepared with locally sourced ingredients, fills the air, promising a culinary adventure that engages all your senses.Join us to savor not just a meal, but an immersive experience that celebrates the art of food, the magic of ambiance, and the joy of shared moments."</b></p>
      </Box>
    </Layout>
  );
};

export default About;
