function Sec4(){
    return (
      <div
        className="d-grid  container pt-5"
        style={{
          fontSize: "13px",
          gridTemplateColumns: "1fr 1fr",
          lineHeight: "1.9",
        }}
      >
        <div className="" style={{}}>
          <div>
            <p
              className="m-4 d-inline"
              style={{ backgroundColor: "#86878B13", fontSize: "10px" }}
            >
              SOFTWARE ENGINEERING BOOTCAMP
            </p>
          </div>
          <div className="mt-4 p-1">
            <ul style={{ listStyle: "none" }}>
              <li style={{ fontWeight: "bold" }}>Overview</li>
              <li>Requirements</li>
              <li>Curriculum</li>
              <li>Payment & Sponsorship</li>
              <li>Next application</li>
            </ul>
          </div>
        </div>
        <div className="" style={{ width: "82%" }}>
          <div className="d-flex align-items-center" style={{ textAlign: "center" }}>
            <p style={{ backgroundColor: "#C6F6D5", borderRadius:"30%" }}>Software Engineering</p>
            <p>Mobile Engineering</p>
            <p>Product Design</p>
            <p>Data Science</p>
            <p>Devops</p>
            <p>Web3 Technology</p>
          </div>
          <div>
            <p style={{}}>
              Our development & engineering courses are designed to make you
              world-class fit, teaching you the technical and professional
              skills hiring managers need most. You’ll attend classes led by
              industry experts who will teach you the foundations of full-stack
              development using HTML, CSS, JavaScript, Typescript, ReactJs.
              You’ll also develop web servers using NodeJs,ExpressJS, RDBMS
              including MySQL and PostgreSQL while and applying various
              fundamental computer science concepts in your development. Plus,
              you’ll have the chance to build and contribute to real products
              with a team of other learners that you can showcase in your
              portfolio.\n We promote collaborative learning, which will be seen
              in our usage of git, Trello, and other tools in the software
              engineering space. Through an agile delivery methodology, mentor
              matching, and leadership modules, our elite engineers are equipped
              with techniques and a leadership mindset that enables them to work
              competitively in any team globally.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Sec4