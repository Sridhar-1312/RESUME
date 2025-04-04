import React from "react";


function Education() {
  return (
    <>
      <div className="container" id="edu1">
        {/* first row */}
        <div className="row">
          <div className="col-6">
            <h1>+ Education</h1>
            <hr />
            <h4>Publicidad & marketing</h4>
            <div className="row">
                <div className="col-6">
            <p>2000 - 200S.Madnd</p>
            </div>
            <div className="col-6">
            <h6>University Madrid</h6>
            </div>
            </div>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et.Cras mattis consectetur purus sit amet fermentum. Aenean eu leo
              quam ellentesque omare sem lacina quam
            </p>
            <h4>Graphic design</h4>
            <div className="row">
              <div className="col-6">
                <p>2000 - 2005.Madnd</p>
              </div>

              <div className="col-6">
                <h6>School of arts</h6>
              </div>
            </div>
            <p>
              Praesent commodo cursus magnat vel scelerisque nisl consectetur
              etCras mattis consectetur purus sit amet fermentum. Aenean eu leo
              quam ellentesque ornare sem lacina quam
            </p>
          </div>
          <div className="col-6">
         
           <h2>Social media:</h2>
                       <div className="progress">
                        <div className="progress-bar w-75" role='progress'>Facebook</div>
                        </div>
                        <div className="progress">
                        <div className="progress-bar w-50" role='progress'>Twitter</div>
                        </div>
                        <div className="progress">
                        <div className="progress-bar w-75" role='progress'>Instagram</div>
                        </div>
                        <div className="progress">
                        <div className="progress-bar w-100" role='progress'>You Tube</div>
                       </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
