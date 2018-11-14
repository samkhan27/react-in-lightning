const configureApi = service => ({
    findAll: () => service.getRecords({
        objectName: 'Contact',
        fields: ['Id, Name'],
    }),
    findByName: name => service.getRecords({
        objectName: 'Contact',
        fields: ['Id, Name'],
        whereClause: `WHERE Name LIKE '%${name}%' LIMIT 20`
    }),
});

export default (service) => {
    const api = configureApi(service);
    return api;
};
