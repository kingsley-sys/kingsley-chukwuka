import styles from './SkillsStyles.module.css';
import SkillsList from '../../common/SkillsList';
import checkMarkIcon from '../../assets/checkmark-light.svg'

function Skills() {

    return (
        <section id="skills" className={styles.container}>
           <h1 className='sectionTitle'>Skills</h1>
           <div className={styles.skillList}>
              <SkillsList src={checkMarkIcon} skill="HTML"/>
              <SkillsList src={checkMarkIcon} skill="CSS"/>
              <SkillsList src={checkMarkIcon} skill="JavaScript"/>
              <SkillsList src={checkMarkIcon} skill="TypeScript"/>
           </div>
           <hr />
           <div className={styles.skillList}>
              <SkillsList src={checkMarkIcon} skill="React"/>
              <SkillsList src={checkMarkIcon} skill="Vue"/>
              <SkillsList src={checkMarkIcon} skill="Tailwind CSS"/>
           </div>
           <hr />
           <div className={styles.skillList}>
              <SkillsList src={checkMarkIcon} skill="Git"/>
              <SkillsList src={checkMarkIcon} skill="jest"/>
              <SkillsList src={checkMarkIcon} skill="Redux"/> 
           </div>

           
        </section>
    )

}

export default Skills