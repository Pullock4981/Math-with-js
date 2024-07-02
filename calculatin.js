function calTriangleArea() {
    // take base input and show
    const triBaseInput = document.getElementById('base')
    const triBaseValue = triBaseInput.value
    const base = parseFloat(triBaseValue)
    console.log(base)

    //take height input and show 
    const triHeightInput = document.getElementById('height');
    const triHeightValue = triHeightInput.value
    const height = parseFloat(triHeightValue)
    console.log(height)

    // calculate area

    const area = 0.5 * base * height;
    console.log('the area is:', area)

    // show area

    const showTriArea = document.getElementById('show-area');
    showTriArea.innerText = area;

    // show in other div

    const triArea = area;
    const takeIt = document.getElementById('Click-1')
    takeIt.innerText = triArea;

    // hide and show

    const triAreaShow = document.getElementById('take-me-1')
    triAreaShow.classList.remove('hidden')
}