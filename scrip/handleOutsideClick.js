/* eslint-disable no-unneeded-ternary */
export default function handleOutsideClick(target, compareElement) {
  return compareElement.contains(target) ? true : false;
}
