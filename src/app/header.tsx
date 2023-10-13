import React from 'react';
import { AppBar, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookIcon from '@mui/icons-material/Book';
import Link from 'next/link';

const navItems = ['Home', 'About', 'Contact'];

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
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
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
                    {/* <Grid container textAlign="center" sx={{ width: '100%', display: { sm: 'none' } }}>
                        <Box sx={{ width: '100%', textAlign: 'center' }}>Hello</Box>
                    </Grid> */}
                    {/*ハンバーガーメニュー End*/}
                    {/* スマホのitem End*/}
                    {/* PCのitem Start*/}
                    <Grid
                        container
                        alignItems="left"
                        justifyContent="left"
                        sx={{ m: 'auto', display: { xs: 'none', sm: 'block' } }}
                    >
                        <Image src="/header-logo.png" alt="Janken Strategy" width={280} height={60} />
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
