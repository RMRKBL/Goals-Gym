import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200p" height="40px" x />
        <Typography variant="h5" pb="40px" mt="10px">
          Don't stop when your tired, stop when your done! ~ David Goggins
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
