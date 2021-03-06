import React from "react";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from 'react-tooltip';

const CardDetail = ({ match, number, robots, onFav, favs, history }) => {
  if (!robots.length) {
    return <Redirect to={"/"} />;
  }

  let id = parseInt(match.params.robotID, 10);

  if (id > 0 && id < 11) {
    let robot = robots.find(el => el.id === id);
    let favSelected = favs.includes(robot.id) ? true : false;
    
    const handleClick = () => {
      onFav(robot.id);
      favSelected = true;
    };

    return (
      <div className="container">
        <div
          className="overthepage bg-washed-green dib br3 pa2 mv3 mh2 bw1 shadow-5 bg-animate w-70"
          style={{ margin: "0 auto" }}
        >
          <div className="tc">
            <img
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
            <span className="underline">{`${robot.website}`}`</span>
          </p>
          <div className="icon-space">
            <FontAwesomeIcon icon={["fas", "arrow-left"]} onClick={() => {history.goBack();}} data-tip="Go back" />
            {favSelected ? <FontAwesomeIcon icon={["fas", "heart"]} size="lg" style={{ color: "red" }} transform="grow-2.5" data-tip="Already Favourite" /> : <FontAwesomeIcon
              icon={["far", "heart"]}
              style={{ color: "red" }} onClick={handleClick} data-tip="Add to Favourite"
            />}
            <FontAwesomeIcon icon={["fas", "map-marked-alt"]} onClick={() => {history.push(`locateOnMap/${robot.username}/${robot.address.geo.lat}/${robot.address.geo.lng}`);}} data-tip="Find him on map" />
          </div>
        </div>
        <ReactTooltip />
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
