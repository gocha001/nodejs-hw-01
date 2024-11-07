import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {

    let contacts = await readContacts().catch((error) => console.error(error));

    return contacts.length;
};

console.log(await countContacts());
