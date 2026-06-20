import { faker } from '@faker-js/faker/locale/pt_BR'    

export const DataFactory = {
    user: () => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        postalCode: faker.location.zipCode('#####-###'),
    }),
    checkoutInfo: () => ({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        postalCode: faker.location.zipCode('#####-###'),
    }),
}