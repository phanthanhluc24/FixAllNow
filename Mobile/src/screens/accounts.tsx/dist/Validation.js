"use strict";
exports.__esModule = true;
exports.SignupSchema = void 0;
var Yup = require("yup");
exports.SignupSchema = Yup.object().shape({
    email: Yup.string().email('Email không hợp lệ').required('* Email không được rỗng'),
    password: Yup.string()
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự!')
        .max(20, 'Mật khẩu phải có tối đa 20 ký tự')
        .required('* Mật khẩu không được rỗng')
});
