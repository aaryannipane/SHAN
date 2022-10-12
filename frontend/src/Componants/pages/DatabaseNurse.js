import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { getNurses } from "../../http";

function DatabaseNurse() {
  const [nurses, setNurses] = useState([]);
  let count = 1;

  useEffect(() => {
    console.log("hello");

    const fetchNurses = async () => {
      const { data } = await getNurses();
      setNurses(data);
      console.log(data);
    };
    fetchNurses();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Phone</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {nurses.map((nurse) => {
          return (
            <tr key={nurse._id}>
              <td>{count++}</td>
              <td>{nurse.name}</td>
              <td>{nurse.phone}</td>
              <td>{nurse.createdBy.name}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default DatabaseNurse;
