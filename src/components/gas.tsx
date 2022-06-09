import { Box, Paper, Stack, Typography } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import { IGas } from "./gases";

export const Gas = ({ initials, name, type }: IGas) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "8%",
        backgroundColor: grey[100],
        padding: 2,
        position: "relative",
      }}
    >
      <Stack display="flex" justifyContent="center">
        <Typography variant="h3">{initials}</Typography>
        <Typography variant="body2">{name}</Typography>
      </Stack>
      <Box sx={{ position: "absolute", right: 5, top: 0, padding: 0.5 }}>
        <Typography variant="caption" sx={{ color: blue[500] }}>
          {type}
        </Typography>
      </Box>
    </Paper>
  );
};
