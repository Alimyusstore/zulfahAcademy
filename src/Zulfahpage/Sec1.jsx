import sec1pics from "../assets/images/sec1-pics.png"
function Sec1() {
  return (
    <main
      className="d-flex p-0 justify-content-between "
      //   style={{ width: "100vw" }}
    >
      <div
        className="d-flex flex-column justify-content-center px-4 text-align-center "
        style={{
          backgroundImage: `linear-gradient( #FFFFFF77, #F4F4E277, #F0F5FF77
)`,
          lineHeight: "1.4",
        }}
      >
        <h1
          className=""
          style={{
            color: "#CF3A5E",
            fontSize: "2rem",
            fontWeight: "bold",
            width: "25rem",
          }}
        >
          Join Our Innovative Tech School Today!
        </h1>
        <p style={{ width: "35rem", fontSize: "12px" }}>
          Gain the skills you need to land a job in the tech industry. <br />{" "}
          Zulfah Academy trains and mentors you to become an excellent engineer.
          Over 100 professionals <br /> trained.{" "}
          <span style={{ color: "#CF3A5E", fontWeight: 600 }}>
            Read stories
          </span>
        </p>
      </div>
      <div
        className=""
        style={{
          width: "51vw",
          overflowX: "hidden",
        }}
      >
        <img src={sec1pics} alt="" width={"670px"} height={"570px"} />
      </div>

      <div
        className="container d-grid align-items-center gap-3 rounded p-3"
        style={{
          position: "absolute",
          bottom: "-15px",
          left: "20px",
          width: "55%",
          backgroundColor: "white",
          boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          gridTemplateColumns: "2fr 2fr 2fr 1fr",
        }}
      >
        <div className="px-2">
          <p style={{ color: "#CF3A5E", fontWeight: "bold", fontSize: "13px" }}>
            Application
          </p>
          <p style={{ fontSize: "9px" }}>
            We screen all submissions to identify high-potential candidate
          </p>
        </div>
        <div className="px-">
          <p style={{ color: "#CF3A5E", fontWeight: "bold", fontSize: "13px" }}>
            Interview - Selection
          </p>
          <p style={{ fontSize: "9px" }}>
            You get a chance to convince us, then, we male our decision
          </p>
        </div>
        <div className="px-2">
          <p style={{ color: "#CF3A5E", fontWeight: "bold", fontSize: "13px" }}>
            Training
          </p>
          <p style={{ fontSize: "9px" }}>
            After six months, you will earn the title "Skilled software
            Engineer"
          </p>
        </div>
        <div
          className="rounded px-2 py-3 "
          style={{
            backgroundColor: "#ECB32Cbf",
            width: "100%",
            textAlign: "center",
          }}
        >
          <i className="bi bi-arrow-right"></i>
          <p style={{ fontSize: "9px" }}>Get started</p>
        </div>
      </div>
    </main>
  );
}

export default Sec1;
