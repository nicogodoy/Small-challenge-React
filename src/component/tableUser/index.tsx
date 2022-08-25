import React, { useEffect, useState } from "react";
import getUsers from "../../servicies";

export function Index() {
  const [users, setUser] = useState<any>();

  useEffect(() => {
    getUsers().then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <>
      <div className="container" >
        <table style={{width: '800px'}} className="table table-sm">
          <thead className="table table-active">
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Carrera</th>
              <th>Hobbie</th>
            </tr>
          </thead>

          {users &&
            users.map((user) => {
              return (
                <tbody key={user.id}>
                  <td>{user.nombre}</td>
                  <td>{user.edad}</td>
                  <td>{user.carrera}</td>
                  <td>{user.hobbie}</td>
                </tbody>
              );
            })}
        </table>
      </div>
    </>
  );
}
export default Index;
