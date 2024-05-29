import envConfig from '@/envConfig';
import axios from 'axios';


const getProjectData = async () => {

    const res = await axios.get(envConfig.apiUrl);
    const projectData = await res.data;
    return projectData;

}

export default getProjectData;