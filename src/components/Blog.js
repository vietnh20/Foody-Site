const Blog = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="section-header text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-5 mb-3">Latest Blog</h1>
            <p>
              Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam
              justo sed rebum vero dolor duo.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <img className="img-fluid" src="img/blog-1.jpg" alt="" />
              <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="/#">
                  How to cultivate organic fruits and vegetables in own firm
                </a>
                <div className="text-muted border-top pt-4">
                  <small className="me-3">
                    <i className="fa fa-user text-primary me-2" />
                    Admin
                  </small>
                  <small className="me-3">
                    <i className="fa fa-calendar text-primary me-2" />
                    01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <img className="img-fluid" src="img/blog-2.jpg" alt="" />
              <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="/#">
                  How to cultivate organic fruits and vegetables in own firm
                </a>
                <div className="text-muted border-top pt-4">
                  <small className="me-3">
                    <i className="fa fa-user text-primary me-2" />
                    Admin
                  </small>
                  <small className="me-3">
                    <i className="fa fa-calendar text-primary me-2" />
                    01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="img/blog-3.jpg" alt="" />
              <div className="bg-light p-4">
                <a className="d-block h5 lh-base mb-4" href="/#">
                  How to cultivate organic fruits and vegetables in own firm
                </a>
                <div className="text-muted border-top pt-4">
                  <small className="me-3">
                    <i className="fa fa-user text-primary me-2" />
                    Admin
                  </small>
                  <small className="me-3">
                    <i className="fa fa-calendar text-primary me-2" />
                    01 Jan, 2045
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
