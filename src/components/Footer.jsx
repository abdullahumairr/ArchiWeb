const Footer = () => {
    return (
      <footer className="bg-gray-700 text-white py-8" id="footer">
        <div className="container mx-auto flex justify-between flex-col md:flex-row gap-10 px-6">
          <div className="max-w-64">
            <h3 className="text-4xl font-bold mb-4">ArchiWeb</h3>
            <p className="text-white">
              ArchiWeb is an architectural consultant based in Berlin, Germany. We provide solutions for your architecture and residential design.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Articles</h4>
            <ul className="text-white">
              <li>7 Tips for Kids Friendly Interior</li>
              <li>Eco-friendly design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Links</h4>
            <ul className="text-white">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">Location</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.084842091729!2d107.0130167760394!3d-6.383050462437267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699753f452a75d%3A0x25e019e428a06c70!2sSekolah%20Developer%20Indonesia!5e0!3m2!1sid!2sid!4v1736495400820!5m2!1sid!2sid" width="400" height="250" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;