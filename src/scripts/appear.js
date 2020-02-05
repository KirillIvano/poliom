const appear = el => el.classList.add('appeared');

export const setAppearingOnLoad = () =>
    setTimeout(
        () => [...document.getElementsByClassName('appear-on-load')]
            .forEach(appear),
        200,
    );


const numCmp = (a, b) => a - b;
const generateSortedOffsets = elements => {
    const actualOffset = pageYOffset;
    const actualScreenSize = window.screen.height;

    const offsets = elements.map(
        el => el.getBoundingClientRect().top + actualOffset - actualScreenSize / 2,
    );

    return offsets.sort(numCmp);
};

export const setAppearingOnScroll = (throttle=10) => {
    let lastHiddenElement = 0;
    let presentOffset = 0;

    const elements = [...document.getElementsByClassName('appear-on-scroll')];
    const elementsCount = elements.length;
    let offsets = generateSortedOffsets(elements);

    const performAppearing = () => {
        while(offsets[lastHiddenElement] < presentOffset) {
            appear(elements[lastHiddenElement]);
            lastHiddenElement++;
        }

        if (lastHiddenElement === elementsCount) {
            window.removeEventListener('resize', onScroll);
            window.removeEventListener('scroll', onScroll);
        }
    };

    const onScroll = () => {
        const newOffset = pageYOffset;
        if (newOffset > throttle + presentOffset) {
            presentOffset = newOffset;
            performAppearing();
        }
    };

    window.addEventListener('resize', onScroll);
    window.addEventListener('scroll', onScroll);
};
