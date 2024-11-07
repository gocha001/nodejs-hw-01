import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {

    let contacts = await readContacts();

    if (!contacts.length) {
        return;
    }
    contacts.pop();

    await writeContacts(contacts);
};

removeLastContact();
