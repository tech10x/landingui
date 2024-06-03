import envConfig from '@/envConfig';
import axios from 'axios';


const getProjectData = async () => {
    try {

        const res = await axios.get(envConfig.allProjectsApiUrl);
        const projectData = await res.data;
        return projectData;

    } catch (error) {
        console.log(error);
        throw new Error("Sorry we are unable to fetching");
    }


}

export default getProjectData;