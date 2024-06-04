const environment = {
    allProjectsApiUrl: process.env.ALL_PROJECTS_API,
    allProjectsApiUrl_2: process.env.NEXT_PUBLIC_ALL_PROJECTS_API_CLIENT,
    singleProjectApiUrl: process.env.SINGLE_PROJECT_API
}

const envConfig = Object.freeze(environment);

export default envConfig;