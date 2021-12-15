import axios from "axios";
import { getIdToken } from "firebase/auth";


const DOMAIN = process.env.REACT_APP_API_DOMAIN;
// const DOMAIN = 'http://localhost:5000';

export async function getJobs(title, location) {
    try {
        const url = getUrl('find-jobs');
        const config = {
            ...(title && { title: title }),
            ...(location && { location: location }),
        };
        const response = await axios.post(url, config);
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function saveFavorite(user, jobId) {
    try {
        // Do things
        return true;
    } catch (e) {
        return false;
    }
}

export async function createUser(user) {
    if (user) {
        const url = getUrl('create-user');
        const config = {
            headers: await getAuthHeader(user),
        };
        const data = {
            data: {
                salary: '50000'
            }
        }
        try {
            await axios.post(url, data, config);
            console.log('Register user');
        } catch (e) {
            // Do we care if this fails?
        }
    } else {
        // No need to do anything if there is no user
    }
}

export async function getFavorites(user) {
    const url = getUrl('favorites');
    if (user) {
        const config = {
            headers: await getAuthHeader(user)
        };
        const response = await axios.get(url, config);
        return response.data;
    } else {
        // User is not logged in
        return [];
    }
}

export async function postJob(user, jobData) {
    const url = getUrl('create-job');
    try {
        const config = {
            headers: await getAuthHeader(user),
        };
        const response = await axios.post(url, jobData, config);
        return true;
    } catch (e) {
        return false;
    }
}

function getUrl(endpoint) {
    return `${DOMAIN}/${endpoint}`;
}

async function getAuthHeader(user) {
    if (user) {
        return {
            'authorization': `Bearer ${await getIdToken(user)}`
        }
    }
}