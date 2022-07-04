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

it("should mashedPotatoes be defined' ", () => {
  const orderedListElement = document.querySelector("#mashedPotatoes");
  expect(orderedListElement).toBeDefined();
});

it("should mashedPotatoes be a ordered List' ", () => {
  const orderedListElement = document.querySelector("#mashedPotatoes");
  expect(orderedListElement.tagName).toMatch(/ol/i);
});