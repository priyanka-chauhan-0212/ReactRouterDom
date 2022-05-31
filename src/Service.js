import serviceimg1 from "./Assests/1.jpg";
import serviceimg2 from "./Assests/2.jpg";
import serviceimg3 from "./Assests/3.jpg";
import serviceimg4 from "./Assests/4.jpg";
import "./Service.css";

export default function Service() {
  return (
    <>
      <div className="w3-containerpart">
        <h1>Summer Holiday</h1>
      </div>

      <div className="w3-row-padding w3-margin-top">
        <div className="w3-third">
          <div className="w3-card">
            <img className="serviceimg" src={serviceimg1} alt="" />
            <div className="w3-container">
              <h4>5 Terre</h4>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card">
            <img className="serviceimg" src={serviceimg2} alt="" />
            <div className="w3-container">
              <h4>Monterosso</h4>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card">
            <img className="serviceimg" src={serviceimg3} alt="" />
            <div className="w3-container">
              <h4>Vernazza</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w3-row-padding w3-margin-top">
        <div className="w3-third">
          <div className="w3-card">
            <img className="serviceimg" src={serviceimg4} alt="" />
            <div className="w3-container">
              <h4>Manarola</h4>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card">
            <img className="serviceimg" src={serviceimg1} alt="" />
            <div className="w3-container">
              <h4>Corniglia</h4>
            </div>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card">
            <img className="serviceimg" src={serviceimg2} alt="" />
            <div className="w3-container">
              <h4>Riomaggiore</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
