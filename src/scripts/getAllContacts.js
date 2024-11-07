import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    let contacts = await readContacts().catch((error) => console.error(error));
    return contacts;
};

console.log(await getAllContacts());
