import Navbar from '../components/Navbar';
import Head from 'next/head';
function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
    	<Navbar />

    	<section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="text-title">Portfolio</h1>
            <p className="description">A computer programmer, sometimes called a software developer.</p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/admin.png" className="portfolio-image" />

                <h4 className="portfolio-name">Admin Dashboard CMS</h4>
                <div className="portfolio-category">Back End Developer</div>
              </div>

              <div className="portfolio-item">
                <img src="/admin2.png" className="portfolio-image" />

                <h4 className="portfolio-name">Admin Dashboard Chart</h4>
                <div className="portfolio-category">Back End Developer</div>
              </div>

              <div className="portfolio-item">
                <img src="/admin2.png" className="portfolio-image" />

                <h4 className="portfolio-name">Admin Dashboard Chart</h4>
                <div className="portfolio-category">Back End Developer</div>
              </div>
            </div>
        </div>
        </div>
        </section>

    </>
  );
}
export default Portfolio;