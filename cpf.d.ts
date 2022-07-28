/**
 *  Verifica o dígito.
 * @export
 * @param {string} numbers
 * @returns {number}
 */
export declare function verifierDigit(numbers: string): number;
/**
 * Remove os caracteres especiais.
 * @export
 * @param {string} cpf
 * @param {boolean} [isStrict]
 * @returns {string}
 */
export declare function strip(cpf: string, isStrict?: boolean): string;
/**
 * Valida o CPF.
 * @export
 * @param {string} cpf
 * @param {boolean} [isStrict]
 * @returns {boolean}
 */
export declare function isValid(cpf: string, isStrict?: boolean): boolean;
/**
 * Transforma a entrada em um cpf bonito
 * @export
 * @param {string} cpf the CPF.
 * @returns {string} the formatted CPF.
 */
export declare function format(cpf: string): string;
