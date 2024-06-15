import meridtem from '../assets/images/meristem.png';
import interswitch from '../assets/images/interswitch.png';
import flutterwave from '../assets/images/flutterwave.png';
import hervest from '../assets/images/HerVest.png';
import zulfah from '../assets/images/zulfahlogo.svg';
function Sec7 (){
    return (
      <div className="d-flex flex-column pb-5 align-items-center" style={{}}>
        <p className="" style={{ fontWeight: "bold" }}>
          Companies Our Graduates Work For
        </p>
        <div
          className="d-flex gap-5 py-3 px-5 align-items-center mb-5 rounded"
          style={{
            boxShadow: "2px 2px  5px #00000024",
            backgroundColor: "white",
          }}
        >
          <img width={"150px"} src={meridtem} alt="meridtem" />
          <img width={"150px"} src={interswitch} alt="interswitch" />
          <img width={"150px"} src={flutterwave} alt="flutterwave" />
          <img width={"100px"} src={hervest} alt="hervest" />
          <img width={"150px"} src={zulfah} alt="zulfah" />
        </div>
        <p style={{ fontWeight: "bold" }}>Our Alumni Speak</p>
        <div
          className="d-flex align-items-center"
          style={{
            backgroundColor: "#EDF2F7",
          }}
        >
          <div
            className="d-grid container gap-4 p-5"
            style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
          >
            <div
              className="d-flex flex-column align-items-center"
              style={{ textAlign: "center" }}
            >
              <p
                className="rounded container p-3"
                style={{
                  boxShadow: "2px 2px  5px #00000024",
                  backgroundColor: "white",
                  fontSize: "11px",
                }}
              >
                Thanks to Zulfah, my life will forever be changed. I went from
                zero knowledge of tech to a full stack developer. I loved this
                program and everything it's done for me.From zero knowlegde to
                joining flutterwave as a software engineer
              </p>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#A0FEC1",
                }}
              >
                A
              </div>
              <div style={{ fontWeight: "bold" }}>Abass</div>
              <div>software Engineer</div>
              <div>Flutterwave</div>
            </div>
            <div
              className="d-flex flex-column align-items-center "
              style={{ textAlign: "center" }}
            >
              <p
                className="rounded container p-4"
                style={{
                  boxShadow: "2px 2px  5px #00000024",
                  backgroundColor: "white",
                  fontSize: "12px",
                }}
              >
                After my Undergrad, it was not clear what i wanted to do. I
                opted for a career switch and Zulfah has helped me build a
                career in Software Engineering. I presently work as a frontend
                engineer at herVest and it's been really amazing journey from
                biochemistry to Software developer. I can confidently say I made
                the right decision.
              </p>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#AAD9D6",
                }}
              >
                H
              </div>
              <div style={{ fontWeight: "bold" }}>Hikmah</div>
              <div>Frontend Engineer</div>
              <div>HerVest</div>
            </div>
            <div
              className="d-flex flex-column align-items-center"
              style={{ textAlign: "center" }}
            >
              <p
                className="rounded container p-3"
                style={{
                  boxShadow: "2px 2px  5px #00000024",
                  backgroundColor: "white",
                  fontSize: "11px",
                }}
              >
                It was an amazing 6 months of intense learning, unlearning, and
                relearning. Indeed, the jounery was worth it all along, learning
                with @zulfah from <br />
                zero <br /> to a ninja level. Cheers to building solutions!.
              </p>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#D33F08",
                  color: "white",
                }}
              >
                F
              </div>
              <div style={{ fontWeight: "bold" }}>Faruq</div>
              <div>Fullstack Engineer</div>
              <div>Zulfah</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sec7