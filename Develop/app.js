let dt


function setDay() {
    dt = moment(new Date(), "YYYY-MM-DD HH:mm:ss")
    let day = dt.format('dddd')
    let dayTh = dt.format('MMMM Do')
    document.getElementById('currentDay').innerText = `${day}, ${dayTh}`
    
}
function getHourString(i) {
    let time = ""
    if (i < 12) {
        time = `${i}:00AM`
    } else if (i === 12) {
        time = `12:00PM`
    } else {
        time = `${i - 12}:00PM`
    }
    return time
}
function getPastPresentFuture(time, now) {
    let ppf = ""
    if(time < now) {
        ppf = 'past'
    } else if (time === now) {
        ppf = 'present'
    } else if ( time > now) {
        ppf = 'future'
    }
    return ppf
}
function generatePlanner() {
    for (let i = 9; i < 18; i++) {
        let row = document.createElement('div')
        row.classList.add('row')
        let time = getHourString(i)
        let bgclass = getPastPresentFuture(i, parseInt(dt.format('HH')))
        let textVal = getText(`text-${i}`)
        row.innerHTML =
            `
            <div class="col-1 time-block rounded-left border border-dark border-right-0">
                ${time}
            </div>
            <div class="col-10 border p-0">
                <textarea id="text-${i}" class="${bgclass} border border-dark w-100"></textarea>
             </div>
            <button class="col-1 saveBtn btn border-dark" id="btn-${i}">Save</button>
        `
        document.getElementById('planner').append(row)
        document.getElementById(`text-${i}`).value = textVal
    }

}
function saveText(id, text) {
    localStorage.setItem(id, text)
}
function getText(id) {
    let text = ""
    if(localStorage.getItem(id) != null) {
        text = localStorage.getItem(id)
    }
    return text
}
document.addEventListener('click', ({target}) => {
    let regex = /btn-[1-9][1-9]*/
    if(regex.test(target.id)) {
        let textID = `text-${target.id.substring(4)}`
        let text = document.getElementById(textID).value
        saveText(textID, text)
    }

})
setDay()
generatePlanner()