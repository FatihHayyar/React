import React from 'react'
import { Container } from 'react-bootstrap'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import {EmojiNature} from '@mui/icons-material';
import {theme} from './theme'
import { ThemeProvider } from '@mui/material';

function MateriaIcons() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
        <h2>Material Icons</h2>
        <FlutterDashIcon style={{fontSize:"100px"}}/>
        <EmojiNature fontSize='large' color='myColor'/>
    </Container>
    </ThemeProvider>
  )
}

export default MateriaIcons