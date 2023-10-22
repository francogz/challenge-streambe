import * as yup from "yup";

export const loginSchema = yup.object().shape({
    userName: yup.string().nullable().required("Username requerido"),

    password: yup
        .string()
        .nullable()
        .required("Password requerido")
        .min(5, "Mínimo 5 caracteres"),
});
