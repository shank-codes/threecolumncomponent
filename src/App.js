import "./App.css";

function App() {
  return (
    <div className="card">
      <div className="card1">
        <img
          className="carIcon"
          src={process.env.PUBLIC_URL + "/images/icon-sedans.svg"}
          alt="sedan car"
        ></img>
        <p className="title">SEDANS</p>
        <p className="description">
          Choose a sedan for its affordability and excellent fuel
          economy. Ideal for cruising in the city or on your next road trip.
        </p>
        <button className="btn">Learn More</button>
      </div>
      <div className="card2">
        <img
          className="carIcon"
          src={process.env.PUBLIC_URL + "/images/icon-suvs.svg"}
          alt="sedan car"
        ></img>
        <p className="title">SUVS</p>
        <p className="description">
          Take an SUV for its spacious interior, power, and versatility.
          Perfect for your next family vacation and off-road adventures.
        </p>
        <button className="btn">Learn More</button>
      </div>
      <div className="card3">
        <img
          className="carIcon"
          src={process.env.PUBLIC_URL + "/images/icon-luxury.svg"}
          alt="sedan car"
        ></img>
        <p className="title">LUXURY</p>
        <p className="description">
          Cruise in the best car brands without the bloated prices. Enjoy
          the enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
}

export default App;
