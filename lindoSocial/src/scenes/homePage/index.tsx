import { Box } from "@mui/material";
import { ReactElement } from "react";
import Navbar from "../navbar";

const HomePage = (): ReactElement => {
  return (
    <Box>
      <Navbar/>
      <div>HomePage</div>
    </Box>
  );
};

export default HomePage;
