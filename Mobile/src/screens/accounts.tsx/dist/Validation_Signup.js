"use strict";
exports.__esModule = true;
exports.Signup_Schema = void 0;
var Yup = require("yup");
exports.Signup_Schema = Yup.object().shape({
    role: Yup.string()
        .oneOf(['repairman', 'repairman finder'], 'Please select a valid job')
        .defined(),
    job: Yup.string().required('Please select a job'),
    full_name: Yup.string()
        .min(5, 'Tên phải có ít nhất 5 ký tự!')
        .max(30, 'Tên phải có tối đa 30 ký tự!')
        .required('Bắt buộc'),
    email: Yup.string().email('Invalid email').required('Required'),
    number_phone: Yup.string()
        .min(10, 'Điện thoại phải có ít nhất 10 ký tự!')
        .max(10, 'Điện thoại phải có tối đa 10 ký tự!')
        .required('Bắt buộc'),
    password: Yup.string()
        .min(8, 'Mật khẩu cần dài ít nhất 8 ký tự!')
        .max(20, 'Mật khẩu phải có tối đa 20 ký tự!')
        .required('Bắt buộc'),
    address: Yup.string()
        .min(10, 'Địa chỉ phải có ít nhất 10 ký tự!')
        .max(100, 'Địa chỉ phải có tối đa 100 ký tự!')
        .required('Bắt buộc')
});
