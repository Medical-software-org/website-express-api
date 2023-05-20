import * as yup from "yup";

export const emailListSignUp = yup.object({
  institution: yup.string().required(),
  email: yup.string().email().required(),
});
