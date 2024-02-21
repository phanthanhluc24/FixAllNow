"use strict";
exports.__esModule = true;
exports.NewPasswordSchema = void 0;
var Yup = require("yup");
exports.NewPasswordSchema = Yup.object().shape({
    newpassword: Yup.string()
        .min(8, 'Mật khẩu phải có ít nhất 8 ký tự!')
        .max(20, 'Mật khẩu phải có tối đa 20 ký tự')
        .required('Trường này là bắt buộc')
});
