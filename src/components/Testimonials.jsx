const Testimonials = () => {
    const reviews = [
      {
        name: "Harry Potter",
        text: "I needed a modern living room that matched my magical lifestyle, and ArchiWeb delivered beyond my expectations. The design is sleek, functional, and exactly what I envisioned. Highly recommended!.",
        image: "https://i.pinimg.com/736x/3c/e9/8f/3ce98fc5146f41e749b919df981a99c6.jpg", 
      },
      {
        name: "Cristiano Ronaldo",
        text: "My luxurious villa is a dream come true, thanks to ArchiWeb, I can now invite all of my teammates to my villa. Their attention to detail and ability to bring opulence to life are unmatched. I'm thrilled with the result. SIUUUUU!!",
        image: "https://i.pinimg.com/736x/8d/d5/bd/8dd5bde9935c29226b21934104219972.jpg", 
      },
      {
        name: "Mohammed Salah",
        text: "As someone who values comfort and aesthetics, I couldn't be happier with my cozy bedroom. ArchWeb created a space that's perfect for relaxing and I was relieved that my trophies fit in my room. They're incredible!",
        image: "https://i.pinimg.com/736x/5c/0f/5b/5c0f5be1c23aa2bd39d30cdfd8769798.jpg", 
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50" id="testimonials">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">What Our Clients Say</h2>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;