import React from "react";

const CardDetail = ({ robots, choice, number }) => {
  if (choice > 0 && choice < 11) {
    let robot = robots[choice - 1];
    return (
      <div className="container">
        <div
          className="overthepage bg-washed-green dib br3 pa2 mv3 mh2 bw1 shadow-5 bg-animate w-70"
          style={{ margin: "0 auto" }}
        >
          <div className="tc">
            <img
              className="w-100"
              alt={robot.name}
              src={`https://robohash.org/${
                robot.id
              }?size=300x300&set=set${number}`}
            />
            <h1 className="f4">{`${robot.name.slice(0, 20)} (@${
              robot.username
            })`}</h1>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f5 black-90">
            <span className="underline">{`${robot.name.slice(0, 20)}`}</span>
            {`, famously known by username `}
            <span className="underline">@{`${robot.username}`}</span>
            {` is a resident of ${robot.address.suite}, ${
              robot.address.street
            } in ${robot.address.city} with zip-code `}
            <span className="underline">{`${robot.address.zipcode}`}</span>
            {`. He can be contacted at phone number: `}
            <span className="underline">{`${robot.phone}`}</span>
            {` or at email: `}
            <span className="underline">{`${robot.email}`}</span>
            {`. He currently works at ${
              robot.company.name
            }. He owns a nice website `}
            <span className="underline">{`${robot.website}</span>`}`</span>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div
          className="overthepage bg-washed-green dib br3 pa2 mv3 mh2 grow bw1 shadow-5 bg-animate hover-bg-light-green w-60"
          style={{ margin: "0 auto" }}
        >
          <p>That's not in our database</p>
        </div>
      </div>
    );
  }
};

export default CardDetail;
