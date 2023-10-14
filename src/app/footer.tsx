import React from 'react';
import './globals.css';
import { Box, Typography, Stack, Button, Grid } from '@mui/material';

export default function Footer() {
    return (
        <React.Fragment>
            <Box sx={{ width: '100%', height: '150px' }}></Box>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                direction="column"
                sx={{ width: '100%', height: '120px', m: 0, p: 0, boxShadow: 8 }}
            >
                <Typography variant="body1">© 2023 Janken Strategy</Typography>
            </Grid>
        </React.Fragment>
    );
}
