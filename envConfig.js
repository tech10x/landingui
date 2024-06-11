const environment = {
    allProjectsApiUrl: process.env.ALL_PROJECTS_API,
    singleProjectApiUrl: process.env.SINGLE_PROJECT_API,
    emailjsApiUrl: process.env.NEXT_PUBLIC_EMAILJS_API_URL,
    emailjsApiKey: process.env.NEXT_PUBLIC_PUBLIC_API_KEY,
    emailjsServiceId: process.env.NEXT_PUBLIC_SERVICE_ID,
    emailjsTemplateId: process.env.NEXT_PUBLIC_TEMPLATE_ID
}

const envConfig = Object.freeze(environment);

export default envConfig;