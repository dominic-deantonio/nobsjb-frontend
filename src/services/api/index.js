import axios from "axios";
import { getIdToken } from "firebase/auth";

const DOMAIN = process.env.REACT_APP_API_DOMAIN;

export async function getJobs(user, what, where) {
    const url = getUrl('find-jobs');
    const payload = {
        ...(user && { idToken: await getIdToken(user) }),
        ...(what && { what: what }),
        ...(where && { where: where }),
    };
    console.log(payload);
    try {
        const response = await axios.get(
            url.toString(),
        );
        console.log(response);
    } catch (e) {
        console.log(e);
    }

    toObject('hey', 'ho');

    await stall(500);
    return [
        {
            "id": "1",
            "title": "sometitle1",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "2",
            "title": "sometitle2",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "3",
            "title": "sometitle3",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "4",
            "title": "sometitle4",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "5",
            "title": "sometitle5",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "6",
            "title": "sometitle6",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "7",
            "title": "sometitle7",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "8",
            "title": "sometitle8",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "9",
            "title": "sometitle9",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "10",
            "title": "sometitle10",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "11",
            "title": "sometitle11",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
        {
            "id": "12",
            "title": "sometitle12",
            "salary": 122000,
            "companyname": "amazon",
            "location": "some address",
            "payrating": "bad",
            "payratinginfo": "This is below your desired salary",
            "details": {
                "benefits": "Health Insurance",
                "type": "Commission"
            },
            "qualifications": "some long string about what the job requires like a degree and whatever",
            "description": "Another very long string that has some formatting or something IDK",
            "userdidapply": false,
            "userapplieddate": 1234567890,
            "isfavorite": false
        },
    ];
}

async function getFavorites(user){
    const url = getUrl('favorites');
    if(user){
        const response = await axios.get(url);
    }else{
        // User is not logged in
        return [];
    }
}

async function stall(stallTime = 3000) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}

function toObject(...names){
    for (let i=0; i<names.length; i++) console.log(names[i]);
}

function getUrl(endpoint) {
    return `${DOMAIN}/${endpoint}`;
}