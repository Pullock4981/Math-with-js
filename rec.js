function calRecArea() {
    // take width and show
    const recWidthInput = document.getElementById('width')
    const recWidthValue = recWidthInput.value
    const w = parseFloat(recWidthValue)
    console.log(w)

    // take length and show
    const recLengthInput = document.getElementById('length');
    const recLengthValue = recLengthInput.value;
    const l = parseFloat(recLengthValue)
    console.log(l)

    // calculate area

    const area = w * l;
    console.log(area)

    // show area

    const showRecArea = document.getElementById('show-rec-area');
    showRecArea.innerText = area;

    // show in other div

    const recArea = area
    const takeRec = document.getElementById('Click-2')
    takeRec.innerText = recArea

    const recAreaShow = document.getElementById('take-me-2')
    recAreaShow.classList.remove('hidden')
}

