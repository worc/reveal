"use strict";
(() => {
    let revealKey = 'Control';
    let revealSwitchStyle = 'toggle';
    // function setRevealKey (key) {
    //   revealKey = key
    // }
    function reveal(e) {
        let revealKey = 'Control';
        let revealSwitchStyle = 'toggle';
        if (e.target instanceof HTMLInputElement) {
            console.log('reveal', e);
            if (e.key === revealKey) {
                console.log(revealKey);
                console.log(e);
                console.log(e.target.type);
                if (e.target.type === 'password') {
                    e.target.dataset.revealed_by_extension = 'true';
                    e.target.type = 'text';
                }
                else {
                    if (e.target.dataset.revealed_by_extension === 'true') {
                        e.target.type = 'password';
                    }
                }
            }
        }
    }
    document.addEventListener('keydown', reveal);
})();
//# sourceMappingURL=content.js.map