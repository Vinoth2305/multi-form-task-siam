import React from "react";

function CandidateList() {
  let usersArray = JSON.parse(localStorage.getItem("users")) || [];
  console.log(usersArray);

  return (
    <div className="container pt-5">
      <h4 className="pb-1">Candidate List:</h4>
      <table className="table table-bordered">
        <thead>
          <tr className="table-info">
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Skills</th>
            <th scope="col">Experience</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {usersArray.map((items, index) => {
            return (
              <tr key={index} className="table-light">
                <th scope="row">{index + 1}</th>
                <td>{items.name ? items.name : "N/A"}</td>
                <td>{items.gender ? items.gender : "N/A"}</td>
                <td>{items.dob ? items.dob : "N/A"}</td>
                {console.log(items.skills)}
                <td>
                  {items.skills && items.skills
                    ? items.skills.map((skill) => skill.name).join(", ")
                    : "N/A"}
                </td>

                <td>{items.experience ? items.experience : "N/A"}</td>
                <td>{items.description ? items.description : "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateList;
