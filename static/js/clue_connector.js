const prov = phovea.core.provenance;

function addCLUEFish(inputs, parameter) {
  return inputs[0].v.then((elem) => {
    const old = elem.innerText;
    elem.innerText = parameter.text;
    return {
      inverse: createAddCLUEFish(inputs[0], old),
    };
  });
}

function createAddCLUEFish(outputRef, text) {
  return prov.action(prov.meta('change text', prov.cat.visual, prov.op.update), 'addCLUEFish', addCLUEFish, [outputRef], {
    text: text
  });
}

$(() => {
  const g = prov.createDummy();
  const main = document.querySelector('#canvas_div');
  // create or recreate the dynamic reference
  // TODO: not sure what elements to choose here
  const outputRef = g.findOrAddObject(main.querySelector('#canvas_svg'), 'output', prov.cat.data);

  // I've put the g.push and the g.undo deep inside.

  // main.querySelector('button').addEventListener('click', () => {
  //   const newText = main.querySelector('input').value;
  //   g.push(createSetCLUEHelloWorldText(outputRef, newText));
  // });
  // document.querySelector('#undo').addEventListener('click', () => {
  //   g.undo();
  // });
});