export function ask(email: string) {
  console.debug("ASK CODE", email);
  return new Promise((resolve) => resolve("Success email"));
}

export function codeConfirm(code: string) {
  console.debug("CODE", code);
  return new Promise((resolve) => resolve("Success code"));
}

export function resetPassword(password: string) {
  console.debug("PASSWORD", password);
  return new Promise((resolve) => resolve("Success password"));
}
