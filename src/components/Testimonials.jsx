const Testimonials = () => {
    const reviews = [
      {
        name: "Aryan Rohan Singh",
        text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus laoreet quam feugiat efficitur, volutpat taciti. Eget aenean tellus montes laoreet quisque maecenas habitasse eget.",
        image: "https://www.rollingstone.com/wp-content/uploads/2022/10/Get-Out.jpg", 
      },
      {
        name: "Aarav Devendra Prasad",
        text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus laoreet quam feugiat efficitur, volutpat taciti. Eget aenean tellus montes laoreet quisque maecenas habitasse eget.",
        image: "https://images.unsplash.com/photo-1601972678306-c2bc15613615?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3", 
      },
      {
        name: "Vivan Harshad Patel",
        text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Senectus laoreet quam feugiat efficitur, volutpat taciti. Eget aenean tellus montes laoreet quisque maecenas habitasse eget.",
        image: "https://r2.erweima.ai/imgcompressed/img/compressed_7e880df9e240a9e0c28d744e60a0e49b.webp", 
      },
    ];
  
    return (
      <section className="py-16 bg-gray-50" id="testimonials">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-600">What Our Clients Say</h2>
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