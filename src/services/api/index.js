export async function getJobs() {
    await stall(500);
    return [
        {
            "id": "lskjdfdfg4343g",
            "title": "sometitle",
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
            "id": "lskjdfdfg4343g",
            "title": "sometitle",
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
            "id": "lskjdfdfg4343g",
            "title": "sometitle",
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
        }
    ];
}

async function stall(stallTime = 3000) {
    await new Promise(resolve => setTimeout(resolve, stallTime));
}