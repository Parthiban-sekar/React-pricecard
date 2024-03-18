import React from "react";

function Card(props) {
  return (
    <div className="col">
      <div className="card mb-3 rounded-4 shadow-sm">
        <div className="card-header py-3">
          <h4 className="text-muted">{props.data.plan}</h4>
          <h1 className="card-title pricing-card-title">
            ${props.data.price}
            <small className="text-fw-normal">/month</small>
          </h1>
        </div>

        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">
            {props.data.features.map((ele) => {
              return ele.enabled ? (
                <li> <span className="fa-li"> <i className={ele.enabled ? "fas fa-check":"fas fa-times"}></i> </span> {ele.name} </li>
              ) : (
                <li className="text-muted"> <span className="fa-li"> <i className={ele.enabled ? "fas fa-check":"fas fa-times"}> </i></span> {ele.name}</li>
              );
            })}
          </ul>
          <button
            type="button"
            className="w-100 btn btn-lg btn-primary rounded-4"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
