import graduate from '../assets/images/graduation.svg';
function Sec6() {
  return (
    <div className=" py-5 d-flex  gap-5">
      <div
        className="d-grid rounded-end py-5 px-4 gap-3"
        style={{ backgroundColor: "#263238", color: "white", fontSize: "10px" }}
      >
        <div className="d-flex">
          <div className="">
            <img className="" src={graduate} style={{ width: "70px" }} alt="" />
          </div>
          <div className="">
            <ul style={{ listStyle: "none" }}>
              <li className="" style={{ fontSize: "20px", fontWeight: "bold" }}>
                500,000
              </li>
              <li className="">Frontend - Backend</li>
              <li className="">6 Months</li>
            </ul>
          </div>
        </div>
        <div className="d-flex ">
          <div className="">
            <img src={graduate} style={{ width: "70px" }} alt="" />
          </div>
          <div className="">
            <ul style={{ listStyle: "none" }}>
              <li className="" style={{ fontSize: "20px", fontWeight: "bold" }}>
                850,000
              </li>
              <li className="">Fullstack</li>
              <li className="">9 Months</li>
            </ul>
          </div>
        </div>
        <div className="d-flex">
          <div className="">
            <img src={graduate} style={{ width: "70px" }} alt="" />
          </div>
          <div className="">
            <ul style={{ listStyle: "none" }}>
              <li className="" style={{ fontSize: "20px", fontWeight: "bold" }}>
                500,000
              </li>
              <li className="">Mobile Develoliment</li>
              <li className="">6 Months</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-3" style={{ fontWeight: "bold" }}>
          Payment & Sponsorship
        </h3>
        <div
          className="d-flex border border-1 "
          style={{ fontSize: "10px", width: "28rem" }}
        >
          <div
            className="py-2 px-5"
            style={{ backgroundColor: "#263238", color: "white" }}
          >
            Self Sponsorship Plan - SSP
          </div>
          <div className="py-2 px-5" style={{ backgroundColor: "#FFF8F9" }}>
            Financial Investment Plan - FIP
          </div>
        </div>
        <p className="" style={{ width: "55rem", fontSize: "12px" }}>
          The Self Sponsorship Plan - SSP is a (Pay-Learn-Earn) payment plan
          where prospective learners either sponsor themselves and/or a
          third-party from the learner help with the training costs.
        </p>
        <p style={{ width: "55rem", fontSize: "12px" }}>
          We are confident that our training and career support will lead to a
          high paying job for the learner after going through our 6-9months
          intensive training
        </p>
        <a
          href="#"
          className=""
          style={{ textDecoration: "none", color: "#CF3A5E", fontWeight:"700", fontSize:"14px" }}
        >
          Enroll now <i class="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Sec6;
