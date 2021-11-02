import { getContactsAsync, requestPermissionsAsync, Fields } from "expo-contacts";


export const fetchPhoneNumbers = async () => {
  const { status } = await requestPermissionsAsync();
  if (status === "granted") {
    const { data } = await getContactsAsync({
      fields: [Fields.PhoneNumbers]
    });
    const PhoneNumbers = new Set();
    data.forEach(contact => {
      // contact.phoneNumbers?.map(obj => PhoneNumbers.add(obj.number));
      contact.phoneNumbers?.forEach(numberObj => {
        let number = numberObj.number?.replace(/-|\s|(|)/g, "");
        if (number) {
          if (number.startsWith("0751") || (number.startsWith("+") && !number.startsWith("+91"))) {
            return;
          } else if (number.startsWith("0") && number.length === 11) {
            number = `+91${number.substring(1)}`;
          } else if (number.length === 10) {
            number = `+91${number}`;
          }
          if (number.length === 13) {
            PhoneNumbers.add(number);
          }
        }
      });
    });
    return Array.from(PhoneNumbers);
  }
};
