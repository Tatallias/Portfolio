import { useState, useEffect, React } from 'react'

import './Work.scss'
import { Technology } from '../../components';
import { db } from "../../firebase"
import { collection, getDocs } from "firebase/firestore";

const Work = () => {
    const workCollectionRef = collection(db, "work");
    const [workExperiences, changeWork] = useState([]);

    useEffect(() => {
        const getWorkExperiences = async () => {
            const data = await getDocs(workCollectionRef);
            changeWork(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }

        getWorkExperiences();
    }, []);


    return (
        <ul>
            {workExperiences.map((work) => {
                var startDate = new Date(work.startDate.seconds * 1000).toLocaleDateString("fr-CH");
                return <li className="Work" key={work.id}>
                    <h1>{work.title}</h1>
                    <h2>{work.company}</h2>
                    <p>{startDate}</p>
                    {work.techStack.map((tech) => {
                            return <Technology name={tech.name} image={tech.image} url={tech.url}></Technology>
                        })
                    }
                </li>
            })}
        </ul>
    )
}

export default Work