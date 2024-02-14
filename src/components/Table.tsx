// React
import { useState } from 'react';

// React redux
import { useSelector } from 'react-redux';

// Style
import './table.scss';

export default function Table () {
    const tableInfo = useSelector((state: {
        tableData: {
            id: number,
            firstName: string,
            lastName: string,
            startDate: string,
            department: string,
            birthDate: string,
            street: string,
            city: string,
            state: string,
            zipCode: number,
            firstAdd: boolean
        }[];
    }) => state.tableData);

    const [userInfo] = useState(tableInfo);

    // function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    //     // console.log(tableInfo.includes('o'));
    //     // console.log(event.target.value);

    //     // let testt = [...userInfo];
    //     // testt.push(userInfo[0])
    //     // setUserInfo(testt);
    //     // console.log(userInfo)
    // }

    return (
        <>
            {/* <div>
                <label htmlFor="search">Search : </label>
                <input type="search" onChange={handleChange} />
            </div> */}

            <table className="table">
                <thead>
                    <tr className="table__row-header">
                        <th className="table__row-header__header">First Name</th>
                        <th className="table__row-header__header">Last Name</th>
                        <th className="table__row-header__header">Start Date</th>
                        <th className="table__row-header__header">Department</th>
                        <th className="table__row-header__header">Date od Birth</th>
                        <th className="table__row-header__header">Street</th>
                        <th className="table__row-header__header">City</th>
                        <th className="table__row-header__header">State</th>
                        <th className="table__row-header__header">Zip code</th>
                    </tr>
                </thead>

                {userInfo.map((element, index) => (
                    <tbody key={`key-${index}`}>
                        <tr className="table__row-data">
                            <td className="table__row-data__data">{element.firstName}</td>
                            <td className="table__row-data__data">{element.lastName}</td>
                            <td className="table__row-data__data">{element.startDate}</td>
                            <td className="table__row-data__data">{element.department}</td>
                            <td className="table__row-data__data">{element.birthDate}</td>
                            <td className="table__row-data__data">{element.street}</td>
                            <td className="table__row-data__data">{element.city}</td>
                            <td className="table__row-data__data">{element.state}</td>
                            <td className="table__row-data__data">{element.zipCode}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    );
}