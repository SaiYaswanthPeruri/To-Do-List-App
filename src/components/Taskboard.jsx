import { useState,useEffect } from 'react';
import ghostlogo from '../assets/ghost-org.png';
import '../styles/Taskboardstyle.css';

export default function Taskboard() {
  const [projects, setProjects] = useState(localStorage.getItem("projects") ? JSON.parse(localStorage.getItem("projects")) : []);

  const addNewProject = () => {
    const projectName = prompt("Enter the new project name:");
    if (projectName && projectName.trim()) {
      setProjects((prevProjects) => [...prevProjects, projectName.trim()]);
    }
  };

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

  return (
    <>
      <div className="task-board">
        <div className="section">
          <div className="section-1">
            <img className="ghost-logo" src={ghostlogo} alt="ghost-logo" />
            <h6>Task boards</h6>
          </div>
          <div className="section-2">
            {projects.map((project, index) => (
              <button key={index} >
                  <span>{project}</span>
              </button>
            ))}
          </div>
          <div className="section-3">
            <button onClick={addNewProject}>
              <div className="project-box">
                <span className='plus-sign'>+</span>
                <h6 className="project-text"> Add new Project</h6>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
