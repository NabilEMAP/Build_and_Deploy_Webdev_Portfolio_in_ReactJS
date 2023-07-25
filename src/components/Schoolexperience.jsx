import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { schoolexperiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ schoolexperience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        //background: '#1d1836',
        background: '#181F36',
        color: '#fff'
      }}
      contentArrowStyle={{ borderStyle: '7px solid #232631' }}
      date={schoolexperience.date}
      iconStyle={{ background: schoolexperience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={schoolexperience.icon}
            alt={schoolexperience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }>
      <div>
        <h3 className="text-white text-[24px] font-bold">{schoolexperience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{schoolexperience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {schoolexperience.points.map((point, index) => (
          <li key={`schoolexperience-point-$(index)`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Schoolexperience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I learned so far</p>
        <h2 className={styles.sectionHeadText}>School experience</h2>
      </motion.div>
      <div>
        <VerticalTimeline>
          {schoolexperiences.map((schoolexperience, index) => (
            <ExperienceCard key={index} schoolexperience={schoolexperience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Schoolexperience, "school")