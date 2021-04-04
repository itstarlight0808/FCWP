import  React from "react";
import ReactDom from "react-dom";
import PageLayout from "../layout/pagelayout";

export default class LandingPage extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    render(){
        return (
            <div class="h-75 d-flex flex-wrap align-content-center justify-content-center">
                <h3>Hi.</h3>
            </div>
        )
    }
}