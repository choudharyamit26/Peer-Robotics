import React from "react";
export default function Card({ flight_Number }) {
  // console.log(flight_Number);
  return (
    <>
      <h4>Best Flight Plan...</h4>

      {!flight_Number ? (
        <h6> </h6>
      ) : (
        flight_Number.map((item) => {
          return (
            <>
              <div>
                <div className="card-field" key={item.id}>
                  <div className="flight-chart">
                    <h5 className="flight-sno">FLIGHT NUMBER</h5>
                    <h3 className="flight-info">{item.flight_number}</h3>
                  </div>
                  <div className="flight-chart">
                    <h5 className="flight-sno">FROM</h5>
                    <h3 className="flight-info">
                      {item.departure_city}-{item.departure_time}
                    </h3>
                  </div>
                  <div className="flight-chart">
                    <h5 className="flight-sno">To</h5>
                    <h3 className="flight-info">
                      {item.arrival_city}-{item.arrival_time}
                    </h3>
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}
