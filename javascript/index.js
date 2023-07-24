// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, step0 => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
    getInstruction("mashedPotatoes", 1, step1 => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
        getInstruction("mashedPotatoes", 2, step2 => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
            getInstruction("mashedPotatoes", 3, step3 => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
                getInstruction("mashedPotatoes", 4, step4 => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
                    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
                })
            })
        })
    })
})

// Iteration 2 - using promises
obtainInstruction("steak", 0).then(step0 => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    obtainInstruction("steak", 1).then(step1 => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
        obtainInstruction("steak", 2).then(step2 => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
            obtainInstruction("steak", 3).then(step3 => {
                document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
                obtainInstruction("steak", 4).then(step4 => {
                    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
                    obtainInstruction("steak", 5).then(step5 => {
                        document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
                        obtainInstruction("steak", 6).then(step6 => {
                            document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                            obtainInstruction("steak", 7).then(step7 => {
                                document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                                document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
                                document.querySelector("#steakImg").removeAttribute("hidden")
                            })
                        })
                    })
                })
            })
        })
    })
})

// Iteration 3 using async/await
async function makeBroccoli() {
    try {
        const step0 = await obtainInstruction("broccoli", 0)
        document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`

        const step1 = await obtainInstruction("broccoli", 1)
        document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`

        const step2 = await obtainInstruction("broccoli", 2)
        document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`

        const step3 = await obtainInstruction("broccoli", 3)
        document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`

        const step4 = await obtainInstruction("broccoli", 4)
        document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`

        const step5 = await obtainInstruction("broccoli", 5)
        document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`

        const step6 = await obtainInstruction("broccoli", 6)
        document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
        document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
        document.querySelector("#broccoliImg").removeAttribute("hidden")
    } catch (error) {
        console.log(error)
    }
}

makeBroccoli()

// Bonus 2 - Promise all
const brusselsSproutsPromises = []
for (let i = 0; i < brusselsSprouts.length; i++) {
    brusselsSproutsPromises.push(obtainInstruction("brusselsSprouts", i))
}

const allBrusselsSproutsPromises = Promise.all(brusselsSproutsPromises)
allBrusselsSproutsPromises
    .then(stepArray => {
        for (let i = 0; i < stepArray.length; i++) {
            document.querySelector("#brusselsSprouts").innerHTML += `<li>${stepArray[i]}</li>`
        }
    })
    .catch(error => console.log(error))
    .finally(() => {
        document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
        document.querySelector("#brusselsSproutsImg").removeAttribute("hidden")
    })
