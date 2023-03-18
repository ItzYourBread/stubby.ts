const { Replace } = require("stubby.ts");

const paragraph = `
  %boyname% loves %girlname%, but %girlname% doesn't know yet.
`;

const replacements = {
  '%boyname%': 'Arif',
  '%girlname%': 'Afrin'
};

const loveStory = Replace(paragraph, replacements);

console.log(loveStory);