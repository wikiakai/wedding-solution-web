import { Stack } from "@mui/material";
import React from "react";

import gallery1 from "../../assets/img/gallery1.svg";
import gallery2 from "../../assets/img/gallery2.svg";
import gallery3 from "../../assets/img/gallery3.svg";
import gallery4 from "../../assets/img/gallery4.svg";
const Gallery = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        px: "10px",
        pb: "80px",
      }}
    >
      <img src={gallery1} alt="gallery1" width={"100%"} />
      <img src={gallery2} alt="gallery2" width={"100%"} />
      <img src={gallery3} alt="gallery3" width={"100%"} />
      <img src={gallery4} alt="gallery4" width={"100%"} />
    </Stack>
  );
};

export default Gallery;
