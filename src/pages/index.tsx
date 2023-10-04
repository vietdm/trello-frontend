import {TProjects} from "@/@types/project";
import {Box} from "@/components/ui/Box";
import {ProjectItem} from "@/components/pages/home/ProjectItem";
import {GlobalLayout} from "@/components/layouts/GlobalLayout";
import {Button} from "@/components/ui/Button";
import {CreateProjectModal} from "@/components/modals/CreateProject";
import {Text} from "@/components/ui/Text";
import {useProjectAllQuery} from "@/queries/project/all";
import {useEffect, useState} from "react";

export default function Home() {
  const [isOpenModalCreateProject, setOpenModalCreateProject] = useState<boolean>(false);
  const [projects, setProjects] = useState<TProjects>([]);
  const allProject = useProjectAllQuery();

  useEffect(() => {
    if (allProject) {
      setProjects(allProject.data.projects);
    }
  }, [allProject]);

  return (
    <GlobalLayout
      bgSrc='https://trello-backgrounds.s3.amazonaws.com/5acc9426bfa043c72b56488a/1920x1920/7b5d121c88219628ecb1f0ec46283017/shutterstock_134707556.jpeg.jpg'
      titleRightEl={<Button onClick={() => setOpenModalCreateProject(true)}>Create Project</Button>}
      title="Your Boards">
      <Box>
        {projects.map((project, index) => (
          <ProjectItem
            key={`board-${index}`}
            project={project}
          />
        ))}
        {projects.length === 0 && (
          <Text align="center" className='bg-white py-[15px] rounded-xl'>No projects!</Text>
        )}
      </Box>
      <CreateProjectModal isOpen={isOpenModalCreateProject} onClose={() => setOpenModalCreateProject(false)} />
    </GlobalLayout>
  )
}
