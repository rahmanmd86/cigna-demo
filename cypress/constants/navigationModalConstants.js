const LOGIN_MODAL = {
    TITLE: `div#logInModal div .modal-title`,
    USERNAME: `div#logInModal div.modal-body div:nth-child(1) input`,
    PASSWORD: `div#logInModal div.modal-body div:nth-child(2) input`,
    LOG_IN: `div#logInModal div.modal-footer button:nth-child(2)`,
    CLOSE: `div#logInModal div.modal-footer button:nth-child(1)`
}

const SIGN_UP_MODAL = {
    TITLE: `div#signInModal div .modal-title`,
    USERNAME: `div#signInModal div.modal-body div:nth-child(1) input`,
    PASSWORD: `div#signInModal div.modal-body div:nth-child(2) input`,
    SIGN_UP: `div#signInModal div.modal-footer button:nth-child(2)`,
    CLOSE: `div#signInModal div.modal-footer button:nth-child(1)`
}

const CONTACT_MODAL = {
    TITLE: `#exampleModalLabel`,
    CLOSE: `#exampleModal button.close`
}


module.exports = {
    LOGIN_MODAL,
    SIGN_UP_MODAL,
    CONTACT_MODAL
}