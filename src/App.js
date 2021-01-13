import React from 'react'
import Person from './components/Person';
import './App.css';
import PropTypes from "prop-types";

class App extends React.Component {

  state = {
    personObject: [
      {
        name:"John",
        email:"John@gmail.com",
        mobile:"111-111-1111",
        work:"222-222-2222"
      },
      {
        name:"David",
        email:"David@gmail.com",
        mobile:"333-333-3333",
        work:"444-444-4444"
      },
      {
        name:"Bob",
        email:"Bob@gmail.com",
        mobile: "555-555-5555",
        
        
      }
    ]
  } 
  render(){
    return (
      <div className="App">
        {/*
        <Person
        name="John"
        age="17"
        phone="123-456-7890"
        />

        <br/>
        <Person
        name="David"
        age="20"
        phone="111-222-3333"
        />

        <br/>
        <Person
        name="Bob"
        age= "28"
        phone="444-555-6666"
        />
        */}
        {this.state.personObject.map(item => (
          <div className="eachPerson">
          <Person
          name={item.name}
          email={item.email}
          mobile={item.mobile}
          work={item.work}
          />
          </div>
        ))}
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  work: PropTypes.string
};

export default App;
