import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import CardDetail from "./CardDetailComponent";

import "../../component-styles/CardComponentStyle.css";

const number = Math.floor(Math.random() * 3) + 1;

let choice = null;

const assignChoice = id => {
  choice = id;
};

const Card = props => {
  const robots = props.robots.map(robot => {
    return (
      <Link
        key={robot.id}
        to={`/Robot/${robot.id}`}
        onClick={() => assignChoice(robot.id)}
      >
        <div className="bg-washed-green dib br3 pa2 mv3 mh2 grow bw1 shadow-5 bg-animate hover-bg-light-green">
          <img
            className="w-100"
            alt={robot.name}
            src={`https://robohash.org/${
              robot.id
            }?size=300x300&set=set${number}`}
          />
          <div>
            <h2>{robot.name.slice(0, 20)}</h2>
            <p>{robot.email}</p>
            <p>
              <b>{robot.username}</b>
            </p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <Router>
        <div className="w-90 tc" style={{ margin: "0 auto" }}>
          {robots}
        </div>
        {robots.length ? (
          <Route exact path="/Robot/:robotID"
            component={() => (
              <CardDetail
                robots={props.robots}
                choice={choice}
                number={number}
              />
            )}
          />
        ) : (
          <Redirect from="/Robot/:robotID" to="/" />
        )}
        <Redirect exact from="/Robot" to="/" />
      </Router>
    </div>
  );
};

export default Card;
