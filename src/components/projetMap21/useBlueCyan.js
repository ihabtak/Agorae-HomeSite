import React, { Component } from 'react'

export default class UseBlueCyan extends Component {
    componentDidMount() {
        document.title="The Map21 project";
        document.getElementById("nbr").className = "navbar navbar-expand-lg navbar-light fixed-top clrtxtcyan";  
      }
      componentWillUnmount() {
        document.getElementById("nbr").className = "navbar navbar-expand-lg navbar-light fixed-top clrtxtgreen";
      }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
