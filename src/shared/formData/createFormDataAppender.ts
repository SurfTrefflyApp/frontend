export function createFormDataAppender<T extends Record<string, unknown>>() {
  return (data: T): FormData => {
    const formData = new FormData();

    for (const key in data) {
      const value = data[key];
      if (value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === "object" && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else if (value !== undefined) {
        formData.append(key, String(value));
      }
    }

    return formData;
  };
}
