// ==UserScript==
// @name         run a JavaScript line in a specific page
// @namespace    https://sumerian.me/
// @version      0.5
// @description  Run instead of "CLICKing" a JavaScript button!
// @author       Sam
// @match        https://hib.itslearning.com/index.aspx?Username=&RedirectLogin=hvl.itslearning.com
// @match        https://hib.itslearning.com/Index.aspx
// @match        https://hib.itslearning.com/
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // CHANGE THE FALLOWING line, because that is what I used!

	__doPostBack('ctl00$ContentPlaceHolder1$federatedLoginButtons$ctl00$ctl00','')

})();
