const Services = () => {
    const services = [
      { name: "Planning", color: "text-amber-500", icon: "📃" },
      { name: "Interior", color: "text-amber-500", icon: "🖥️" },
      { name: "Exterior", color: "text-amber-500", icon: "🏡" },
    ];
  
    return (
      <section className="py-16 bg-gray-300" id="services">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={"text-2xl font-semibold text-gray-400" + service.color }>{service.name}</h3>
              <p className="mt-2 text-black/70">Use us to build your home better and more modern</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;