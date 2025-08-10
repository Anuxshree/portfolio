interface Project {
  title: string;
  description: string;
  tags: string[];
  backgroundImage: string;
  category: string;
  demoUrl?: string;
  githubUrl: string;
}

export default function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "AI Project Proposal Generator",
      description: "Smart project idea generator using Natural Language Processing to create innovative AI/ML project proposals. Built with Python and advanced NLP techniques.",
      tags: ["Python", "NLP", "AI/ML"],
      backgroundImage: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "AI/ML",
      githubUrl: "https://github.com/Anuxshree/pitch-map"
    },
    {
      title: "Snapnplate Detection",
      description: "Advanced object detection system using OpenCV and Machine Learning for vehicle tracking and automatic license plate identification with high accuracy.",
      tags: ["OpenCV", "Machine Learning", "Object Detection"],
      backgroundImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      category: "Computer Vision",
      githubUrl: "https://github.com/Anuxshree/snapnplate"
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "python":
        return "bg-primary/10 text-primary";
      case "nlp":
        return "bg-accent/10 text-accent";
      case "ai/ml":
        return "bg-success/10 text-success";
      case "opencv":
        return "bg-success/10 text-success";
      case "machine learning":
        return "bg-primary/10 text-primary";
      case "object detection":
        return "bg-accent/10 text-accent";
      default:
        return "bg-slate/10 text-slate-600";
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">
            Featured <span className="text-primary">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                {/* Project Image */}
                <div 
                  className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden"
                  style={{
                    backgroundImage: `url('${project.backgroundImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                      {project.category}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getTagColor(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors duration-300"
                    >
                      <i className="fab fa-github mr-2"></i>Code
                    </a>
                    <button className="flex-1 py-2 px-4 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-300">
                      <i className="fas fa-external-link-alt mr-2"></i>Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
