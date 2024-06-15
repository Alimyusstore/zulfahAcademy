import zulfahlogo from '../assets/images/zulfahlogo.svg'
function Nav (){
    return (
      <nav
        className="d-flex justify-content-between align-items-center px-5 py-2"
        style={{ backgroundColor: "white" }}
      >
        <div className="">
          <img src={zulfahlogo} alt="" />
        </div>
        <div
          className="d-flex gap-4 "
         
        >
          <a
            href="#"
            className=" text-dark"
            style={{ textDecoration: "none" }}
          >
            Home
          </a>
          <a href="#" className="text-dark" style={{ textDecoration: "none" }}
          >

            Courses
          </a>
          <a href="#" className="text-dark" style={{ textDecoration: "none" }}
          >
            FAQs
          </a>
          <a href="#" className="text-dark" style={{ textDecoration: "none" }}
          >
            Application-status
          </a>
          <a href="#" className="text-dark" style={{ textDecoration: "none" }}
          >
            HIRE
          </a>
        </div>
      </nav>
    );
}

export default Nav