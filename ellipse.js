function calEllArea() {
    // take angle and show
    const ellAreaInput = document.getElementById('ellipse-area')
    const ellAreaValue = ellAreaInput.value;
    const angle = parseFloat(ellAreaValue)
    console.log(angle)

    // take base and show
    const ellBaseInput = document.getElementById('ellipse-base')
    const ellBaseValue = ellBaseInput.value;
    const ellBase = parseFloat(ellBaseValue);
    console.log(ellBase)

    // calculate area
    const area = 3.1416 * angle * ellBase;
    console.log(area);

    // show the area

    const showEllArea = document.getElementById('show-ellipse-area');
    showEllArea.innerText = area;

    // show in new div

    const ellArea = area
    const takeEll = document.getElementById('Click-4')
    takeEll.innerText = ellArea

    const ellAreaShow = document.getElementById('take-me-4')
    ellAreaShow.classList.remove('hidden')
}