import Navbar from '../components/Navbar';
import Link from 'next/link';
import Head from 'next/head';
import { withRouter } from 'next/router';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
    	
      <Navbar />

    	<section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="text-title">Contact</h1>
            <p className="description">Untuk informasi lebih lanjut atau pantau terus sosial media pada link di bawah</p>
            <ul className="contact-links">
              <li className="contact-item">Email : khaeruddinasdar12@gmail.com</li>
              <li className="contact-item">Phone : +62 82 344 949 505</li>
              <li className="contact-item"><a href="https://github.com/Khaeruddinasdar12" target="_blank"> Github : github.com/Khaeruddinasdar12</a></li>
              <li className="contact-item"><a href="https://twitter.com/AsdarCeddaKeru" target="_blank"> Twitter : @AsdarCeddaKeru</a></li>
              <li className="contact-item"><a href="https://www.facebook.com/profile.php?id=100009106886200" target="_blank"> Facebook : Khaeruddin Asdar</a></li>
              <li className="contact-item"><a href="https://www.instagram.com/khaeruddinasdar?r=nametag" target="_blank"> Intagram : Khaeruddinasdar</a></li>
              <li className="contact-item"><a href="https://www.youtube.com/c/ForRazak" target="_blank"> Youtube : For Razak</a></li>
            </ul>
          </div>
        </div>
        </section>

    </>
  );
}
export default Contact;