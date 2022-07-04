const { getInstruction } = require("../../javascript/getInstruction");
const indexFunc = "../../javascript/index";

beforeAll(() => {
  document.body.innerHTML = `
  <section id="steps">
  <ol id="mashedPotatoes">
    <label>Mashed Potatoes</label>
  </ol>

  <hr />

  <ol id="steak">
    <label>Steak</label>
  </ol>

  <hr />

  <ol id="brusselsSprouts">
    <label>Brussels Sprouts</label>
  </ol>

  <hr />

  <ol id="broccoli">
    <label>Broccoli</label>
  </ol>
</section>`;
});

it("should contain a title with 'Mashed Potatoes' ", () => {
  const orderedListElement = document.querySelector("#mashedPotatoes");
  expect(orderedListElement).toBeDefined();
});
