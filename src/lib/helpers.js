
/**
 * Hreinsa börn úr elementi
 *
 * @param {object} element Element sem á að hreinsa börn úr
 */
export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

/**
 * Búa til element og aukalega setja börn ef send með
 *
 * @param {string} name Nafn á element
 * @param  {...any} children Börn fyrir element
 */
export function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}

/**
* Skilar tölu af handahófi á bilinu [min, max]
*/
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// velja random dagsetningu
export function randomDate() {
  let day;
  let month;
  let year = randomNumber(1995, 2019);
  if (year == 1995) { // first available date: 1995-06-16
    month = randomNumber(6,12);
    if (month == 6) {
      day = randomNumber(16,30);
    }
  } else {
    month = randomNumber(1,12);
    switch (month) {
      case 2: // february
        day = randomNumber(1,28);
        break;
      case 4: // april
      case 6: // june
      case 9: // september
      case 11: // november
        day = randomNumber(1,30);
        break;
      default: // other months
        day = randomNumber(1,31);
    }
  }
  let date = ´${year}-${month}-${day}´;
  return date;
}
