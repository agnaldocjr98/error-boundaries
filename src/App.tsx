import { Stack } from "@mui/material";
import { User } from "./components/user";
import { Gases } from "./components/gases";
import { data } from "./data";
import { ErrorBoundary } from "./error-boundary";

function App() {
  const obj = {};
  return (
    <Stack spacing={2} sx={{ padding: (theme) => theme.spacing(2) }}>
      <User />
      <ErrorBoundary>
        <Gases gases={data} />
      </ErrorBoundary>
    </Stack>
  );
}

export default App;
