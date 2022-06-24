import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // Lodash, before included via a script, now imported by this script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());