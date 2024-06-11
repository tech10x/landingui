import envConfig from "@/envConfig";
import axios from "axios";

const sendContactForm = async (
  clientName,
  clientEmail,
  clientContactNo,
  neededSolution,
  projectBrief
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
    const res = await axios.post(envConfig.emailjsApiUrl, data);
    alert("Succesfull!!!!");
    return res;
  } catch (error) {
    alert("Failed!!!");
    console.log(error);
  }
};

export default sendContactForm;
