import { faker } from '@faker-js/faker';
export default (user, count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
            name: faker.date.past(''),
            type: faker.date.past(''),
            data: faker.date.past(''),
            service: faker.date.past(''),
            start: faker.date.past(''),
            end: faker.date.past(''),

            updatedBy: user._id,
            createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
