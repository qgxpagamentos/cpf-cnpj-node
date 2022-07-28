"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.isValid = exports.strip = exports.verifierDigit = void 0;
const REJECT_LIST = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999',
];
const STRICT_STRIP_REGEX = /[-/.]/g;
const LOOSE_STRIP_REGEX = /[^\d]/g;
/**
 * Verifica o dígito.
 * @export
 * @param {string} numbers
 * @returns {number}
 */
function verifierDigit(numbers) {
    let index = 2;
    const reverse = numbers
        .split('')
        .reduce((buffer, number) => [parseInt(number, 10)].concat(buffer), []);
    const sum = reverse.reduce((buffer, number) => {
        buffer += number * index;
        index = index === 9 ? 2 : index + 1;
        return buffer;
    }, 0);
    const mod = sum % 11;
    return mod < 2 ? 0 : 11 - mod;
}
exports.verifierDigit = verifierDigit;
/**
 * Remove os caracteres especiais.
 * @export
 * @param {string} cnpj
 * @param {boolean} [isStrict]
 * @returns {string}
 */
function strip(cnpj, isStrict = false) {
    const regex = isStrict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
    return (cnpj || '').toString().replace(regex, '');
}
exports.strip = strip;
/**
 * Valida o CNPJ.
 *
 * @export
 * @param {string} cnpj
 * @param {boolean} [isStrict]
 * @returns {boolean}
 */
function isValid(cnpj, isStrict = false) {
    const stripped = strip(cnpj, isStrict);
    if (!stripped) {
        return false;
    }
    if (stripped.length !== 14) {
        return false;
    }
    if (REJECT_LIST.includes(stripped)) {
        return false;
    }
    let numbers = stripped.substring(0, 12);
    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);
    return numbers.substring(-2) === stripped.substring(-2);
}
exports.isValid = isValid;
/**
 * Transforma a entrada em um CNPJ bonito
 * @export
 * @param {string} cnpj the CNPJ.
 * @returns {string} the formatted CNPJ.
 */
function format(cnpj) {
    return strip(cnpj).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
}
exports.format = format;
