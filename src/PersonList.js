import axios from "axios";
import React, { Component } from "react";
import PersonDetails from "./PersonDetails";

export default class PersonList extends Component {
    //Define state default values
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        };
    }

    //Component Lifecycle Callback
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
            console.log(res.data);
            const persons = res.data.results;
            this.setState({ ...this.state, persons });
            console.log(persons);
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center bg-dark text-white border rounded p-2 mt-2">
                    User List
                </h1>
                {this.state.persons.map((person) => (
                    <PersonDetails key={person.login.uuid} person={person} />
                ))}
            </div>
        );
    }
}
