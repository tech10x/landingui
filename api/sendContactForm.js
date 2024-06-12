import envConfig from "@/envConfig";
import axios from "axios";

const sendContactForm = async (
  clientName,
  clientEmail,
  clientContactNo,
  neededSolution,
  projectBrief,
  callback
) => {
  const serviceId = envConfig.emailjsServiceId;
  const templateId = envConfig.emailjsTemplateId;
  const publicKey = envConfig.emailjsApiKey;

  var data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: clientName,
      from_email: clientEmail,
      contact: clientContactNo,
      solution: neededSolution,
      message: projectBrief,
    },
  };

  try {
    await axios.post(envConfig.emailjsApiUrl, data);
    let success = 'success';
    callback(success);
  } catch (error) {
    if(error){
      let failed = 'failed';
      callback(failed);
    }
     console.log(error);
  }
};

export default sendContactForm;
