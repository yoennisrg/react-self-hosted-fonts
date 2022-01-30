import { ThemeProvider } from '@mui/styles'
import { Typography, Box, CssBaseline } from '@mui/material'
import theme from './theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography fontFamily={'Raleway'}>Raleway - Almost before we knew it</Typography>
      <Box
        sx={{
          fontFamily: 'Raleway',
        }}
      >
        Raleway - Almost before we knew it
      </Box>
    </ThemeProvider>
  )
}
export default App