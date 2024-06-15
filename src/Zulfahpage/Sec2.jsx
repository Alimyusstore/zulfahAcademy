import button1 from '../assets/images/Button1.svg';
import button2 from '../assets/images/Button2.svg';
import button3 from '../assets/images/Button3.svg';
import button4 from '../assets/images/Button4.svg';
function Sec2() {
  return (
    <div className="container d-flex flex-center align-items-center pt-5">
      <div className="pt-2" style={{ width: "50vw", lineHeight:"1.9"}}>
        <p className="" style={{ width: "66%", fontSize: "12px" }}>
          We deliver an intensive 6-9months program where our students learn
          &nbsp;
          <span style={{ fontWeight: "bold" }}>
            Frontend development, Backend development, Fullstack
            development,Mobile development, Product Design, Data Science, Web3 &
            Blockchain {" "}
          </span>
          and additional soft skills in an immersive environment
        </p>
        <p style={{ width: "65%", fontSize: "12px" }}>
          Through an agile delivery methodology, mentor matching and leadership
          modules, our learners are equipped with techniques and a leadership
          mindset that enables them to work competitively in any team globally.
        </p>
        <p style={{ width: "65%", fontSize: "12px" }}>
          As part of our curriculum, we expose our engineers to real-life
          applications and projects. During these projects, we ensure they are
          well-equipped to develop programs individually and in teams. This
          aspect of our program provides our learners with verifiable work
          experience and the confidence to excel in their jobs after the
          training. Our graduates are mentored by various veterans in the tech
          industry, we leverage on that network to match our graduate with
          partner companies.
        </p>
      </div>

      <div
        className="gap-4  "
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          width: "50vw",
        }}
      >
        <div
          className="d-flex flex-column px-4 py-3 gap-3"
          style={{ fontSize: "12px", backgroundColor: "#ECB32D35" }}
        >
          <div className="">
            <img src={button1} alt="button1" />
          </div>
          <div className="">
            <p style={{ fontWeight: "bold" }}>Equipped Curriculum</p>
          </div>
          <div className="">
            <p style={{ fontSize: "10px" }}>
              We enforce industry standard and best practices that match the
              dynamics of the tech industry.
            </p>
          </div>
        </div>

        <div
          className="d-flex flex-column px-4 py-3 gap-3"
          style={{ fontSize: "12px", backgroundColor: "#FFF8F9" }}
        >
          <div className="">
            <img src={button2} alt="button2" />
          </div>
          <div className="">
            <p style={{ fontWeight: "bold" }}>
              Complete hands-on coding projects with personalized feedback
            </p>
          </div>
          <div className="">
            <p style={{ fontSize: "10px" }}>
              Enhances tactical problem-solving techniques and gives a feel of
              reality.
            </p>
          </div>
        </div>

        <div
          className="d-flex flex-column px-4 py-3 gap-3"
          style={{ fontSize: "12px", backgroundColor: "#FFF8F9" }}
        >
          <div className="">
            <img src={button3} alt="button3" />
          </div>
          <div className="">
            <p style={{ fontWeight: "bold" }}>
              Monthly session with Industry experts
            </p>
          </div>
          <div className="" style={{ fontSize: "10px" }}>
            Opportunity to engage tech veterans, network, and gain mentorship.
          </div>
        </div>

        <div
          className="d-flex flex-column px-4 py-3 gap-3"
          style={{ fontSize: "12px", backgroundColor: "#4994A824" }}
        >
          <div className="">
            <img src={button4} alt="buttom4" />
          </div>
          <div className="">
            <p style={{ fontWeight: "bold" }}>Innovative learning culture</p>
          </div>
          <div className="">
            <p style={{ fontSize: "10px" }}>
              {" "}
              Peer-to-peer learning, with collaborative approach. And guess
              what? "Lunch is always on the house."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec2;
