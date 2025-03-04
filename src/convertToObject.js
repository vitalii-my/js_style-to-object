'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((cssDeclaration) => {
    const index = cssDeclaration.indexOf(':');

    if (index !==-1) {
      const key = cssDeclaration.slice(0, index).trim();
      const value = cssDeclaration.slice(index + 1).trim();
      result[key] = value;
    }
    /* const part = cssDeclaration.split(':');

    if (part.length >= 2) {
      const key = part[0].trim();
      const value = part.slice(1).join(':').trim();

      result[key] = value;
    } */
  });

  return result;
}

module.exports = convertToObject;
