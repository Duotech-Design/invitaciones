import { faker } from '@faker-js/faker';

export const makeData = (...lens) => {
  const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  };

  const newPerson = () => {
    return {
      nombre: faker.person.firstName(),
      pases: faker.number.int(5), // ajusta según tus necesidades
      numero_mesa: Math.floor(Math.random() * 5) + 1,
      whatsapp: '000000000',
      envioInvitaciones: false,
    };
  };

  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
};
