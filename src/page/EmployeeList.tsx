// React router
import { Link } from "react-router-dom";

// Style
import './employeeList.scss';

export default function EmployeeList () {
    return (
        <section className="employee-list">
            <h1>
                Current Employees (tableau)
            </h1>

            <Link to="/" className="employee-list__link">
                Home
            </Link>

            <section className="employee-list__user">
                <h2 className="employee-list__user__title">
                    Title
                </h2>

                <div className="employee-list__user__info-user">
                    Info User
                    <br />
                    <br />
                    Frist name : Mat
                    <br />
                    Name : c
                    <br />
                    Etc...
                </div>

                <div className="employee-list__user__info-user">
                    Info User
                    <br />
                    <br />
                    Frist name : Mat
                    <br />
                    Name : c
                    <br />
                    Etc...
                </div>
                <div className="employee-list__user__info-user">
                    Info User
                    <br />
                    <br />
                    Frist name : Mat
                    <br />
                    Name : c
                    <br />
                    Etc...
                </div>
            </section>
        </section>
    );
}