'use strict'

const locale = require('locale');
const os = require('os');

const supported = new locale.Locales(["en", "en_US", "ja"])

const prepareDate = req => {
  let output = {}
    
  const locales = new locale.Locales(req.headers["accept-language"])
  output = {
              ipaddress:req.connection.remoteAddress, 
              language:locales, 
              software:os.platform()
            }
  return output
}

module.exports = prepareDate