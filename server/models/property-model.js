let property = [
    {
        id: 1,
        owner: "kayinamura@gmail.com", // user id
        status: "available", // sold,available - default is available
        price: 200,
        state: "kgl", // State where property is located
        city: "gasabo", // City where property is located
        address: "kinyinya",
        type: "apartment", // 2 bedroom, 3 bedroom etc
        created_on: new Date()
    },
    {
        id: 2,
        owner: "kayinamura1@gmail.com",
        status: "available",
        price: 1000000,
        state: "kgl",
        city: "kicukiro",
        address: "gikondo",
        type: "house",
        created_on: new Date()
    },
]
export default property;