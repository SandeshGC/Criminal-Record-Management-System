import React, { useState, useEffect } from "react"
import { RecordPreview } from "."

export default function AllRecords() {
    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch("http://localhost:9988/api/records/")
            .then((res) => res.json())
            .then((data) => setRecords(data))
    }, [])
    // console.log(records.crime_id)

    const allRecordsEl = records.map(
        ({
            record_id,
            first_name,
            middle_name,
            last_name,
            age,
            gender,
            height_inch,
            photo,
            crime_id,
        }) => {
            return (
                <li key={record_id}>
                    <RecordPreview
                        recordId={record_id}
                        firstName={first_name}
                        middleName={middle_name}
                        lastName={last_name}
                        age={age}
                        gender={gender}
                        height={height_inch}
                        photo={photo}
                        crime_id={crime_id}
                    />
                </li>
            )
        }
    )

    return (
        <div>
            <div className="mx-auto flex gap-1 w-full border-b-2 pb-2 border-gray-500">
                <span className="w-2/12 text-center">Photo</span>
                {/* <span className="w-1/12 text-center">Id</span> */}
                <span className="w-3/12 text-center">Name</span>
                <span className="w-1/12 text-center">Age</span>
                <span className="w-1/12 text-center">Gender</span>
                <span className="w-2/12 text-center">Height (inch)</span>
                <span className="w-2/12 text-center">Crime</span>
            </div>
            <ul>{allRecordsEl}</ul>
        </div>
    )
}
