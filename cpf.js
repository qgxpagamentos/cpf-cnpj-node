"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.isValid = exports.strip = exports.verifierDigit = void 0;
const REJECT_LIST = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
];
const STRICT_STRIP_REGEX = /[.-]/g;
const LOOSE_STRIP_REGEX = /[^\d]/g;
/**
 *  Verifica o dígito.
 * @export
 * @param {string} numbers
 * @returns {number}
 */
function verifierDigit(numbers) {
    const numberList = numbers.split('').map((number) => parseInt(number, 10));
    const modulus = numberList.length + 1;
    const multiplied = numberList.map((number, index) => number * (modulus - index));
    const mod = multiplied.reduce((buffer, number) => buffer + number) % 11;
    return mod < 2 ? 0 : 11 - mod;
}
exports.verifierDigit = verifierDigit;
/**
 * Remove os caracteres especiais.
 * @export
 * @param {string} cpf
 * @param {boolean} [isStrict]
 * @returns {string}
 */
function strip(cpf, isStrict = false) {
    const regex = isStrict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
    return (cpf || '').toString().replace(regex, '');
}
exports.strip = strip;
/**
 * Valida o CPF.
 * @export
 * @param {string} cpf
 * @param {boolean} [isStrict]
 * @returns {boolean}
 */
function isValid(cpf, isStrict = false) {
    const stripped = strip(cpf, isStrict);
    if (!stripped) {
        return false;
    }
    if (stripped.length !== 11) {
        return false;
    }
    if (REJECT_LIST.includes(stripped)) {
        return false;
    }
    let numbers = stripped.substring(0, 9);
    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);
    return numbers.substring(-2) === stripped.substring(-2);
}
exports.isValid = isValid;
/**
 * Transforma a entrada em um cpf bonito
 * @export
 * @param {string} cpf the CPF.
 * @returns {string} the formatted CPF.
 */
function format(cpf) {
    return strip(cpf).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}
exports.format = format;
