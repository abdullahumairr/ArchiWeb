const Projects = () => {
    const projects = [
      {
        id: 1,
        title: "Luxury Apartement",
        description: "Your apartment design becomes more elegant and luxurious",
        image: "https://images.squarespace-cdn.com/content/v1/57963b2c59cc6872291be7b2/1733805681812-J26UBY1YOWKYS5ZXBVBM/6+Desain+Kamar+Apartemen+Mewah+yang+Elegan+dan+Nyaman.jpg"
      },
      {
        id: 2,
        title: "Modern Workspaces",
        description: "Create your modern workspace to make your work more comfortable.",
        image: "https://www.thespruce.com/thmb/qi57swsOOZgvI0g0oCrCDkTd6Po=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CowHollow-30-731b2aa823ea44478bda28ae3611758b.jpg",
      },
      {
        id: 3,
        title: "Modern Classrom",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam auctor orci turpis donec pulvinar praesent.",
        image: "https://static.vecteezy.com/system/resources/previews/033/472/623/large_2x/interior-of-modern-classroom-with-white-walls-concrete-floor-rows-of-green-chairs-and-empty-whiteboard-3d-rendering-ai-generated-pro-free-photo.jpg", 
      },
      {
        id: 4,
        title: "Futuristic Office",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam auctor orci turpis donec pulvinar praesent.",
        image: "https://imgcdn.stablediffusionweb.com/2024/9/11/e51dfa90-b72f-48b8-95c1-79f348eada85.jpg", 
      },
      {
        id: 5,
        title: "Modern Family Room",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam auctor orci turpis donec pulvinar praesent.",
        image: "https://www.decorilla.com/online-decorating/wp-content/uploads/2023/03/Contemporary-family-room-by-Decorilla.jpg", 
      },
      {
        id: 6,
        title: "Aesthetic Garage",
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit. Etiam auctor orci turpis donec pulvinar praesent.",
        image: "https://smartspace.com.ua/userfls/clauses/photo_id/5398_kak-obustroit-sovremennyy.webp", 
      },
    ];
  
    return (
      <section className="py-16 bg-gray-300" id="projects">
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
                  <h3 className="text-xl font-bold mb-2 text-gray-700">{project.title}</h3>
                  <p className="text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;