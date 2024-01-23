"use strict";
exports.__esModule = true;
exports.ForgotPasswordSchema = void 0;
var Yup = require("yup");
exports.ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Không đúng định dạng!').required('Bắt buộc')
});
