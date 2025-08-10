export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Anushree T</h3>
            <p className="text-slate-300 mb-6">
              Aspiring Data Scientist | Machine Learning Enthusiast
            </p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/anushree-t-529b32255" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a 
                href="https://github.com/Anuxshree" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a 
                href="mailto:anushreethangavel@gmail.com" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Anushree T. All rights reserved. Built with passion and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
