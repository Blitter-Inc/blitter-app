interface userDataType {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  date_joined: string;
}

export const userDataSerializer = ({ phone, date_joined, ...data }: userDataType) => ({
  phoneNumber: phone,
  dateJoined: date_joined,
  ...data,
});

export const generateFormData = (obj: Object) => {
  const formData = new FormData();
  Object.entries((key: string, value: string | Blob) => {
    formData.append(key, value);
  });
  return formData;
};
