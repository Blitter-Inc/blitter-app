interface userDataType {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  date_joined: string;
}

export const userDataSerializer = (data: userDataType) => ({
  phoneNumber: data.phone,
  dateJoined: data.date_joined,
  ...data,
});
