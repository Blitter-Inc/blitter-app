export const generateFormData = (obj: Object) => {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]: [string, FormDataEntryValue]) => {
    if (value) {
      formData.append(key, value);
    }
  });
  return formData;
};
