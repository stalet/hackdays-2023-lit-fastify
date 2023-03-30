import {
    hasNativeDeclarativeShadowRoots,
    hydrateShadowRoots,
} from '@webcomponents/template-shadowroot/template-shadowroot.js';

if (!hasNativeDeclarativeShadowRoots()) {
    hydrateShadowRoots(document.body);
}
import('./rick-morty-component.js');
