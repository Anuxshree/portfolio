export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm an enthusiastic B.Tech student with intermediate proficiency in programming and Scrum methodologies. 
                My passion lies in building scalable solutions within collaborative team environments.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With hands-on experience in data analysis and machine learning, I'm committed to leveraging 
                data-driven insights to solve complex problems and drive positive outcomes in forward-thinking organizations.
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 pt-4">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone text-primary"></i>
                  <span className="text-slate-600">8754120542</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-envelope text-primary"></i>
                  <span className="text-slate-600">anushreethangavel@gmail.com</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-secondary mb-6">Education</h3>
              
              {/* Education Timeline */}
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6 pb-6">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-secondary">B.Tech</h4>
                    <p className="text-primary font-medium">Jai Shriram Engineering College</p>
                    <p className="text-slate-600">CGPA: 8.3 • 2022–Present</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-slate-300 pl-6 pb-6">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-secondary">HSC</h4>
                    <p className="text-slate-700">Universal Matric Hr. Sec. School</p>
                    <p className="text-slate-600">80% • 2022</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-slate-300 pl-6">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-secondary">SSLC</h4>
                    <p className="text-slate-700">Universal Matric Hr. Sec. School</p>
                    <p className="text-slate-600">72% • 2020</p>
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
