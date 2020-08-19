import React, { Component } from "react";
import "./tour.scss";

export default class tour extends Component {
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="image-container">
          <img src={img} alt="images of cities" />
          <span className="close-btn">
            <i className="fas fa-window-close"/>
          </span>
        </div>
        <div className="tour-info">
          <h2>{city}</h2>
                <h4>{name}</h4>
                <h5>
                    info{""}
                    <span>
                        <i className="fas fa-caret-square-down"/>
                    </span>
                </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}
