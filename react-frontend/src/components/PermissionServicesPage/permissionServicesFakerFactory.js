import { faker } from '@faker-js/faker';
export default (user, count, profileIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
            profile: profileIds[i % profileIds.length],
            service: faker.lorem.sentence(''),
            read: faker.datatype.boolean(),
            readAll: faker.datatype.boolean(),
            updateOwn: faker.datatype.boolean(),
            updateAll: faker.datatype.boolean(),
            deleteOwn: faker.datatype.boolean(),
            deleteAll: faker.datatype.boolean(),

            updatedBy: user._id,
            createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
