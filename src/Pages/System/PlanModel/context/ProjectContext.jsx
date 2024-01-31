import { createContext, useContext, useState } from "react";
export const ProjectContext = createContext();

export default function ProjectContextProvier({ children }) {
   const [projects,setProjects] = useState([]) 
  return <ProjectContext.Provider value={{projects,setProjects}}>
    {children}
  </ProjectContext.Provider>;
}

export const useProjectContext = () => useContext(ProjectContext)