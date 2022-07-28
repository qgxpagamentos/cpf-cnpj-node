/**
 * Verifica o dígito.
 * @export
 * @param {string} numbers
 * @returns {number}
 */
export declare function verifierDigit(numbers: string): number;
/**
 * Remove os caracteres especiais.
 * @export
 * @param {string} cnpj
 * @param {boolean} [isStrict]
 * @returns {string}
 */
export declare function strip(cnpj: string, isStrict?: boolean): string;
/**
 * Valida o CNPJ.
 *
 * @export
 * @param {string} cnpj
 * @param {boolean} [isStrict]
 * @returns {boolean}
 */
export declare function isValid(cnpj: string, isStrict?: boolean): boolean;
/**
 * Transforma a entrada em um CNPJ bonito
 * @export
 * @param {string} cnpj the CNPJ.
 * @returns {string} the formatted CNPJ.
 */
export declare function format(cnpj: string): string;
