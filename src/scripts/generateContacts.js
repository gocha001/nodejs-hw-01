import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";


const generateContacts = async (number) => {

    let contacts = await readContacts();

    for (let i = 1; i <= number; i++) {
      const data = await createFakeContact();
        contacts.push(data);
    };

    await writeContacts(contacts);
};

generateContacts(3);
