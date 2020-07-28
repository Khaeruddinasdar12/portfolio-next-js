import Navbar from '../components/Navbar';
import Head from 'next/head';
function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

    	<Navbar />

    	<section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="text-title">About</h1>
            <p className="description">A computer programmer, sometimes called a software developer, a programmer or more recently a coder, is a person who creates computer software. The term computer programmer can refer to a specialist in one area of computers, or to a generalist who writes code for many kinds of software. Wikipedia</p>
          </div>
        </div>
        </section>

    </>
  );
}
export default About;