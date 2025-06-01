import { api } from "@/shared/api";

export function forgotPw(email: string) {
  return api.post("/forgot-pw", { email });
}

export function verifyCode(email: string, code: string) {
  return api.post("/verify-code", {
    email,
    code,
  });
}

export function resetPassword(password: string) {
  return api.post("/reset-pw", { new_password: password });
}
