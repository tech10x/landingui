const environment = {
    allProjectsApiUrl: process.env.ALL_PROJECTS_API,
    singleProjectApiUrl: process.env.SINGLE_PROJECT_API
}

const envConfig = Object.freeze(environment);

export default envConfig;