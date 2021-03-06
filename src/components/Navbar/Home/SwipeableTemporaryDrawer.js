import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { Image, Nav } from 'react-bootstrap';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Nav.Item>
          <Nav.Link href="/perfil" className="navb-titu">Perfil Usuario</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/calendario" className="navb-titu">Calendario</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Herramientas" className="navb-titu">Herramientas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Encuest" className="navb-titu">Encuesta</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/estadistica" className="navb-titu">Estadistica</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Emociones" className="navb-titu">Emociones</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/" className="navb-titu">Agenda</Nav.Link>
        </Nav.Item>
      </List>
    </div>
  );

  return (
    <div className="drawe">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{<Image src="https://res.cloudinary.com/dsnsjqasu/image/upload/v1647903756/lista_1_dexdcr.png" alt='perfil'></Image>}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}