const Footer = () => {
    return (
      <footer className="bg-amber-400 text-white py-8" id="footer">
        <div className="container mx-auto flex justify-between flex-col md:flex-row gap-10 px-6">
          <div className="max-w-64">
            <h3 className="text-4xl font-bold mb-4">ArchiWeb</h3>
            <p className="text-black">
              ArchiWeb is an architectural consultant based in Berlin, Germany. We provide solutions for your architecture and residential design.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Articles</h4>
            <ul className="text-black">
              <li>7 Tips for Kids Friendly Interior</li>
              <li>Eco-friendly design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Links</h4>
            <ul className="text-black">
              <li>Link 1</li>
              <li>Link 2</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Location</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.70603759823!2d13.259927885878023!3d52.50693861624993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sid!4v1736238286834!5m2!1sen!2sid" width="400" height="250" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;