const collegeJson = ['Engineering3.json']

const getTodos = async (resource) => {

    const response = await fetch(resource)
    
    if(response.status !== 200){
        throw new Error('cannot fetch data')    
    }

    const data = response.json()
    
    return data
}

const cardGrid = document.querySelector('.card-grid')
const card = document.querySelectorAll('.card')
const filterOverlay = document.querySelector('.overlay')
const hideOverlay = document.querySelector('.hide-overlay')
const overlayButton = document.querySelector('.overlay-button')
const filterBtnContainer = document.querySelector('.filter-btn-container')
const searchBtn = document.querySelector('.search-btn')
const searchInput =  document.querySelector('.data-search')
const cardBtn = document.querySelectorAll('.card-btn')
const selectState = document.querySelector('select-state')

window.addEventListener("DOMContentLoaded", function() { 
    getTodos(collegeJson)
    // .then(data => display(data))
    .then(data => displayCollegeName(data))
    .then(data => displayFilterOverlay())
    .catch(err => console.log('rejected:', err.message))
    
})


// function display college name and logo
function displayCollegeName(college) { 
    // console.log(college);
    // removing duplicates by converting to set then to array by converting json to string
    // const result = [...new Set (college.map(a => JSON.stringify(a.Uiversity)))]
    // console.log(result)

    // to remove duplicates college names using reduce
    // const collegeArray = college.reduce(
    //     (value, item) => {
    //         if (!value.includes(item.Uiversity)){
    //             value.push(item.Uiversity)
    //         }
    //         return value
    //     },[]
    // )
    // console.log(collegeArray)

    // displaying college cards
    let displayCollege = college.map(data => {
        // console.log(data)
        return `
                <button class="card-btn" data-id="${data.State}">
                <a href = "https://kalingauniversity.ac.in/">
                <div class="card card-shadow"> ${data.State}
                <div class="card-body">${data.University}</div>
                </div>
                </button>
                `

    }) 

    displayCollege = displayCollege.join('')

    cardGrid.innerHTML = displayCollege

    searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toUpperCase()
    console.log(value)
    college.forEach(user => {
        const isVisible = user.University.includes(value)
        const hideBtn = document.querySelector('')
        hideBtn.classList.toggle('hide-college-card', !isVisible)
    })
    
    overlayButton.addEventListener('click', () => {
        filterOverlay.classList.toggle('hide-overlay')
        console.log('button pressed: ', filterOverlay.classList)
    })

    if (filterOverlay.classList.contains('hide-overlay')){
        filterOverlay.addEventListener('click', () => {
            filterOverlay.classList.add('hide-overlay')
            console.log('hello:', filterOverlay.classList)
    
        })
    }

    let displayStateFilterBtn = college.map(data => {
        return `<button class="state-btn" type="button" data-id="${data.State}">${data.State}</button>`
    }).join('')
    selectState.innerHTML = displayStateFilterBtn;
    

    // const search = college.filter(dataItem => {
    //     console.log(dataItem)
    //     if(dataItem.University === !value){
    //         return dataItem
    //     }else{
    //         return dataItem
    //     }
    // })
})





}

// overlay on and off 
function displayFilterOverlay() {
    overlayButton.addEventListener('click', () => {
        filterOverlay.classList.toggle('hide-overlay')
        console.log('button pressed: ', filterOverlay.classList)
    })
    

}

// if u click anywhere on the overlay it removes the overlay
if (filterOverlay.classList.contains('hide-overlay')){
    filterOverlay.addEventListener('click', () => {
        filterOverlay.classList.add('hide-overlay')
        console.log('hello:', filterOverlay.classList)

    })
}

// searchInput.addEventListener('input', (e) => {
//     const value = e.target.value.toUpperCase()
//     console.log(value)
//     const search = data.filter(dataItem => {
//         console.log(dataItem)
//         if(dataItem.University === value){
//             return dataItem
//         }else{
//             return dataItem
//         }
//     })
// })

searchBtn.addEventListener('click', () => {
    console.log('cancel btn pressed')
})

// function inputSearch(data) {
//     searchInput.addEventListener('input', (e) => {
//         const value = e.target.value.toUpperCase()
//         const search = data.filter(dataItem => {
//             console.log(dataItem)
//             if(dataItem.University === value){
//                 return dataItem
//             }else{
//                 return dataItem
//             }
//         })

// })

//     // console.log(value)
//     // college.forEach(data => {
//     //     const isVisible = data.University.includes(value)
//     //     // if (isVisible) {
//     //     //     console.log(isVisible)
//     //     // }
//     //     // const parent =  
//     //     // .classList.toggle('hide-college-card', !isVisible)
//     //     console.log(isVisible)
        
//     // })
// }