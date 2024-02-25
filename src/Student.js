import React from "react";

const Student = ({ people }) => {
  console.log(people);
  return (
    <table style={{ border: "1px solid black" }}>
      {Object.keys(people[0])
        .filter(
          (studentHeading) =>
            studentHeading !== "_id" && studentHeading !== "isActive"
        )
        .map((studentHeading) => (
          <th>{studentHeading}</th>
        ))}

      {people.map(
        (element) =>
          element.isActive === true &&
          element.balance >= 500 && (
            <tr style={{ backgroundColor: element.eyeColor }}>
              {/* <td>{element._id}</td> */}
              <td>{element.index}</td>
              <td>{element.guid}</td>
              {/* <td>{element.isActive}</td> */}
              <td>{element.balance}</td>
              <td>{element.age}</td>
              <td>{element.eyeColor}</td>
              <td>{element.name}</td>
              <td>{element.gender}</td>
              <td>{element.company}</td>
              <td>{element.email}</td>
              <td>{element.phone}</td>
            </tr>
          )
      )}
    </table>
  );
};
export default Student;
