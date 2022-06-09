import { Stack, Avatar, Paper, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
export const User = () => {
  return (
    <Paper
      elevation={0}
      sx={{ backgroundColor: grey[100], padding: (theme) => theme.spacing(2) }}
    >
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: blue[700] }}>A</Avatar>
        <Stack>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Agnaldo Júnior
          </Typography>

          <Typography variant="caption">Dev e estudante de química</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
