import { AppBar, Box, styled, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import theme from '../theme';

import frame_styles from './frame.module.css';


interface FrameProps {
    children?: React.ReactNode;
}


const HeaderBar = styled(AppBar)({
    backgroundColor: theme.background.primary.darkest,
    position: 'static',
    color: theme.background.secondary.main,
    borderRadius: "15px 15px 0 0",
    height: '30px',
});


const BodyBox = styled(Box)({
    backgroundColor: theme.background.primary.dark,
    padding: '5px 0',
});


const FooterBar = styled(Box)({
    backgroundColor: theme.background.primary.darkest,
    borderRadius: "0 0 15px 15px",
    height: '15px',
});


export const Frame = (props:FrameProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                borderRadius:"15px",
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
            }}
            >
                <HeaderBar className={frame_styles.draggable}>
                    <Box padding="5px">
                        <Typography
                            variant="h1"
                            paddingX="10px"
                            sx={{color: theme.background.primary.light}}
                        >
                            RedApp
                        </Typography>
                    </Box>
                </HeaderBar>
                <BodyBox flex={1}>
                    {props.children}
                </BodyBox>
                <FooterBar className={frame_styles.draggable}>

                </FooterBar>
            </Box>
        </ThemeProvider>
    )
}
