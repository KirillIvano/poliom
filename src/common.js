import 'flexboxgrid';
import 'babel-polyfill';

import './styles/common';

import {hideHeaderOnScroll} from './scripts/header';
import {setAppearingOnLoad, setAppearingOnScroll} from './scripts/appear';
import {setValidating} from './scripts/form';

document.addEventListener('DOMContentLoaded', () => {
    setAppearingOnLoad();
    setAppearingOnScroll();
    hideHeaderOnScroll();
    setValidating();
});
