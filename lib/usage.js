module.exports = function () {
  'use strict';
    var message = '';

    message += 'Usage:\n';
    message += '    qrep selector filename\n';
    message += '    qrep selector url\n';
    message += '\nOption:\n';
    message += '    qrep selector filename -e encoding(default = utf8)\n';
    message += '    qrep selector url -e encoding(default = utf8)\n';
    message += '\ne.g.\n';
    message += '    qrep #logo ./tpl/index.html\n';

    console.log(message);
};
