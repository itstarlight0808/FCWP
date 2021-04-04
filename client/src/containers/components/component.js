import React from "react";
import ReactDom from "react-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { NavLink, Route } from "react-router-dom";
import Fuse from "./fuse";
import Meter from "./meter";
import Panel from "./panel";

export default class _Component_ extends React.Component{
    constructor(props){
        super(props);

        this.state={
            c_index : 0
        }
    }
    handleComponentChange = (e) => {
        this.setState({c_index : e.target.value});
    }
    render(){
        let match_url = this.props.match.path;
        return (
            <div className="h-75">
                <div className="pt-5 d-flex flex-wrap align-content-center">
                    <FormControl variant="outlined" className="ml-5">
                        <InputLabel id="component">Component</InputLabel>
                        <Select
                            labelId="component"
                            id="component"
                            onChange={(e)=>this.handleComponentChange(e)}
                            label="Component"
                            className="w-150px"
                            value={this.state.c_index}
                        >
                            <MenuItem value={0} className="p-0"><NavLink to={match_url+"/"} className="w-100 p-2">Fuses</NavLink></MenuItem>
                            <MenuItem value={1} className="p-0"><NavLink to={match_url+"/meter"} className="w-100 p-2">Meter</NavLink></MenuItem>
                            <MenuItem value={2} className="p-0"><NavLink to={match_url+"/panel"} className="w-100 p-2">Panel</NavLink></MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="h-75 d-flex flex-wrap align-content-center">
                    <Route exact path={match_url+"/"} component={Fuse}/>
                    <Route exact path={match_url+"/meter"} component={Meter}/>
                    <Route exact path={match_url+"/panel"} component={Panel}/>
                </div>
            </div>
        )
    }
}