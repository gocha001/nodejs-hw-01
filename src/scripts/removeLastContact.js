import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {

    let contacts = await readContacts().catch((error) => console.error(error));

    if (!contacts.length) {
        return;
    }
    contacts.pop();

    await writeContacts(contacts).catch((error) => console.error(error));
};

removeLastContact();
