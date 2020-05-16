const flipper = (elem) => {
    $(elem).closest('.card-container').toggleClass('click');
    $(elem).css('transform,rotateY(180deg)');
}