import { useState } from "react";

type TabType = "internships" | "certifications" | "achievements";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabType>("internships");

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
          
          {/* Tabbed Interface */}
          <div className="flex flex-wrap justify-center mb-12 bg-white rounded-xl p-2 shadow-lg max-w-2xl mx-auto">
            <button 
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "internships" 
                  ? "bg-primary text-white" 
                  : "text-slate-600 hover:text-primary"
              }`}
              onClick={() => handleTabClick("internships")}
            >
              Internships
            </button>
            <button 
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "certifications" 
                  ? "bg-primary text-white" 
                  : "text-slate-600 hover:text-primary"
              }`}
              onClick={() => handleTabClick("certifications")}
            >
              Certifications
            </button>
            <button 
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "achievements" 
                  ? "bg-primary text-white" 
                  : "text-slate-600 hover:text-primary"
              }`}
              onClick={() => handleTabClick("achievements")}
            >
              Achievements
            </button>
          </div>
          
          {/* Internships Tab */}
          {activeTab === "internships" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <i className="fas fa-chart-line text-2xl text-primary"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Data Analyst Intern</h3>
                    <p className="text-primary font-medium mb-3">Infosys Springboard</p>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Built interactive dashboards analyzing GDP & productivity of Indian cities using Power BI and DAX. 
                      Performed data preprocessing with SQL & Excel.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Power BI</span>
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded text-sm">SQL</span>
                      <span className="px-2 py-1 bg-success/10 text-success rounded text-sm">Excel</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 rounded-lg p-3">
                    <i className="fas fa-robot text-2xl text-accent"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Machine Learning Intern</h3>
                    <p className="text-accent font-medium mb-3">Altruisty Innovation</p>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Developed an intelligent project recommender system using Natural Language Processing. 
                      Collaborated effectively in a 4-member agile team environment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">NLP</span>
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded text-sm">Python</span>
                      <span className="px-2 py-1 bg-success/10 text-success rounded text-sm">Teamwork</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-success/10 rounded-lg p-3">
                    <i className="fas fa-handshake text-2xl text-success"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Student Placement Coordinator</h3>
                    <p className="text-success font-medium mb-3">Jai Shriram Engineering College</p>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Coordinated 10+ recruitment drives, organized placement activities, and guided students through career development. 
                      Led collaborative efforts between students and industry representatives.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Leadership</span>
                      <span className="px-2 py-1 bg-accent/10 text-accent rounded text-sm">Coordination</span>
                      <span className="px-2 py-1 bg-success/10 text-success rounded text-sm">Mentoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Certifications Tab */}
          {activeTab === "certifications" && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Cyber Security</h3>
                <p className="text-primary font-medium">NPTEL</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-database text-2xl text-accent"></i>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Data Warehouse</h3>
                <p className="text-accent font-medium">Microsoft</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-chart-bar text-2xl text-success"></i>
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">Power BI</h3>
                <p className="text-success font-medium">Infosys Springboard</p>
              </div>
            </div>
          )}
          
          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-secondary mb-4">Academic & Professional</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-trophy text-yellow-500 text-xl"></i>
                    <span className="text-slate-600">First Rank – Thulir State-Level Talent Test</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-medal text-yellow-500 text-xl"></i>
                    <span className="text-slate-600">Gold Medal – Throw Ball Tournament</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-users text-primary text-xl"></i>
                    <span className="text-slate-600">Student Placement Coordinator - Coordinated 10+ recruitment drives</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-secondary mb-4">Workshops & Training</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-shield-alt text-primary text-xl"></i>
                    <span className="text-slate-600">National-level Ethical Hacking Workshop</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-brain text-accent text-xl"></i>
                    <span className="text-slate-600">Machine Learning Workshop (HENOSIS 2K23)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-code text-success text-xl"></i>
                    <span className="text-slate-600">Web Development Training (NXTLOGIC)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-code text-success text-xl"></i>
                    <span className="text-slate-600">Python with Django Training (ACCENT TECHNO SOFT)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
