export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">
            Leadership & <span className="text-primary">Coordination</span>
          </h2>
          
          <div className="grid md:grid-cols-1 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary/10">
              <div className="flex items-start space-x-6">
                <div className="bg-primary/10 rounded-xl p-4 flex-shrink-0">
                  <i className="fas fa-handshake text-3xl text-primary"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary mb-3">Student Placement Coordinator</h3>
                  <p className="text-primary font-semibold text-lg mb-4">Jai Shriram Engineering College</p>
                  <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                    Successfully coordinated <strong>10+ recruitment drives</strong> and organized comprehensive placement activities. 
                    Led collaborative efforts between students and industry representatives while providing personalized career guidance. 
                    Demonstrated exceptional leadership, organizational skills, and mentoring capabilities in helping students achieve their career goals.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-secondary text-lg">Key Responsibilities:</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center space-x-2">
                          <i className="fas fa-check-circle text-primary text-sm"></i>
                          <span>Coordinated 10+ recruitment drives</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <i className="fas fa-check-circle text-primary text-sm"></i>
                          <span>Organized placement activities</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <i className="fas fa-check-circle text-primary text-sm"></i>
                          <span>Student career guidance & mentoring</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <i className="fas fa-check-circle text-primary text-sm"></i>
                          <span>Industry-student liaison</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-secondary text-lg">Skills Demonstrated:</h4>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center space-x-2">
                          <i className="fas fa-star text-accent text-sm"></i>
                          <span>Team Leadership</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <i className="fas fa-star text-accent text-sm"></i>
                          <span>Event Coordination</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <i className="fas fa-star text-accent text-sm"></i>
                          <span>Strategic Planning</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <i className="fas fa-star text-accent text-sm"></i>
                          <span>Communication & Collaboration</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">Leadership</span>
                    <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">Coordination</span>
                    <span className="px-4 py-2 bg-success text-success-foreground rounded-full text-sm font-medium">Mentoring</span>
                    <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">Strategic Planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}