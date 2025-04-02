import React from 'react'


function Navbar() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-6">
    <nav className='nav'>
      <h1>John Doe</h1>
      </nav>
      </div>
      <div className="col-6">
      <ul className='nav nav-item '>
        <p><a href="">About Me</a></p>
        <p><a href="">Professional Experience</a></p>
        <p><a href="">Contact</a></p>
        </ul>
        </div>


      </div>
      </div>
      <div>
        <h1>+About me</h1>
        <p>My Name is John Doe, i am a Multi diciplinar designer <br /> Morbi Leo Risus, Porta acconsectetur ac, vestibulum at ero bendum nibh</p>
      </div>

      <div className="row">
      <div className="col-6">
      <div className="image">
        <img src="" alt="" />
      </div>
      </div>
      <div className="col-6">
        <ul>
          <p>Name</p>
          <p><hr />Born</p>
          <p><hr />Address</p>
          <p><hr />E-mail</p>
          <p><hr />Phone</p>
          <hr />
        </ul>
      </div>
      </div>
      <div className="footer">
        <h2>+Work Experience</h2>
      </div>


    
        </>
  )
}

export default Navbar



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