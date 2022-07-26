import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface Theme {
        background: {
            primary: {
                light: string;
                main: string;
                dark: string;
                darkest: string;
            },
            secondary: {
                light: string;
                main: string;
                dark: string;
            },
        }
    }

    interface ThemeOptions {
        background?: {
            primary?: {
                light?: string;
                main?: string;
                dark?: string;
                darkest?: string;
            }
            secondary?: {
                light?: string;
                main?: string;
                dark?: string;
            }
        }
    }
}

const theme = createTheme({
    palette: {
        primary: {
            light: '#424549',
            main: '#424549',
            dark: '#282b30',
        },
        secondary: {
            light: '#7289da',
            main: '#5865F2',
            dark: '#404EED',
        },
        info: {
            main: '#EB459E',
        },
        success: {
            main: '#57F287',
        },
        warning: {
            main: '#FEE75C',
        },
        error: {
            main: '#582812',
        },
        text: {
            primary: '#F6F6F6',
            secondary: '#7289da',
        },
    },
    background: {
        primary: {
            light: '#424549',
            main: '#424549',
            dark: '#282b30',
            darkest: '#1e2124',
        },
        secondary: {
            light: '#FFFFFF',
            main: '#F6F6F6',
            dark: '#99AAB5',
        },
    }
});
theme.typography.h1 = {
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: '0',
    padding: '0',
}

export default theme;
