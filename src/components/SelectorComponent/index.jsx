import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedGenre } from "../../slice/MovieSlice.js";
import genreMap from "../../utils/genreMap.js";

export default function SelectorComponent() {
  const dispatch = useDispatch();
  const { selectedGenre } = useSelector((state) => state.movies);

  const handleChange = (event) => {
    dispatch(setSelectedGenre(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel 
          id="genre-select-label" 
          sx={{ color: "white" }}
        >
          Genre
        </InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={selectedGenre}
          label="Genre"
          onChange={handleChange}
          sx={{
            color: "white",
            backgroundColor: "#1e1e1e", // dark background
            borderRadius: 1,
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#90caf9", // light blue on focus
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#90caf9",
            },
            "& .MuiSvgIcon-root": {
              color: "white",
            },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#2c2c2c", // dropdown menu bg
                color: "white",             // dropdown text
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: "#424242",
                  },
                },
              },
            },
          }}
        >
          <MenuItem value="">All</MenuItem>
          {Object.entries(genreMap).map(([id, name]) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
