import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const constants = JSON.parse(data);
    return constants;
};

