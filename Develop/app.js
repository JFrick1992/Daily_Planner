/* <div class="row">
    <div class="col-1 time-block hour">
        9:00AM
          </div>
    <div class="col-10">
        <textarea name="" id=""></textarea>
    </div>
    <button class="col-1 saveBtn btn"></button>
</div> */


console.log(new Date())
let dt = moment(new Date(), "YYYY-MM-DD HH:mm:ss")
console.log(dt.format('dddd'))


function generatePlanner() {
    for (let i = 9; i < 18; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        let time = ""
        if( i < 12) {
            time = `${i}:00AM`
        } else if (i === 12) {
            time = `12:00PM`
        } else {
            time = `${i-12}:00PM`
        }
        row.innerHTML =
            `
            <div class="col-1 time-block hour">
                ${time}
            </div>
            <div class="col-10 border p-0">
                <textarea name="" id="text-${i}" class="w-100"></textarea>
             </div>
            <button class="col-1 saveBtn btn" id="btn-${i}">Save</button>
        `
        document.getElementById('planner').append(row)
    }

}
document.addEventListener('click', () => {

    
})
generatePlanner()