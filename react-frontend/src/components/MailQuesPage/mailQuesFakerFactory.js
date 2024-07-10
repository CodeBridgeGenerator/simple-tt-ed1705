import { faker } from '@faker-js/faker';
export default (user, count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
            name: faker.lorem.sentence(''),
            type: faker.lorem.sentence(''),
            data: faker.lorem.sentence(''),
            from: faker.lorem.sentence(''),
            recipients: faker.lorem.sentence(''),
            status: faker.lorem.sentence(''),
            errors: faker.lorem.sentence(''),
            template: faker.lorem.sentence(''),
            content: faker.lorem.sentence(''),

            updatedBy: user._id,
            createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
