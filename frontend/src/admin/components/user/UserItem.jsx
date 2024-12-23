import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const UserItem = ({ no }) => {
  const deleteingUser = () => {
    alert("Are you sure to delete?");
  };

  return (
    <tr>
      <td>{no}</td>
      <td>Mark Shin thant lwin</td>
      <td>markmfmfmfmfmfmfmfmfmfmfmfmfmmfmfm@gmail.com</td>
      <td className="text-center">
        <Link className="text-decoration-none text-dark">
          {" "}
          <FontAwesomeIcon icon={faTrash} onClick={deleteingUser} />
        </Link>
      </td>
      <td>23.12.2024</td>
    </tr>
  );
};

export default UserItem;
