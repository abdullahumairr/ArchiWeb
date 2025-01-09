const Projects = () => {
    const projects = [
      {
        id: 1,
        title: "Modern Living Room",
        description: "A modern living room design with minimalist furniture.",
        image: "https://st.hzcdn.com/simgs/pictures/living-rooms/modern-living-room-debra-ackerbloom-interiors-llc-img~c971036c0bdc4f53_14-9822-1-a92e8d5.jpg",
      },
      {
        id: 2,
        title: "Luxury Villa",
        description: "A luxurious villa with stunning architecture.",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/466378675.jpg?k=47439be8a91e422a1dbef4f02630d6c86f1266a815d7bd8f21b2c5ce0492bcc1&o=&hp=1",
      },
      {
        id: 3,
        title: "Cozy Bedroom",
        description: "A cozy and elegant bedroom with warm tones.",
        image: "https://media.architecturaldigest.com/photos/5eac5fa22105f13b72dede45/master/pass/111LexowAve_Aug18-1074.jpg", 
      },
      {
        id: 4,
        title: "Luxurious Pool",
        description: "A cozy and elegant bedroom with warm tones.",
        image: "https://images.unsplash.com/photo-1496066061287-0e2dd8150a64?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      },
      {
        id: 5,
        title: "Modern Kitchen",
        description: "A cozy and elegant bedroom with warm tones.",
        image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      },
      {
        id: 6,
        title: "Elegant Bathroom",
        description: "A cozy and elegant bedroom with warm tones.",
        image: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      },
    ];
  
    return (
      <section className="py-16 bg-amber-400" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;