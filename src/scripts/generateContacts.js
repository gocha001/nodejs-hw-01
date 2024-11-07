import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";
import { readContacts } from "../utils/readContacts.js";


const generateContacts = async (number) => {

    let contacts = await readContacts().catch(error => console.error(error));

    for (let i = 1; i <= number; i++) {
      const data = await createFakeContact();
        contacts.push(data);
    };

    await writeContacts(contacts).catch((error) => console.error(error));
};

generateContacts(3);
