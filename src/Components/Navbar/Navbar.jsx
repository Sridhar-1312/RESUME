import React from "react";
import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Workexp from "../WorkExperience/Workexp";
import a from "./BOYS.jpg";

function Navbar() {
  return (
    <>
      <div className="container">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <h1 className="a">John Doe</h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About me
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Professional Experience
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <h1>+About me</h1>
          <p>
            My Name is John Doe, i am a Multi diciplinar designer <br /> Morbi
            Leo Risus, Porta acconsectetur ac, vestibulum at ero bendum nibh
          </p>
        </div>

        <div className="row">
          <div className=" col-lg-6 col-md-6 col-sm-12">
            <div className="image">
              <img src={a} alt="hello" />
            </div>
          </div>
          <div className=" col-lg-6 col-md-6 col-sm-12">
            <div className="name-row">
              <p>Name</p>
              <div>John Doe Manhatan</div>
            </div>
            <hr />
            <div className="name-row">
              <p>Born</p>
              <div>12 October 1985</div>
            </div>
            <hr />

            <div className="name-row">
              <p>Address</p>
              <div> Las Rozas,Madrid,Spain</div>
            </div>
            <hr />
            <div className="name-row">
              <p>E-mail</p>
              <div>myemail@gmail.com</div>
            </div>
            <hr />
            <div className="name-row">
              <p>Website</p>
              <div>www.virgihodelavegaxom</div>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <Workexp />
    </>
  );
}

export default Navbar;

//  import React from 'react'
// function Navbar() {
//   return (
//     <>
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">John Doe</a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0"/>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </p>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </p>
//         {/* <li class="nav-item dropdown">
//           <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//             <p><a class="dropdown-item" href="#">Action</a></p>
//             <p><a class="dropdown-item" href="#">Another action</a></p>
//             <p><hr class="dropdown-divider"/></p>
//             <p><a class="dropdown-item" href="#">Something else here</a></p>
//           </ul>
//         </p> */}
//         {/* <li class="nav-item">
//           <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//         </p>
//       </ul>
//       <form class="d-flex">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form> */}
//     </div>
//   </div>
// </nav>

//     </>

//   )
// }

// export default Navbar
