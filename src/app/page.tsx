'use client';

import React from 'react';
import './globals.css';
import Image from 'next/image';
import { Box, Typography, Stack, Button, Grid } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PercentIcon from '@mui/icons-material/Percent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Header, Detail, Strategy } from './index';

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '1024px',
                    color: 'text.primary',
                    m: 'auto',
                }}
            >
                <Box sx={{ widht: '100%', height: '110px' }} />
                <Box textAlign="center">
                    <Image src="/janken-logo.png" alt="Janken Strategy" width={200} height={200} priority={true} />
                    <Box sx={{ widht: '100%', height: '10px' }} />
                    <Typography variant="h4" gutterBottom>
                        Janken Strategy
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'text.secondary' }} gutterBottom>
                        <span>The App is a program</span> <span>searching for best janken strategy .</span>
                    </Typography>
                </Box>
                <Box sx={{ widht: '100%', height: '40px' }} />
                <Grid container alignItems="center" justifyContent="center" direction="column">
                    <Stack spacing={2} direction="row">
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<EmojiEventsIcon />}
                            sx={{ textTransform: 'none', boxShadow: 3 }}
                            onClick={() => {
                                window.location.href = 'https://janken.shinyapps.io/janken-ranking/';
                            }}
                        >
                            Ranking
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            startIcon={<PercentIcon />}
                            sx={{ textTransform: 'none', boxShadow: 3 }}
                            onClick={() => {
                                window.location.href = 'https://janken.shinyapps.io/janken-roulette/';
                            }}
                        >
                            Roulette
                        </Button>
                    </Stack>
                    <Box sx={{ widht: '100%', height: '20px' }} />
                    <Button
                        variant="outlined"
                        endIcon={<ArrowForwardIosIcon />}
                        sx={{ textTransform: 'none', boxShadow: 3 }}
                        onClick={() => {
                            window.location.href = '#jump-learning';
                        }}
                    >
                        Learn Janken Strategy
                    </Button>
                </Grid>
                <Box sx={{ width: '100%', height: '150px' }} />
                <Typography variant="h5" id="jump-learning" gutterBottom>
                    Janken Strategyとは
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Janken
                    Strategyは、一定の条件下で最も勝率の高いじゃんけんの戦略は何かを計算するアプリケーションです。
                </Typography>
                <Box sx={{ width: '100%', height: '70px' }} />
                <Typography variant="h5" gutterBottom>
                    Janken Strategyの全体像
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Janken Strategyは、主に対戦結果の評価方法と新しい戦略個体の生成方法を
                    それぞれ2パターン保有しています。まずは、Janken Strategyの全体像は以下のようになっています。
                </Typography>
                <Box sx={{ width: '100%', height: '30px' }} />
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
                    [Janken Strategyの構造]
                </Typography>
                <Box sx={{ width: '100%', height: '30px' }} id="map-title" />
                <div id="map"></div>
                <Box sx={{ width: '100%', height: '60px' }}></Box>
                <Strategy />
                <Box sx={{ width: '100%', height: '60px' }}></Box>
                <Typography variant="h5" gutterBottom>
                    <span>Janken Strategyの</span>
                    <span>詳細な仕組み</span>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Janken Strategyの詳細な仕組みについて、各セクションに分けながら説明します。
                </Typography>
            </Box>
            <Detail />
        </React.Fragment>
    );
}
