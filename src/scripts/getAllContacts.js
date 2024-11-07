import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
    let contacts = await readContacts();
    return contacts;
};

console.log(await getAllContacts());
