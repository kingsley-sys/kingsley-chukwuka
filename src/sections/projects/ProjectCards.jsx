import styles from './ProjectStyles.module.css';
import airplane from '../../assets/airplane.png';
import ProjectCard from '../../common/ProjectCard';

const ProjectCards = () => {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard src={airplane} link={"https://github.com/kingsley-sys/web-flight"} h3={"Airplane Website"}/>
          <ProjectCard src={airplane} link={"https://github.com/kingsley-sys/web-flight"} h3={"Airplane Website"}/>
          <ProjectCard src={airplane} link={"https://github.com/kingsley-sys/web-flight"} h3={"Airplane Website"}/>
        </div>
    </section>
  )
}

export default ProjectCards