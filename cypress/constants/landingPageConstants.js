const CATEGORIES = {
    ALL: `a[id='cat']`,
    PHONES: `a[onclick="byCat('phone')"]`,
    LAPTOPS: `a[onclick="byCat('notebook')"]`,
    MONITORS: `a[onclick="byCat('monitor')"]`
}; 

const LOGO = `a[id=nava]`;
const NAV_LINKS = {
    ALL: `a.nav-link`,
    HOME: `li.nav-item:nth-child(1) a`,
    CONTACT: `li.nav-item:nth-child(2) a`,
    ABOUT_US: `li.nav-item:nth-child(3) a`,
    CART: `a#cartur`,
    LOG_IN: `a#login2`,
    SIGN_UP: `a#signin2`,
    LOG_OUT: `a#logout2`,
    NAME_OF_USER: `a#nameofuser`
}

const ITEMS = `div.card.h-100 > a`

module.exports = {
    CATEGORIES,
    LOGO,
    NAV_LINKS,
    ITEMS,
}
