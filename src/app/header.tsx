import React from 'react';
import { AppBar, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
import Link from 'next/link';

const navItems = [
    {
        label: 'ddd',
        url: 'dddd',
    },
    {
        label: 'ddd',
        url: 'dddd',
    },
    {
        label: 'ddd',
        url: 'dddd',
    },
];

export default function DrawerAppBar() {
    //更新関数のインスタンス化
    const [mobileOpen, setMobileOpen] = React.useState(false);

    //更新関数
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    //Drawerのレンダリング内容
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Link href={'/'} className="no-underline">
                <Typography
                    variant="h6"
                    color="initial"
                    sx={{ pt: '30px', pb: '20px', borderBottom: 1, borderColor: 'grey.500' }}
                >
                    Janken Strategy
                </Typography>
            </Link>
            <Box sx={{ width: '100%', height: '20px' }}></Box>
            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{ textAlign: 'center' }}
                        onClick={() => {
                            window.location.href = 'https://janken-test.gitbook.io/blog/';
                        }}
                    >
                        <ListItemText primary="Blog" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        sx={{ textAlign: 'center' }}
                        onClick={() => {
                            window.location.href = 'https://github.com/Myxogastria0808/janken_app/';
                        }}
                    >
                        <ListItemText primary="GitHub" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                component="nav"
                sx={{
                    bgcolor: '#1769aa',
                    '@media screen and (min-width:600px)': { height: '80px' },
                    '@media screen and (max-width:599px)': { height: '68px' },
                }}
            >
                <Toolbar sx={{ width: '90%', maxWidth: '1024px', m: 'auto' }} className="header">
                    {/* スマホのitem Start*/}
                    {/*ハンバーガーメニュー Start*/}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/*ハンバーガーメニュー End*/}
                    {/* スマホのitem End*/}
                    {/* PCのitem Start*/}
                    <Grid
                        container
                        alignItems="left"
                        justifyContent="left"
                        sx={{ m: 'auto', display: { xs: 'none', sm: 'block' } }}
                    >
                        <Link href={'/'}>
                            <Image src="/header-logo.webp" alt="Janken Strategy" width={280} height={60} />
                        </Link>
                    </Grid>
                    <Grid
                        container
                        sx={{
                            m: 'auto',
                            '@media screen and (min-width:599px)': { alignItems: 'right', justifyContent: 'right' },
                            '@media screen and (max-width:600px)': { alignItems: 'center', justifyContent: 'center' },
                        }}
                    >
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <Typography
                                variant="h6"
                                textAlign={'center'}
                                sx={{ width: '100%', display: { xs: 'block', sm: 'none' } }}
                            >
                                Janken Strategy
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Link href={'https://janken-test.gitbook.io/blog/'}>
                                <BookIcon
                                    sx={{ height: '40px', width: '40px', mr: '10px', ml: '10px', color: 'white' }}
                                />
                            </Link>
                            <Link href={'https://github.com/Myxogastria0808/janken_app'}>
                                <GitHubIcon
                                    sx={{ height: '40px', width: '40px', mr: '10px', ml: '10px', color: 'white' }}
                                />
                            </Link>
                            {/*mapで回す技術力が付いたらやろう*/}
                            {/* {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))} */}
                        </Box>
                    </Grid>
                    {/* PCのitem End*/}
                </Toolbar>
            </AppBar>
            {/*以下、Drawerの内容*/}
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
