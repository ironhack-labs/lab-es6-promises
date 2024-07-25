const getRecipeMethods = (name, successText) => {
  const recipeSteps = document.querySelector(`#${name}`)
  const recipeImg = document.querySelector(`#${name}Img`)
  const addStep = (stepText) =>
    (recipeSteps.innerHTML += `<li>${stepText}</li>`)
  const addSuccessText = () => addStep(successText)
  const showImage = () => recipeImg.removeAttribute("hidden")
  return {
    name,
    addStep,
    addSuccessText,
    showImage,
  }
}
const recipe1 = getRecipeMethods("mashedPotatoes", "Mashed potatoes are ready!")
getInstruction(
  recipe1.name,
  0,
  (step) => {
    recipe1.addStep(step)
    getInstruction(
      recipe1.name,
      1,
      (step) => {
        recipe1.addStep(step)
        getInstruction(
          recipe1.name,
          2,
          (step) => {
            recipe1.addStep(step)
            getInstruction(
              recipe1.name,
              3,
              (step) => {
                recipe1.addStep(step)
                getInstruction(
                  recipe1.name,
                  4,
                  (step) => {
                    recipe1.addStep(step)
                    recipe1.addSuccessText()
                    recipe1.showImage()
                  },
                  (error) => console.log(error)
                )
              },
              (error) => console.log(error)
            )
          },
          (error) => console.log(error)
        )
      },
      (error) => console.log(error)
    )
  },
  (error) => console.log(error)
)
// Iteration 2 - using promises
const recipe2 = getRecipeMethods("steak", "Steak is ready!")
obtainInstruction(recipe2.name, 0).then((step) => {
  recipe2.addStep(step)
  obtainInstruction(recipe2.name, 1).then((step) => {
    recipe2.addStep(step)
    obtainInstruction(recipe2.name, 2).then((step) => {
      recipe2.addStep(step)
      obtainInstruction(recipe2.name, 3).then((step) => {
        recipe2.addStep(step)
        obtainInstruction(recipe2.name, 4).then((step) => {
          recipe2.addStep(step)
          obtainInstruction(recipe2.name, 5).then((step) => {
            recipe2.addStep(step)
            obtainInstruction(recipe2.name, 6).then((step) => {
              recipe2.addStep(step)
              obtainInstruction(recipe2.name, 7).then((step) => {
                recipe2.addStep(step)
                recipe2.addSuccessText()
                recipe2.showImage()
              })
            })
          })
        })
      })
    })
  })
})
// Iteration 3 using async/await
const recipe3 = getRecipeMethods("broccoli", "Broccoli is ready!")
async function makeBroccoli() {
  const step0 = await obtainInstruction(recipe3.name, 0)
  recipe3.addStep(step0)
  const step1 = await obtainInstruction(recipe3.name, 1)
  recipe3.addStep(step1)
  const step2 = await obtainInstruction(recipe3.name, 2)
  recipe3.addStep(step2)
  const step3 = await obtainInstruction(recipe3.name, 3)
  recipe3.addStep(step3)
  const step4 = await obtainInstruction(recipe3.name, 4)
  recipe3.addStep(step4)
  const step5 = await obtainInstruction(recipe3.name, 5)
  recipe3.addStep(step5)
  const step6 = await obtainInstruction(recipe3.name, 6)
  recipe3.addStep(step6)
  recipe3.addSuccessText()
  recipe3.showImage()
}
makeBroccoli()
// Bonus 2 - Promise all
const recipe4 = getRecipeMethods(
  "brusselsSprouts",
  "Brussels sprouts are ready!"
)
const promises = Array.from({ length: brusselsSprouts.length }, (_, index) =>
  obtainInstruction(recipe4.name, index)
)
Promise.all(promises).then((stepTexts) => {
  stepTexts.forEach(recipe4.addStep)
  recipe4.addSuccessText()
  recipe4.showImage()
})
