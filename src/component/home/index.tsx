import React from "react";
import logoReact from "../../assests/image/reactGgalaxia.png";

export function Index() {
  return (
    <>
      <div className="container">
        <div className="card" style={{ width: "400px" }}>
          <img className="card-img-top" src={logoReact} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Mini Challengue React</h5>
            <p className="card-text">
              This chalengue has three routes: *Home: where it is located
              currently *Form: you have to fill the form *Table: table of
              users returned by an API
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
