import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Grid,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import genreMap from "../../utils/genreMap.js";

export default function MovieCard({ movie }) {
  const { title, poster_path, release_date, vote_average, genre_ids } = movie;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card
        sx={{
          maxWidth: 250,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" gutterBottom noWrap>
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Release: {release_date}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Genres:
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" mt={0.5}>
            {genre_ids
              ?.slice(0, 2)
              .map((id) =>
                genreMap[id] ? (
                  <Chip
                    key={id}
                    label={genreMap[id]}
                    size="small"
                    sx={{ mr: 0.5, mb: 0.5 }}
                  />
                ) : null
              )}
          </Stack>
        </CardContent>

        <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <StarIcon fontSize="small" sx={{ color: "#fbc02d" }} />
            <Typography variant="body2" color="text.secondary">
              {vote_average}
            </Typography>
          </Stack>

          <IconButton color="grey" aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
