import { useEffect, useState } from 'react';
import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
// Component
import PositionSizeCalculator from './components/positionSizeCalculator';
import BasicModal from "./components/modal"
// Theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
// Helpers
import { isPersistedState } from "./helpers"


function App() {

  const [darkMode, setDarkMode] = useState(true);

  const localTheme = isPersistedState("theme")

  useEffect(() => {
    setDarkMode(!localTheme)
  }, [localTheme])

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#FFFF3F" : "#1976d2",
        light: darkMode ? "#ffff8c" : "#42a5f5",
        dark: darkMode ? "#ffff0c" : "1565c0",
      }
    }
  })

  const handleThemeChange = () => {
    setDarkMode(!darkMode)
    localStorage.setItem("theme", JSON.stringify(darkMode))
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ height: "130vh" }}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <Typography marginTop={1}> Light </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <Typography marginTop={1}> Dark </Typography>
          </Box>
          <Box display="flex"
            justifyContent="center"
            alignItems="center">
            <Typography variant="h2" component="h1" gutterBottom marginTop={3} color={"primary"}>
              Position Size Calculator
            </Typography>
          </Box>
          <PositionSizeCalculator />
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <Typography variant="p" gutterBottom component="p" marginTop={0.8} marginRight={1}>
              Made with 💗 by Andrei Toma
            </Typography>
            <BasicModal />
          </Box>
        </Container>
      </Paper>
    </ThemeProvider >
  );
}

export default App;