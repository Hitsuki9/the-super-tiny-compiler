function tokenizer(input) {
  let current = 0;
  let tokens = [];

  return tokens;
}

function parser(tokens) {
  let current = 0;

  function walk() {}

  let ast = {
    type: 'Program',
    body: []
  };

  return ast;
}

function traverser(ast, visitor) {}

function transformer(ast) {
  let newAst = {
    type: 'Program',
    body: []
  };

  traverser(ast, {});

  return newAst;
}

function codeGenerator(node) {
  switch (node.type) {
  }
}

function compiler(input) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  return output;
}

module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler
};
