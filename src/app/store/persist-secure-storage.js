import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store';

const createSecureStorage = (options = {}) => {
  const replaceCharacter = options.replaceCharacter || "_";
  const replacer = options.replacer || defaultReplacer;

  return {
    getItem: (key) => getItemAsync(replacer(key, replaceCharacter), options),
    setItem: (key, value) => setItemAsync(replacer(key, replaceCharacter), value, options),
    removeItem: (key) => deleteItemAsync(replacer(key, replaceCharacter), options),
  };
};

function defaultReplacer(key, replaceCharacter) {
  return key.replace(/[^a-z0-9.\-_]/gi, replaceCharacter);
}

export default createSecureStorage;
