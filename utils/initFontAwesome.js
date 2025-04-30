import { faLink, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

function initFontAwesome() {
  library.add(faLink, faPowerOff, faUser);
}

export default initFontAwesome;
