# react-self-hosted-fonts
To self-host fonts, download the font files in ttf, woff, and/or woff2 formats and import them into your code.

1. Create a self-hosted fonts .css file in the src/asset/fonts/Name/stylesheet.css directory
2. Define @font-face settings for each of the font file types 

        @font-face {
            font-family: 'Raleway';
            src: url('static/Raleway-Medium.woff2') format('woff2'),
                url('static/Raleway-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'Raleway';
            src: url('static/Raleway-MediumItalic.woff2') format('woff2'),
                url('static/Raleway-MediumItalic.woff') format('woff');
            font-weight: 500;
            font-style: italic;
            font-display: swap;
        }

3. import style sheet
        <link href="src/assets/fonts/Raleway/stylesheet.css" rel="stylesheet">

4. Define font settings for material ui v5 in a separate theme.tsx file
import { createTheme} from '@mui/material'

        const theme = {
            typography: {
            fontFamily: 'Raleway ',
            },    
        };

        export default createTheme(theme);

 5. Try the solution

        import { ThemeProvider } from '@mui/material/styles';
        import { Typography, Box, CssBaseline } from '@mui/material'
        import theme from './theme'


        function App() {
        return (
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography>Raleway - Almost before we knew it</Typography>
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

# Documentation:
https://mui.com/customization/typography/#self-hosted-fonts

https://transfonter.org/