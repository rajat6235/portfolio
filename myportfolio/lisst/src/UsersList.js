import { useEffect, useState } from "react";
import GetUsers, { removeData } from "./services";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteConfirmation from "./DeleteConfirmation";
import "./UsersList.css";
export default function UsersList() {
  const [data, setData] = useState();
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(
    false
  );
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    GetUsers().then((response) => setData(response.data.data));
  }, []);
  const renderHeader = () => {
    let headerElement = ["id", "First Name", "Last Name", "email", "operation"];
    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  const showDeleteModal = (id, first_name) => {
    setName(first_name);
    setId(id);
    setDeleteMessage(`Are you sure you want to delete ${first_name} user`);
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const removeUser = () => {
    removeData(id).then((res) => {
      console.log("response", res);
    });
    const del = data.filter((employee) => id !== employee.id);
    setData(del);
    setDisplayConfirmationModal(false)
  };
  const renderBody = () => {
    return (
      data &&
      data.map(({ id, first_name, email, last_name }, index) => {
        return (
          <tr key={index}>
            <td>{index + 145}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td className="operation">
              <button
                className="button"
                onClick={() => showDeleteModal(id, first_name)}
              >
                Delete
              </button>
              <DeleteConfirmation
                showModal={displayConfirmationModal}
                confirmModal={removeUser}
                hideModal={hideConfirmationModal}
                name={name}
                id={id}
                message={deleteMessage}
              />
            </td>
          </tr>
        );
      })
    );
  };
  return (
    <div>
      <h1 id="title">User's Table</h1>
      <table id="employee">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
}
