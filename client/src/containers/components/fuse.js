import React from "react";
import ReactDom from "react-dom";
import {FormControl, Icon, InputLabel, MenuItem, Select} from "@material-ui/core";
import axios from "axios";
import { Config } from "../app.config";

export default class FuseComponent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            base_failure_rate : [],
            environment : [],
            failure_index : "-1",
            env_index : "-1",
            result : ""
        }
    }
    componentDidMount = () => {
        axios.get(Config.baseServerUrl+"/fuse").then((res)=>{
            var data = res.data;
            this.setState({
                base_failure_rate : data.base_failure_rate,
                environment : data.environment_factor
            });
        })
    }
    render(){
        return (
            <div className="container w-75">
                <div className="row d-flex justify-content-center">
                    <FormControl variant="outlined" className="cs-select-width col-md-4 mt-4">
                        <InputLabel id="BFR">Base Failure Rate</InputLabel>
                        <Select
                            labelId="BFR"
                            id="BFR"
                            onChange={(e)=>this.onFailureChange(e)}
                            label="Base Failure Rate"
                            className="cs-select-width"
                            value={this.state.failure_index}
                        >
                            <MenuItem value="-1">None</MenuItem>
                            {
                                this.state.base_failure_rate.map(one=>{
                                    return (
                                        <MenuItem value={one.id+"_"+one.value}>{one._type}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <FormControl className="cs-select-width col-md-3 mt-4" variant="outlined" >
                        <InputLabel id="env">Environment</InputLabel>
                        <Select
                            labelId="env"
                            id="env"
                            onChange={(e)=>this.onEnvironmentChange(e)}
                            label="Environment"
                            className="cs-select-width"
                            value={this.state.env_index}
                        >
                            <MenuItem value="-1">None</MenuItem>
                            {
                                this.state.environment.map(one=>{
                                    return (
                                        <MenuItem value={one.id+"_"+one.value}><big>{one.environment+" - "+one.Bsymbol}</big><small className="pt-1">{one.Ssymbol}</small></MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <div className="mt-4 col-md-5" align="center">
                        <button type="button" class="mt-1 btn btn-success btn-lg" onClick={()=>this.onClickCalcButton()}><Icon className="fa-calculator mr-2"/><span className="h4">= ?</span></button>
                    </div>
                </div>
                <div id="result" className="h3 mt-5">
                    Result : {this.state.result}
                </div>
            </div>
        )
    }
    onFailureChange = (e) => {
        this.setState({failure_index : e.target.value});
    }
    onEnvironmentChange = e => {
        this.setState({env_index : e.target.value});
    }
    onClickCalcButton = () => {
        if(this.state.failure_index==-1 || this.state.env_index==-1){
            alert("Select all the factors!");
            return;
        }
        let failure_rate = this.state.failure_index.split("_")[1];
        let environment = this.state.env_index.split("_")[1];
        let result = (parseFloat(failure_rate)*parseFloat(environment))/Math.pow(10, 6);
        this.setState({result : result});
    }
}