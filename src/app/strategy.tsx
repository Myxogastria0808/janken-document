import React from 'react';
import './globals.css';
import { Box, Typography, Stack, Button, Grid } from '@mui/material';

export default function Strategy() {
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                <span>Janken Strategyの</span>
                <span>戦略パターン</span>
            </Typography>
            <div id="strategy"></div>
        </React.Fragment>
    );
}
