import React, { Component } from 'react'

class Person extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="personcomponent">
                <p>Name: {this.props.name}</p>
                <p>Email: {this.props.email}</p>
                <p>Mobile: {this.props.mobile}</p>
                <p>Work: {this.props.work}</p>
            </div>
        )
    }
}

export default Person;