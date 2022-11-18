import React from "react";

export default function PersonDetails({ person }) {
    return (
        <div className="border border-danger rounded mt-4 mb-4 p-3 bg-info bg-opacity-10">
            <p className="fw-bold">
                {person.name.title} {person.name.first} {person.name.last} -{" "}
                {person.login.uuid}
            </p>
            <hr />
            <div className="row">
                <div className="col-md-3 text-center d-flex justify-content-center align-items-center">
                    <img
                        src={person.picture.large}
                        alt={person.name.first}
                        className="rounded-circle"
                    />
                </div>
                <div className="col-md-9">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="row">UserName</th>
                                <td>{person.login.username}</td>
                            </tr>
                            <tr>
                                <th scope="row">Gender</th>
                                <td>{person.gender}</td>
                            </tr>
                            <tr>
                                <th scope="row">Time Zone Description</th>
                                <td>{person.location.timezone.description}</td>
                            </tr>
                            <tr>
                                <th scope="row">Address</th>
                                <td>
                                    {person.location.street.number}{" "}
                                    {person.location.street.name},{" "}
                                    {person.location.city},{" "}
                                    {person.location.country} -{" "}
                                    {person.location.postcode}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Email</th>
                                <td>{person.email}</td>
                            </tr>
                            <tr>
                                <th scope="row">Birth Date & Age</th>
                                <td>
                                    {person.dob.date} ({person.dob.age})
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Register Date</th>
                                <td>{person.registered.date}</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone</th>
                                <td>{person.phone}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cell</th>
                                <td>{person.cell}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
