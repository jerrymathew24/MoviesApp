import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1c1c1c",
        color: "white",
        py: 3,
        mt: 5,
        textAlign: "center",
      }}
    >
        <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
        © {new Date().getFullYear()} MovieApp. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Built with ❤️ using{" "}
        <Link
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#61dafb", textDecoration: "none" }}
        >
          React
        </Link>
        ,{" "}
        <Link
          href="https://redux.js.org"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#764abc", textDecoration: "none" }}
        >
          Redux
        </Link>
        ,{" "}
        <Link
          href="https://mui.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#00b0ff", textDecoration: "none" }}
        >
          Material UI
        </Link>
        , and{" "}
        <Link
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#01b4e4", textDecoration: "none" }}
        >
          TMDb API
        </Link>
        - by Jerry Mathew.
      </Typography>

      

    </Box>
  );
};

export default Footer;
