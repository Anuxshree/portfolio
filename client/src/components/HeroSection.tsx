export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="absolute inset-0 bg-secondary/50" />
      
      <div className="relative z-10 text-center text-white px-4">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-accent">Anushree T</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-slate-200">
            Aspiring Data Scientist | Machine Learning Enthusiast
          </p>
          <p className="text-lg md:text-xl mb-12 text-slate-300 max-w-2xl mx-auto">
            Building scalable solutions with Python, ML, and Data Analytics. 
            Passionate about turning data into actionable insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.linkedin.com/in/anushree-t-529b32255" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-linkedin mr-2"></i>
              Connect on LinkedIn
            </a>
            <a 
              href="https://github.com/Anuxshree" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-github mr-2"></i>
              View GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}
