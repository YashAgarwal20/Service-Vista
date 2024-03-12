import Analytics from "../components/Analytics";

const Home=()=>
{
    return(
        <>
        <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>India's most trusted site for daily service's need</p>
              <h1>Welcome To Service Vista</h1>
              <p>
                We aim to provide you with complete range of house help manpower, which is needed to run your house smoothly. Our men are experienced, verified and trustworthy. We give solutions for all your household needs, whether it is hiring a 24 hours maid service or a house-servant staff, an electrician, plumber or  maid services, a cook or chef,a carpenter or a gardener.
                Be a part of the local services revolution

              </p>
              <br />
              <p>To know how Service Vista Works click on Learn More button</p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now with us</button>
                </a>
                <a href="/about">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="900"
                height="1000"
              />
            </div>
          </div>
        </section>
      </main>

       {/* 2nd section  */}
       <Analytics />

       {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/about4.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step ? Contact us today for a free consultation and
              let's discuss how we can help your daily service issues.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
        </>
    )
};
export default Home;