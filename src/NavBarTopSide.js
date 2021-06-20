import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarTopSide.css';
import * as ReactBootStrap from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

let selectedList =  [];
let selectedList2 = [];
let selectedList3 = [];
let selectedList4 = [];

const useStyles = makeStyles({
        list: {
            width: 500,
        },
        fullList: {
            width: 'auto',
        },
        paper: {
            color: "black",
            width:200
        },
        buttonColor: {
            "&:hover": {
                backgroundColor: 'rgb(7, 177, 77, 0.42)'
            },
        },
        root: {
            background: '#656565',
            border: 0,
            display:'flex',
            justifyContent:'space-between',
            borderRadius: 3,
            color: 'white',
            height: 48,
            marginTop:2,
            padding: '0 30px',
            "&:hover": {
                background: '#000000'
            },
        }
    });
const NavBarTopSide = () => {const classes = useStyles();
    const [state, setState] = useState({
    left: false
    });

    const toggleDrawer = (anchor, open, option) => (event) => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        if (event.key === 'Tab') {
        return;
        }
        if(option === 'A') {
            selectedList = ['SubMenu A1'];
            selectedList2 = ['SubMenu A2'];
            selectedList3 = ['SubMenu A3'];
            selectedList4 = ['SubMenu A4'];
        } else if(option === 'B') {
            selectedList = ['SubMenu B1'];
            selectedList2 = ['SubMenu B2'];
            selectedList3 = ['SubMenu B3'];
            selectedList4 = ['SubMenu B4'];
        } else if(option === 'C') {
            selectedList = ['SubMenu C1'];
            selectedList2 = ['SubMenu C2'];
            selectedList3 = ['SubMenu C3'];
            selectedList4 = ['SubMenu C4'];
        } else if(option === 'D') {
            selectedList = ['SubMenu D1'];
            selectedList2 = ['SubMenu D2'];
            selectedList3 = ['SubMenu D3'];
            selectedList4 = ['SubMenu D4'];
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        // <div
        // className={clsx(classes.list, {
        //     [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        // })}
        // role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        // >
        <div>
        <List>
            {selectedList.map((text1) => (
            <ListItem button key={text1}>
                <ListItemText primary={text1} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {selectedList2.map((text2) => (
            <ListItem button key={text2}>
                <ListItemText primary={text2} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {selectedList3.map((text3) => (
            <ListItem button key={text3}>
                <ListItemText primary={text3} />
            </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {selectedList4.map((text4) => (
            <ListItem button key={text4}>
                <ListItemText primary={text4} />
            </ListItem>
            ))}
        </List>
        </div>
    );
        return (
            <>
            {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
                <nav className="col-lg-12 col-md-12 col-sm-12 container">
                    <li><a className="active" href="#" style={{'text-decoration':'none'}}><Button className={classes.root} onClick={toggleDrawer(anchor, true, 'A')}>Menu A</Button></a></li>
                    
                    <li><a href="#" style={{'text-decoration':'none'}}><Button className={classes.root} onClick={toggleDrawer(anchor, true, 'B')}>Menu B</Button></a></li>
                    
                    <li><a href="#" style={{'text-decoration':'none'}}><Button className={classes.root} onClick={toggleDrawer(anchor, true, 'C')}>Menu C</Button></a></li>
                    
                    <li><a href="#" style={{'text-decoration':'none'}}><Button className={classes.root} onClick={toggleDrawer(anchor, true, 'D')}>Menu D</Button></a></li>
                </nav>
                <Drawer classes={{ paper: classes.paper }} anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
                </Drawer>
            </React.Fragment>
        ))}
            </>
        )
}

export default NavBarTopSide
