function calPeraArea() {
    // take base input and show
    const peraBaseInput = document.getElementById('pera-base')
    const peraBaseValue = peraBaseInput.value;
    const peraB = parseFloat(peraBaseValue);
    console.log(peraB);

    // take hight and show
    const peraHeightInput = document.getElementById('pera-height');
    const peraHeightValue = peraHeightInput.value;
    const peraH = parseFloat(peraHeightValue)
    console.log(peraH)

    // calculate area
    const area = peraB * peraH;
    console.log(area)

    // show the area
    const showPeraArea = document.getElementById('show-pera-area');
    showPeraArea.innerText = area;

    // show in other div

    const peraArea = area
    const takePera = document.getElementById('Click-3')
    takePera.innerText = peraArea

    const paraAreaShow = document.getElementById('take-me-3')
    paraAreaShow.classList.remove('hidden')

}