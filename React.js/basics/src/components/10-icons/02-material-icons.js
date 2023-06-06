import React from 'react'
import { Container } from 'react-bootstrap'
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import {EmojiNature} from '@mui/icons-material';

function MateriaIcons() {
  return (

    <Container>
        <h2>Material Icons</h2>
        <FlutterDashIcon style={{fontSize:"100px"}}/>
        <EmojiNature fontSize='large' color='warning'/>
    </Container>

  )
}

export default MateriaIcons