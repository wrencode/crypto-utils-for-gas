// noinspection JSUnusedGlobalSymbols
/**
 * Parses multiple exchanges from comma-delimited string of exchanges.
 *
 * @param {string} exchanges - Comma-separated string of exchange keywords.
 *
 * @return {array} - An array of exchanges.
 */
function utilParseExchanges(exchanges: string) {
  let exchangesArray = exchanges.split(",");
  let exchangeList = []
  for (let exchange of exchangesArray) {
    if (exchange !== "") {
      exchangeList.push(exchange.replace(/\s/g, ''));
    }
  }
  return exchangeList;
}

// noinspection JSUnusedGlobalSymbols
/**
 * Converts a byte string to a hexadecimal string for use in cryptographic signatures.
 *
 * @param {string} strForConversion - A byte string to be converted to a hexadecimal string.
 *
 * @return {string} - A hexadecimal string representation of the given byte string.
 */
function utilConvertByteStrToHexStr(strForConversion: string) {
  // noinspection JSUnresolvedFunction
  // @ts-ignore
  return strForConversion.map(
    function(byte: any) {
      return ("0" + (byte & 0xFF).toString(16)).slice(-2);
    }
  ).join("");
}

// noinspection JSUnusedGlobalSymbols,JSValidateJSDoc
/**
 * Checks if the amount of a given cryptocurrency has a sufficient value to be displayed.
 *
 * @param {string} ticker - The ticker of the selected cryptocurrency to check.
 * @param {number} amount - The amount of the cryptocurrency.
 *
 * @return {boolean} - A boolean representing if the selected cryptocurrency has a sufficient amount to display.
 */
function utilHasSufficientValue(ticker: string, amount: number) {

  ticker = ticker.toLowerCase();
  let sufficient = false;

  if (ticker === "btc") {
    if (amount >= 0.0000001) {
      sufficient = true;
    }
  } else if (ticker === "eth") {
    if (amount >= 0.000001) {
      sufficient = true;
    }
  } else {
    if (amount >= 0.01) {
      sufficient = true;
    }
  }
  return sufficient;
}

export {utilParseExchanges, utilConvertByteStrToHexStr, utilHasSufficientValue}
