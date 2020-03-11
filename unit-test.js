const {
  tokenizer,
  parser,
  transformer,
  codeGenerator,
  compiler
} = require('./the-super-tiny-compiler-without-comments.js');

const input = `(add 2 (subtract 8 4))`;
const tokens = tokenizer(input);
console.log('tokens:', tokens);
const ast = parser(tokens);
console.log('ast:', ast);
const newAst = transformer(ast);
console.log('newAst:', newAst);
const output = codeGenerator(newAst);
console.log('output:', output);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log('result:', eval(compiler(input)));
