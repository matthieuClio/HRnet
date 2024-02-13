// React router
import { Link } from "react-router-dom";

// Component
import Table from '../components/Table';

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

            <Table />
        </section>
    );
}