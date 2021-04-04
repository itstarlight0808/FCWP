import React from "react";
import ReactDom from "react-dom"

export default class PageLayout extends React.Component{
    constructor(props){
        super(props)

        this.state={

        }
    }
    render(){
        return (
            <div>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}