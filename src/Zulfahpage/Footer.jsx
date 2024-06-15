import logo from "../assets/images/zulfahlogo.svg"
import instagram from "../assets/images/instagram.svg"
import facebook from "../assets/images/facebook.svg"
import linkedin from "../assets/images/linkedIn.svg"
import left from "../assets/images/Maskleft.png"
import right from "../assets/images/Maskright.png"
function Footer() {
  return (
    <div>
      <div
        className="container  mt-5 p-4 d-flex flex-column align-items-center justify-content-center"
        style={{ backgroundColor: "#263238" }}
      >
        <div
          style={{
            width: "27rem",
            color: "white",
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          <h2>Start your application to become a software engineer</h2>
          <p>
            A 6months journey with us will translate that dream to reality.
            Application opens on: May 8th, 2023.
          </p>
          <button
            className="rounded px-3  py-2"
            style={{ backgroundColor: "#ECB32C", color: "black" }}
          >
            Enroll Now
          </button>
          <div>

          <img
            src={left}
            alt="left"
            className=""
            style={{ position: "relative", bottom: "205px", right: "108%"}}
          />
          <img
            src={right}
            alt="right"
            className=""
            style={{ position: "relative", top: "22px", left: "108%" }}
          />
          </div>
        </div>
      </div>
      <div
        className="container d-flex flex-column align-items-center pt-5 pb-2 mb-3"
        style={{ borderBottom: "1px solid grey" }}
      >
        <img src={logo} alt="logo" />
        <div className="d-flex gap-5 mt-3" style={{ textDecoration: "none" }}>
          <a style={{ color: "black" }} href="#">
            About
          </a>
          <a style={{ color: "black" }} href="#">
            Contacts
          </a>
          <a style={{ color: "black" }} href="#">
            Hire
          </a>
          <a style={{ color: "black" }} href="#">
            FAQs
          </a>
        </div>
      </div>
      <div className="container d-flex justify-content-between pb-2">
        <p>© 2024 Zulfah Academy. All rights reserved</p>
        <div>
          <img width={"20px"} src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
