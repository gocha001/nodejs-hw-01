import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const addOneContact = async () => {

    let contacts = await readContacts().catch((error) => console.error(error));

    const data = await createFakeContact();
    contacts.push(data);

    await writeContacts(contacts).catch((error) => console.error(error));
};

addOneContact();
