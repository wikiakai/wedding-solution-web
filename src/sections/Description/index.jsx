import { Container, Stack, Typography, styled, Button } from "@mui/material";
import React from "react";
import descImage from "../../assets/img/descImage.svg";

const CtaButton = styled(Button)({
  backgroundColor: "#B09D59",
  padding: "10px 38px",
  color: "#FFFFFF",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: "#383838",
    color: "#B09D59",
    boxShadow: "none",
  },
  width: "215px",
});
const Description = () => {
  return (
    <Container
      sx={{
        pb: "80px",
      }}
    >
      <Stack direction="row">
        <Stack spacing={5} sx={{ width: "100%" }}>
          <Typography variant="servicesCardTitle">
            We design & planing for your best moment
          </Typography>
          <Typography variant="descCaption" color={"#000"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <CtaButton size="small">Learn More</CtaButton>
        </Stack>
        <img src={descImage} alt="" width={"750px"} />
      </Stack>
    </Container>
  );
};

export default Description;
