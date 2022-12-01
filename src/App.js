import { useState } from "react";
import { Stack, createTheme, ThemeProvider, Box } from "@mui/material";
import { NavBar, SideBar, RightBar, Feed, AddButton } from "./components";

function App() {
  //dark mode handling
  const [colorMode, setColorMode] = useState("dark");
  const colorTheme = createTheme({
    palette: {
      mode: colorMode,
    },
  });
  return (
    <ThemeProvider theme={colorTheme}>
      <Box
        sx={{ transition: ".1s" }}
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <NavBar colorMode={colorMode} setColorMode={setColorMode} />
        <Stack
          direction="row"
          spacing={{ xs: 0, md: 2 }}
          justifyContent="space-between"
        >
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
        <AddButton />
      </Box>
    </ThemeProvider>
  );
}

export default App;
