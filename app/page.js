import NavBar from "./nav.js";

export default function Home() {
  return (
    <>
      <NavBar />
      {/* Hero Section */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Ride Better with Bikeshop</h1>
          <p className="lead">We sell, repair, and upgrade bicycles of all kinds. Let’s get you rolling!</p>
          <p><i class="bi bi-geo-alt"></i> 64 Elgin street, Gatineau, J9X 3X4, QC, Canada</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4 fw-bold">Our Services</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">🚴 Bike Sales</h5>
                  <p className="card-text">Choose from top brands and custom options to find your perfect ride.</p>
                  <a href="/bikeshop/browse" className="btn btn-primary btn-sm mt-3">Browse bikes</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">🔧 Repairs</h5>
                  <p className="card-text">Flat tires to full overhauls—our certified mechanics have you covered.</p>
                  <a href="/bikeshop/repair" className="btn btn-primary btn-sm mt-3">Repair your bike</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title fw-bold">🕑 Appointments</h5>
                  <p className="card-text">Check what appointments you have coming up.</p>
                  <a href="/bikeshop/appointments" className="btn btn-primary btn-sm mt-3">My appointments</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Get In Touch</h2>
          <p>Have questions or need service? Call us at <strong>(343) 988-0000</strong> or visit us today!</p>
          <p><i class="bi bi-geo-alt"></i> 64 Elgin street, Gatineau, J9X 3X4, QC, Canada</p>
          <a href="mailto:goule071@uottawa.ca" className="btn btn-outline-light mt-3">Email Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white text-center py-3">
        <small>© {new Date().getFullYear()} Bikeshop. All rights reserved.</small>
      </footer>
    </>
  );
}
