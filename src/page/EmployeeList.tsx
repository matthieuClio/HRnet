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

            {/* <table bgcolor="black" cellPadding={0} cellSpacing={30} border={0} width={700}>
                <tr className="employee-list__table__row" bgcolor="#676767">
                    <td style={{border: '2px solid blue'}} valign="top" colSpan={3} height={120}>Row</td>
                    <td style={{border: '2px solid blue'}} colSpan={3} height={120}>row 2</td>
                </tr>
            </table> */}

            <table className="employee-list__table">
                <thead>
                    <tr className="employee-list__table__row-header">
                        <th className="employee-list__table__row-header__header">First Name</th>
                        <th className="employee-list__table__row-header__header">Last Name</th>
                        <th className="employee-list__table__row-header__header">Start Date</th>
                        <th className="employee-list__table__row-header__header">Department</th>
                        <th className="employee-list__table__row-header__header">Date od Birth</th>
                        <th className="employee-list__table__row-header__header">Street</th>
                        <th className="employee-list__table__row-header__header">City</th>
                        <th className="employee-list__table__row-header__header">State</th>
                        <th className="employee-list__table__row-header__header">Zip code</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="employee-list__table__row-data">
                        <td className="employee-list__table__row-data__data">Data</td>
                        <td className="employee-list__table__row-data__data">2</td>
                        <td className="employee-list__table__row-data__data">Test 2</td>
                        <td className="employee-list__table__row-data__data">Test 2</td>
                        <td className="employee-list__table__row-data__data">Data</td>
                        <td className="employee-list__table__row-data__data">Data</td>
                        <td className="employee-list__table__row-data__data">Data</td>
                        <td className="employee-list__table__row-data__data">Data</td>
                        <td className="employee-list__table__row-data__data">Data</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}