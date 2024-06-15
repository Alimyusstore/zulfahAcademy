import nerdy from "../assets/images/nergy.png"
import coden from "../assets/images/code-n.png";
import codes from "../assets/images/code-s.png";
import linkedIn from "../assets/images/linkedIn.svg";
import facebook from "../assets/images/facebook.svg";
function Sec5() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <p className="mt-5" style={{ fontWeight: "bold", fontSize: "2rem" }}>
        Meet the team
      </p>
      <div className="row">
        <div className="col-4" style={{ fontWeight: "bold" }}>
          <img src={nerdy} alt="nerdy" width={"200px"} />
          <p className="mb-0">nerdy - knight</p>
          <div>
            <img src={linkedIn} alt="linkedIn" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="col-4" style={{ fontWeight: "bold" }}>
          <img src={coden} alt="code-n " width={"200px"} />
          <p className="mb-0">code - ninja</p>
          <div>
            <img src={linkedIn} alt="linkedIn" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="col-4" style={{ fontWeight: "bold" }}>
          <img src={codes} alt="code-s" width={"200px"} />
          <p className="mb-0">code - slayer</p>
          <div>
            <img src={linkedIn} alt="linkedIn" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec5;
