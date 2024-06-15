import book from "../assets/images/book.png"
import lappy from "../assets/images/lappy.png"
import glasses from "../assets/images/glasses.png"
import tech from "../assets/images/tech.png"
import web3 from "../assets/images/web3.png"
import devUps from "../assets/images/devUps.png"
function Sec3() {
  return (
    <div className="d-flex container pt-3 flex-column align-items-center ">
      <h1
        style={{
          fontSize: "23px",
          width: "45%",
          textAlign: "center",
          fontWeight: "bolder",
          lineHeight: "1.4",
        }}
      >
        Immersive bootcamps strategically designed to launch your tech career.
      </h1>
      <div className="row container align-items-center">
        <div className="col-4">
          <div className="card" style={{ width: "15rem" }}>
            <img src={lappy} className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: "#050794",
                color: "white",
                textAlign: "center",
              }}
            >
              <p className="card-text">Software Engineering</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "15rem" }}>
            <img src={glasses} className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: "#0C8F54",
                color: "white",
                textAlign: "center",
              }}
            >
              <p className="card-text">Mobile Engineering</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "15rem" }}>
            <img src={book} className="card-img-top" alt="..." />
            <div
              className="card-body"
              style={{
                backgroundColor: "#7C01A7",
                color: "white",
                textAlign: "center",
              }}
            >
              <p className="card-text">Product Design</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "15rem" }}>
            <img src={tech} className="card-img-top" alt="Data Science" />
            <div
              className="card-body"
              style={{
                backgroundColor: "#A78700",
                color: "white",
                textAlign: "center",
              }}
            >
              <p className="card-text">Data Science</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "15rem" }}>
            <img src={devUps} className="card-img-top" alt="DevOps" />
            <div
              className="card-body"
              style={{
                backgroundColor: "#A74F46",
                color: "white",
                textAlign: "center",
              }}
            >
              <p className="card-text">DevOps</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "15rem" }}>
            <img src={web3} className="card-img-top" alt="Web3 Technology" height={"145px"}/>
            <div
              className="card-body"
              style={{
                backgroundColor: "#0E8F8F",
                color: "white",
                textAlign: "center",
              }}
            >
              <p className="card-text">Web3 Technology</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec3;
