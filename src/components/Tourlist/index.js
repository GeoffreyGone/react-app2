import React, { Component } from "react";
import "./tourlist.scss";
import { tourData } from "../../tourData";
import Tour from "../Tour/Tour";

export default class Tourlist extends Component {
    state = {
        tours: tourData,
    };

    removeTour = (id) => {
        console.log(id);
    }; 

  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}
