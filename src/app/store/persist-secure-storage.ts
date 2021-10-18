import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';

const createSecureStorage = (options: {
  replaceCharacter?: string;
  replacer?: (key: string, replaceCharacter: string) => string;
} = {}) => {
  const {
    replaceCharacter = "_",
    replacer = defaultReplacer,
    ...expoSecureStoreOptions
  } = options;

  return {
    getItem: (key: string) => getItemAsync(replacer(key, replaceCharacter), expoSecureStoreOptions),
    setItem: (key: string, value: any) => setItemAsync(replacer(key, replaceCharacter), value, expoSecureStoreOptions),
    removeItem: (key: string) => deleteItemAsync(replacer(key, replaceCharacter), expoSecureStoreOptions),
  };
};

function defaultReplacer(key: string, replaceCharacter: string) {
  return key.replace(/[^a-z0-9.\-_]/gi, replaceCharacter);
}

export default createSecureStorage;
