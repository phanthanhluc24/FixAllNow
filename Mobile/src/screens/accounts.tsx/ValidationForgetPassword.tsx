import * as Yup from 'yup';
export const ForgotPasswordSchema= Yup.object().shape({
    email: Yup.string().email('Email không đúng định dạng!').required('Email không được để trống'),
})