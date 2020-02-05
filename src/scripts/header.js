screenX;

export const hideHeaderOnScroll = (className='hidden') => {
    const header = document.getElementsByTagName('header')[0];
    let prevPos = pageYOffset;
    let isHidden = false;

    const hide = () => header.classList.add(className);
    const show = () => header.classList.remove(className);

    window.addEventListener('scroll', () => {
        const presentPos = pageYOffset;
        const isScrolledDown = prevPos < presentPos;
        if (presentPos <= 0) {
            if (isHidden) {
                show();
                isHidden = false;
            }
            return;
        }

        if (!isHidden && isScrolledDown) {
            hide();
            isHidden = true;
        } else if (isHidden && !isScrolledDown) {
            show();
            isHidden = false;
        }
        prevPos = pageYOffset;
    });
};
