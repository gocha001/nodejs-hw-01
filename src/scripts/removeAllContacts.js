import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {

    const contacts = [];

    await writeContacts(contacts).catch((error) => console.error(error));
};

removeAllContacts();
