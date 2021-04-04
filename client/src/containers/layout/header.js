import React from "react";
import ReactDom from "react-dom";
import { Button, Icon, ListItemText, Menu, MenuItem } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import './header.scss'

export default class Fury_Header extends React.Component{
    constructor(props){
        super(props);

        this.state={
            anchorEl : null
        }
    }
    render(){
        return (
            <nav className="navbar navbar-expand-md bg-primary d-flex">
                <h3 className="navbar-text text-white">
                    No Title!!
                </h3>
                <ul className="cs-navbar navbar-nav ml-auto mr-5">
                    <li className="nav-item">
                        <NavLink
                         to="/"
                         className="text-white mr-4 h5"
                        >
                           Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                         to="/component"
                         className="text-white h5"
                        >
                           Component
                        </NavLink>
                    </li>
                </ul>
                <Button className="cs-nav-button ml-auto"onClick={(e)=>this.onMenuClick(e)}><Icon className="text-white fa fa-bars"/></Button>
                <Menu
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    getContentAnchorEl={null}
                    transformOrigin={{ horizontal: "center" }}
                    anchorEl={this.state.anchorEl}
                    open={Boolean(this.state.anchorEl)}
                    onClose={()=>this.onMenuClose()}
                >
                    <MenuItem className="menu-item-width" onClick={()=>this.onMenuClose()}>
                        <Icon className="fa fa-home mr-2" style={{color : 'green'}} />
                        <NavLink
                        to="/"
                        className="w-100 h6 p-2 m-0"
                        >
                        Home
                        </NavLink>
                    </MenuItem>
                    <MenuItem className="menu-item-width" onClick={()=>this.onMenuClose()}>
                        <Icon className="fa fa-th-large mr-2" style={{color : 'green'}}/>
                        <NavLink
                        to="/component"
                        className="w-100 h6 p-2 m-0"
                        >
                        Component
                        </NavLink>
                    </MenuItem>
                </Menu>
            </nav>
        )
    }
    onMenuClick = (e) => {
        this.setState({anchorEl : e.currentTarget});
    }
    onMenuClose = () => {
        this.setState({anchorEl : null});
    }
}