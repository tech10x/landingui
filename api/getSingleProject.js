import envConfig from '@/envConfig';
import axios from 'axios';


const getSingleProject = async (id) => {
    const urlToBeFetch = envConfig.singleProjectApiUrl + id;
    try {

        const res = await axios.get(urlToBeFetch);
        const singleprojectData = await res.data;
        return singleprojectData;

    } catch (error) {
        console.log(error);
        throw new Error("Sorry we are unable to fetching");
    }


}

export default getSingleProject;