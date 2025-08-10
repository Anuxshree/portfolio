import { useEffect, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const [animated, setAnimated] = useState(false);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      icon: "fas fa-code",
      skills: [
        { name: "Python", percentage: 85 },
        { name: "SQL", percentage: 80 }
      ]
    },
    {
      title: "Web",
      icon: "fas fa-globe",
      skills: [
        { name: "HTML", percentage: 90 },
        { name: "CSS", percentage: 85 }
      ]
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Power BI", percentage: 88 },
        { name: "Excel", percentage: 85 }
      ]
    },
    {
      title: "Specialization",
      icon: "fas fa-brain",
      skills: [
        { name: "Machine Learning", percentage: 82 },
        { name: "Data Science", percentage: 80 }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">
            My <span className="text-primary">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <i className={`${category.icon} text-4xl text-primary mb-4`}></i>
                  <h3 className="text-xl font-semibold text-secondary">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-600">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full skill-progress"
                          style={{ 
                            width: animated ? `${skill.percentage}%` : "0%"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
