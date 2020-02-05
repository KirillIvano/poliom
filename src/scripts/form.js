const validatePhone = text => {
    const isLenValid = (text[0] === '+' && text.length === 12) || text.length === 11;
    if (!isLenValid) {
        return false;
    }
    const isNumberValid = /\+?[0-9\s]{11,12}/.test(text);
    return isNumberValid;
};

const validateName = text => !!text;

const showError = el => el.classList.add('error');
const removeError = el => el.classList.remove('error');

export const setValidating = () => {
    const form = document.forms[0];
    const inputs = form.elements;
    const nameInp = inputs['name'];
    const numInp = inputs['phone'];

    form.addEventListener('submit', (e) => {
        const isNameValid = validateName(nameInp.value);
        const isPhoneValid = validatePhone(numInp.value);

        isNameValid ? removeError(nameInp) : showError(nameInp);
        isPhoneValid ? removeError(numInp) : showError(numInp);

        if (!isNameValid || !isPhoneValid) {
            e.preventDefault();
        }
    });
};
