import { useState, useEffect, React } from 'react'
import { getImage} from "../../firebase"

import './Technology.scss'

const Technology = (props) => {
    const [image, setImage] = useState("Loading image");

    useEffect(() => {
        console.log("ho");
        const getTechnology = async () => {
            const fetchedImage = await getImage(props.image, props.name);
            setImage(fetchedImage);
        }

        getTechnology();
    }, []);

    console.log(props);
    return (
        <div className="Technology">
            {image ? {image} : "Loading image"}
            <a href={`${props.url}`}>{props.name}</a>
        </div>
    )
}

export default Technology