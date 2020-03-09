'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * Today we're going to write a compiler together. But not just any compiler... A
 * super duper teeny tiny compiler! A compiler that is so small that if you
 * remove all the comments this file would only be ~200 lines of actual code.
 *
 * We're going to compile some lisp-like function calls into some C-like
 * function calls.
 *
 * If you are not familiar with one or the other. I'll just give you a quick intro.
 *
 * If we had two functions `add` and `subtract` they would be written like this:
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * Easy peezy right?
 *
 * Well good, because this is exactly what we are going to compile. While this
 * is neither a complete LISP or C syntax, it will be enough of the syntax to
 * demonstrate many of the major pieces of a modern compiler.
 */

/**
 * Most compilers break down into three primary stages: Parsing, Transformation,
 * and Code Generation
 *
 * 1. *Parsing* is taking raw code and turning it into a more abstract
 *    representation of the code.
 *
 * 2. *Transformation* takes this abstract representation and manipulates to do
 *    whatever the compiler wants it to.
 *
 * 3. *Code Generation* takes the transformed representation of the code and
 *    turns it into new code.
 * 
 * 译：
 * 大多数编译器分为三个主要阶段：解析，转换和代码生成
 * 1. 解析阶段获取原始代码，并将其转换为抽象的表示（注：抽象语法树）。
 * 2. 转换阶段操作解析得到的抽象表示，使其转换为编译器需要的表示形式。
 * 3. 代码生成阶段将转换阶段得到的表示形式转换为新代码。
 */

/**
 * Parsing
 * -------
 *
 * Parsing typically gets broken down into two phases: Lexical Analysis and
 * Syntactic Analysis.
 *
 * 1. *Lexical Analysis* takes the raw code and splits it apart into these things
 *    called tokens by a thing called a tokenizer (or lexer).
 *
 *    Tokens are an array of tiny little objects that describe an isolated piece
 *    of the syntax. They could be numbers, labels, punctuation, operators,
 *    whatever.
 *
 * 2. *Syntactic Analysis* takes the tokens and reformats them into a
 *    representation that describes each part of the syntax and their relation
 *    to one another. This is known as an intermediate representation or
 *    Abstract Syntax Tree.
 *
 *    An Abstract Syntax Tree, or AST for short, is a deeply nested object that
 *    represents code in a way that is both easy to work with and tells us a lot
 *    of information.
 *
 * For the following syntax:
 *
 *   (add 2 (subtract 4 2))
 *
 * Tokens might look something like this:
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * And an Abstract Syntax Tree (AST) might look like this:
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 * 
 * 译：
 * 解析
 * ------
 * 解析通常分为两个阶段：词法分析和句法分析。
 * 1. 词法分析阶段提取原始代码，并使用分词器（tokenizer）将其拆分为多个标记（tokens）。
 *    标记是一个描述了句法中的一块独立代码片段的包含多个对象的数组。它们可以是数字，标签，标点符号，运算符等等。
 * 2. 句法分析阶段得到标记，并将其重新格式化为描述语法的每个部分及它们间的关系的表示形式，这就称为抽象语法树。
 *    抽象语法树（AST）是一个深层嵌套的对象，其以一个易于使用的形式来表示代码，并可以告诉我们很多信息。
 * 
 * 对于以下语法：
 * (add 2 (subtract 4 2))
 * 标记可能看起来像这样：
 * [
 *   { type: 'paren',  value: '('        },
 *   { type: 'name',   value: 'add'      },
 *   { type: 'number', value: '2'        },
 *   { type: 'paren',  value: '('        },
 *   { type: 'name',   value: 'subtract' },
 *   { type: 'number', value: '4'        },
 *   { type: 'number', value: '2'        },
 *   { type: 'paren',  value: ')'        },
 *   { type: 'paren',  value: ')'        }
 * ]
 * 而抽象语法树可能看起来像这样：
 * {
 *   type: 'Program',
 *   body: [{
 *     type: 'CallExpression',
 *     name: 'add',
 *     params: [{
 *       type: 'NumberLiteral',
 *       value: '2',
 *     }, {
 *       type: 'CallExpression',
 *       name: 'subtract',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '4',
 *       }, {
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }]
 *     }]
 *   }]
 * }
 */

/**
 * Transformation
 * --------------
 *
 * The next type of stage for a compiler is transformation. Again, this just
 * takes the AST from the last step and makes changes to it. It can manipulate
 * the AST in the same language or it can translate it into an entirely new
 * language.
 *
 * Let’s look at how we would transform an AST.
 *
 * You might notice that our AST has elements within it that look very similar.
 * There are these objects with a type property. Each of these are known as an
 * AST Node. These nodes have defined properties on them that describe one
 * isolated part of the tree.
 *
 * We can have a node for a "NumberLiteral":
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * Or maybe a node for a "CallExpression":
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * When transforming the AST we can manipulate nodes by
 * adding/removing/replacing properties, we can add new nodes, remove nodes, or
 * we could leave the existing AST alone and create an entirely new one based
 * on it.
 *
 * Since we’re targeting a new language, we’re going to focus on creating an
 * entirely new AST that is specific to the target language.
 *
 * Traversal
 * ---------
 *
 * In order to navigate through all of these nodes, we need to be able to
 * traverse through them. This traversal process goes to each node in the AST
 * depth-first.
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * So for the above AST we would go:
 *
 *   1. Program - Starting at the top level of the AST
 *   2. CallExpression (add) - Moving to the first element of the Program's body
 *   3. NumberLiteral (2) - Moving to the first element of CallExpression's params
 *   4. CallExpression (subtract) - Moving to the second element of CallExpression's params
 *   5. NumberLiteral (4) - Moving to the first element of CallExpression's params
 *   6. NumberLiteral (2) - Moving to the second element of CallExpression's params
 *
 * If we were manipulating this AST directly, instead of creating a separate AST,
 * we would likely introduce all sorts of abstractions here. But just visiting
 * each node in the tree is enough for what we're trying to do.
 *
 * The reason I use the word "visiting" is because there is this pattern of how
 * to represent operations on elements of an object structure.
 *
 * Visitors
 * --------
 *
 * The basic idea here is that we are going to create a “visitor” object that
 * has methods that will accept different node types.
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * When we traverse our AST, we will call the methods on this visitor whenever we
 * "enter" a node of a matching type.
 *
 * In order to make this useful we will also pass the node and a reference to
 * the parent node.
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * However, there also exists the possibility of calling things on "exit". Imagine
 * our tree structure from before in list form:
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * As we traverse down, we're going to reach branches with dead ends. As we
 * finish each branch of the tree we "exit" it. So going down the tree we
 * "enter" each node, and going back up we "exit".
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * In order to support that, the final form of our visitor will look like this:
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 * 
 * 译：
 * 转换
 * ------
 * 编译器的下一个阶段是转换。同样的，这只是对上一步获得的抽象语法树进行更改。
 * 该阶段可以在相同的语言范围内修改抽象语法树，也可以将其翻译成全新的语言。
 * 
 * 下面来看一下如何转换抽象语法树。
 * 
 * 你可能会注意到抽象语法树中包含着看起来非常相似的元素。这些元素都是具有 type 属性的对象，它们被称为 AST 节点。
 * 这些节点在其上定义了描述一个抽象语法树中一块独立部分的属性。
 * 
 * 我们可以为数字字面量（NumberLiteral）创建一个节点：
 * {
 *   type: 'NumberLiteral',
 *   value: '2'
 * }
 * 或者可以为调用表达式（CallExpression）创建一个节点：
 * {
 *   type: 'CallExpression',
 *   name: 'subtract',
 *   params: [...nested nodes go here（嵌套的节点）...]
 * }
 * 
 * 转换抽象语法树时，我们可以通过添加/删除/替换属性来操作节点，
 * 也可以添加新节点，删除节点，
 * 甚至可以不使用现有的抽象语法树，而是基于此创建一个全新抽象语法树。
 * 
 * 由于我们的编译结果是一个新语言，因此我们将重点放在创建一种特定于目标语言的全新 AST。
 * 
 * 遍历
 * ------
 * 为了浏览所有的节点，我们需要遍历它们。
 * 此过程将以深度优先的方式遍历到 AST 中的每个节点。
 * {
 *   type: 'Program',
 *   body: [{
 *     type: 'CallExpression',
 *     name: 'add',
 *     params: [{
 *       type: 'NumberLiteral',
 *       value: '2',
 *     }, {
 *       type: 'CallExpression',
 *       name: 'subtract',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '4',
 *       }, {
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }]
 *     }]
 *   }]
 * }
 * 对于上面的 AST，将如此遍历：
 * 1. Program - 从 AST 的顶层开始
 * 2. CallExpression (add) - 转到 Program 的 body 的第一个元素
 * 3. NumberLiteral (2) - 转到 CallExpression 的 params 的第一个元素
 * 4. CallExpression (subtract) - 转到 CallExpression 的 params 的第二个元素
 * 5. NumberLiteral (4) - 转到 CallExpression 的 params 的第一个元素
 * 6. NumberLiteral (2) - 转到 CallExpression 的 params 的第二个元素
 * 
 * 如果我们直接操作此 AST，而不是创建单独的 AST，将会牵扯到各种的抽象。
 * 但是只是访问树中的每个节点就足以满足我们的需求了。
 * 
 * 使用“访问”一词的原因是因为这种方式可以表示对对象结构的元素进行了操作。
 * 
 * 访问器
 * ------
 * 这里的基本思想是我们将创建一个“访问器”对象，该对象具有接受不同节点类型的方法。
 * var = visitor = {
 *   NumberLiteral() {},
 *   CallExpression() {}
 * };
 * 遍历 AST 时，只需要调用访问器上对应的方法。
 * 我们还需将当前节点和其父节点的引用作为参数传入。
 * var = visitor = {
 *   NumberLiteral(node, parent) {},
 *   CallExpression(node, parent) {}
 * };
 * 
 * 但是，也有可能是在“退出”节点时调用方法，想像一下上面树结构的列表形式：
 * - Program
 *   - CallExpression
 *     - NumberLiteral
 *     - CallExpression
 *       - NumberLiteral
 *       - NumberLiteral
 * 当我们往下遍历树时，必然将会到达某个分支的末尾，当我们完成树的每个分支时，我们将会“退出”它。
 * 因此，从树上遍历下来，我们“进入”到每个节点，然后又“退出”。
 * -> Program (enter)
 *   -> CallExpression (enter)
 *     -> Number Literal (enter)
 *     <- Number Literal (exit)
 *     -> Call Expression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *     <- CallExpression (exit)
 *   <- CallExpression (exit)
 * <- Program (exit)
 * 
 * 为了支持这一点，我们的访问器最终将如下所示：
 * var visitor = {
 *   NumberLiteral: {
 *     enter(node, parent) {},
 *     exit(node, parent) {}
 *   }
 * };
 */

/**
 * Code Generation
 * ---------------
 *
 * The final phase of a compiler is code generation. Sometimes compilers will do
 * things that overlap with transformation, but for the most part code
 * generation just means take our AST and string-ify code back out.
 *
 * Code generators work several different ways, some compilers will reuse the
 * tokens from earlier, others will have created a separate representation of
 * the code so that they can print nodes linearly, but from what I can tell most
 * will use the same AST we just created, which is what we’re going to focus on.
 *
 * Effectively our code generator will know how to “print” all of the different
 * node types of the AST, and it will recursively call itself to print nested
 * nodes until everything is printed into one long string of code.
 * 
 * 译：
 * 代码生成
 * ------
 * 编译器的最后阶段是代码生成。
 * 有时候，编译器会执行和转换阶段相重叠的操作，但在大多数情况下，代码生成只是意味着将 AST 转换回字符串化的代码。
 * 
 * 代码生成器以几种不同的方式进行工作，某些编译器将重用较早时候的标记（tokens），
 * 另一些编译器将创建一种另外的代码表示形式，以便可以线性地打印节点，
 * 但据我所知，大多数将使用我们刚刚创建的 AST，这是需要我们重点关注的。
 * 
 * 我们的代码生成器将知道如何“打印”所有不同类型的 AST 节点，
 * 而且它将递归调用自身以打印嵌套的节点，直到所有内容都打印成一长串字符串化的代码。
 */

/**
 * And that's it! That's all the different pieces of a compiler.
 *
 * Now that isn’t to say every compiler looks exactly like I described here.
 * Compilers serve many different purposes, and they might need more steps than
 * I have detailed.
 *
 * But now you should have a general high-level idea of what most compilers look
 * like.
 *
 * Now that I’ve explained all of this, you’re all good to go write your own
 * compilers right?
 *
 * Just kidding, that's what I'm here to help with :P
 *
 * So let's begin...
 * 
 * 译：
 * 这就是一个编译器的所有不同阶段。
 * 这并不是说每个编译器看起来都和我在这里描述的完全一样。
 * 编译器有许多不同的用途，它们可能需要比我描述的更加详细的步骤。
 * 但是现在你应该对大多数的编译器长什么样有了一个大致的了解。
 * 
 * 我已经解释了所有这些内容，你现在可以自行编写属于自己的编译器了对吗？
 * 开个玩笑，这就是我在这里将要帮助你的地方 :p
 * 让我们开始吧...
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 */

/**
 * We're gonna start off with our first phase of parsing, lexical analysis, with
 * the tokenizer.
 *
 * We're just going to take our string of code and break it down into an array
 * of tokens.
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 * 
 * 译：
 * 我们将从解析的第一阶段词法分析的开始，即使用分词器。
 * 我们只是将我们的代码字符串分解为一个数组标记（tokens）。
 * (add 2 (subtract 4 2)) => [{ type: 'paren', value: '(' }, ...]
 */

// We start by accepting an input string of code, and we're gonna set up two
// things...
// 译：我们首先接受输入的代码字符串，然后设置两个东西...
function tokenizer(input) {

  // A `current` variable for tracking our position in the code like a cursor.
  // 译：一个“current”变量，用于像游标一样追踪我们在代码中的位置。
  let current = 0;

  // And a `tokens` array for pushing our tokens to.
  // 译：还有一个“tokens”数组，用于保存推送过来的标记（tokens）。
  let tokens = [];

  // We start by creating a `while` loop where we are setting up our `current`
  // variable to be incremented as much as we want `inside` the loop.
  // 译：我们从创建一个 while 循环开始，在该循环中，让我们的 current 变量尽可能多地增加。
  // We do this because we may want to increment `current` many times within a
  // single loop because our tokens can be any length.
  // 译：之所以这样做，是因为我们可能希望在单个循环中多次增加“current”值，因为我们的 tokens 数组可以是任意长度。
  while (current < input.length) {

    // We're also going to store the `current` character in the `input`.
    // 译：我们还将存储“input”中“current”位置上的字符。
    let char = input[current];

    // The first thing we want to check for is an open parenthesis. This will
    // later be used for `CallExpression` but for now we only care about the
    // character.
    // 译：我们要检查的第一项是圆括号。稍后将其用于“CallExpression”，但现在我们只关心字符。
    // We check to see if we have an open parenthesis:
    // 译：我们检查是否有一个左括号：
    if (char === '(') {

      // If we do, we push a new token with the type `paren` and set the value
      // to an open parenthesis.
      // 译：如果这样做，我们将推入 tokens 数组一个类型为“paren”的新标记（token），并将它的 value 设置为一个左括号。
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // Then we increment `current`
      // 译：然后增加 current
      current++;

      // And we `continue` onto the next cycle of the loop.
      // 译：并且继续执行下一个循环。
      continue;
    }

    // Next we're going to check for a closing parenthesis. We do the same exact
    // thing as before: Check for a closing parenthesis, add a new token,
    // increment `current`, and `continue`.
    // 译：接下来，我们将检查右括号。执行与之前相同的操作：检查右括号，添加新标记（token），递增 current，然后继续。
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // Moving on, we're now going to check for whitespace. This is interesting
    // because we care that whitespace exists to separate characters, but it
    // isn't actually important for us to store as a token. We would only throw
    // it out later.
    // 译：接下来，我们要检查空格。这很有趣，因为我们只关心空格是否存在以分隔字符，
    // 而是否作为标记（token）存储实际上并不重要。我们会在之后将其舍弃。
    // So here we're just going to test for existence and if it does exist we're
    // going to just `continue` on.
    // 译：因此，这里我们只是测试其存在性，如果确实存在，我们将继续。
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // The next type of token is a number. This is different than what we have
    // seen before because a number could be any number of characters and we
    // want to capture the entire sequence of characters as one token.
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        Only two separate tokens
    //
    // So we start this off when we encounter the first number in a sequence.
    // 译：下一个标记（token）的类型是 number。这与我们之前看到的有所不同，
    // 因为数字可以是任意数量的字符，并且我们希望将整个字符序列捕获为一个标记（token）。
    // (add 123 456)
    //      ^^^ ^^^
    // 有六个数字但是仅有两个标记（token）
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // We're going to create a `value` string that we are going to push
      // characters to.
      // 译：我们将创建一个“value”字符串，并将字符推入。
      let value = '';

      // Then we're going to loop through each character in the sequence until
      // we encounter a character that is not a number, pushing each character
      // that is a number to our `value` and incrementing `current` as we go.
      // 译：然后我们将遍历字符串中接下去的每一个字符，直到遇到一个不是数字的字符，
      // 将作为数字的每个字符推入到“value”，并随即增加“current”。
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // After that we push our `number` token to the `tokens` array.
      // 译：将“number”类型的标记（token）推入到 tokens 数组中。
      tokens.push({ type: 'number', value });

      // And we continue on.
      // 译：然后继续。
      continue;
    }

    // We'll also add support for strings in our language which will be any
    // text surrounded by double quotes (").
    //
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //
    // We'll start by checking for the opening quote:
    // 译：我们还将添加对我们的语言的字符串的支持，即被双引号（“）包裹的任何文本。
    // (concat "foo" "bar")
    //          ^^^   ^^^ string 类型的标记（token）
    // 首先检查左引号：
    if (char === '"') {
      // Keep a `value` variable for building up our string token.
      // 译：维护一个“value”变量以构建我们的 string 类型的标记（token）。
      let value = '';

      // We'll skip the opening double quote in our token.
      // 译：我们将跳过左引号。
      char = input[++current];

      // Then we'll iterate through each character until we reach another
      // double quote.
      // 译：然后我们将遍历字符串中接下去的每一个字符，直到到达右引号。
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // Skip the closing double quote.
      // 译：跳过右引号。
      char = input[++current];

      // And add our `string` token to the `tokens` array.
      // 译：将 string 类型的标记（token）推入 tokens 数组。
      tokens.push({ type: 'string', value });

      continue;
    }

    // The last type of token will be a `name` token. This is a sequence of
    // letters instead of numbers, that are the names of functions in our lisp
    // syntax.
    //
    //   (add 2 4)
    //    ^^^
    //    Name token
    // 译：最后一种标记（token）的类型是 name。这是一个字母序列而不是数字，代表 lisp 语法中的函数名。
    // (add 2 4)
    //  ^^^
    // name 类型的标记（token）
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // Again we're just going to loop through all the letters pushing them to
      // a value.
      // 译：同样地，我们将遍历接下去的所有字母，将它们推为一个值。
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // And pushing that value as a token with the type `name` and continuing.
      // 译：将该值作为 name 类型的标记（token）的 value，然后将其推入 tokens 数组并继续循环。
      tokens.push({ type: 'name', value });

      continue;
    }

    // Finally if we have not matched a character by now, we're going to throw
    // an error and completely exit.
    // 译：最后，如果我们到现在还没有匹配到字符，将抛出一个错误并退出。
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // Then at the end of our `tokenizer` we simply return the tokens array.
  // 译：在“tokenizer”的结尾简单地返回 tokens 数组。
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**
 * For our parser we're going to take our array of tokens and turn it into an
 * AST.
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 * 
 * 译：
 * 对于解析器，我们将使用 tokens 数组，并将其转换为 AST。
 * [{ type: 'paren', value: '(' }, ...] => { type: 'Program', body: [...] }
 */

// Okay, so we define a `parser` function that accepts our array of `tokens`.
// 译：定义一个“parser”函数来接收“tokens”数组。
function parser(tokens) {

  // Again we keep a `current` variable that we will use as a cursor.
  // 译：同样地，维护一个“current”变量，将其用作游标。
  let current = 0;

  // But this time we're going to use recursion instead of a `while` loop. So we
  // define a `walk` function.
  // 译：但是这次我们将使用递归而不是 while 循环。所以我们定义一个 walk 函数。 
  function walk() {

    // Inside the walk function we start by grabbing the `current` token.
    // 译：在 walk 函数内部，我们首先获取“current”标记（token）。
    let token = tokens[current];

    // We're going to split each type of token off into a different code path,
    // starting off with `number` tokens.
    // 译：从 number 类型的标记（token）开始，将每种类型的标记（token）拆分为不同的代码路径。
    // We test to see if we have a `number` token.
    // 译：测试一下是否有一个 number 类型的标记（token）。
    if (token.type === 'number') {

      // If we have one, we'll increment `current`.
      // 译：如果有，就增加“current"。
      current++;

      // And we'll return a new AST node called `NumberLiteral` and setting its
      // value to the value of our token.
      // 译：然后返回一个名为 NumberLiteral 的新 AST 节点，并将其 value 设置为标记（token）的 value。
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // If we have a string we will do the same as number and create a
    // `StringLiteral` node.
    // 译：如果有一个字符串，做与数字相同的操作并创建一个 StringLiteral 节点。
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // Next we're going to look for CallExpressions. We start this off when we
    // encounter an open parenthesis.
    // 译：接下来，我们将寻找 CallExpressions。当我们遇到一个左括号时，我们就开始构建 CallExpressions 节点。
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // We'll increment `current` to skip the parenthesis since we don't care
      // about it in our AST.
      // 译：增加“current”来跳过括号，因为在 AST 中我们不在意它。
      token = tokens[++current];

      // We create a base node with the type `CallExpression`, and we're going
      // to set the name as the current token's value since the next token after
      // the open parenthesis is the name of the function.
      // 译：创建一个类型为 CallExpression 的节点，
      // 由于左括号后的下一个标记（token）是函数的名称，因此我们将函数名设置为当前标记（token）的 value。
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // We increment `current` *again* to skip the name token.
      // 译：再次增加“current”来跳过 name 类型的标记（token）。
      token = tokens[++current];

      // And now we want to loop through each token that will be the `params` of
      // our `CallExpression` until we encounter a closing parenthesis.
      // 译：现在，我们要遍历将成为 CallExpression 的 params 的每个标记（token），直到遇到右括号为止。
      // Now this is where recursion comes in. Instead of trying to parse a
      // potentially infinitely nested set of nodes we're going to rely on
      // recursion to resolve things.
      // 译：这里就用到了递归。与其尝试解析可能无限嵌套的节点集，不如依靠递归来解决问题。
      // To explain this, let's take our Lisp code. You can see that the
      // parameters of the `add` are a number and a nested `CallExpression` that
      // includes its own numbers.
      // 译：为了解释这一点，让我们来看看 Lisp 代码。
      // 你会看到“add”的参数是一个数字和一个嵌套的 CallExpression。
      //   (add 2 (subtract 4 2))
      //
      // You'll also notice that in our tokens array we have multiple closing
      // parenthesis.
      // 译：你还会注意到，在我们的 tokens 数组中有多个右括号。
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //   ]
      //
      // We're going to rely on the nested `walk` function to increment our
      // `current` variable past any nested `CallExpression`.
      // 译：我们将依靠嵌套的 walk 函数来使递增的 current 变量传递到任何嵌套的 CallExpression 中。

      // So we create a `while` loop that will continue until it encounters a
      // token with a `type` of `'paren'` and a `value` of a closing
      // parenthesis.
      // 译：创建一个 while 循环，该循环将一直持续到遇到一个 paren 类型的标记（token），且它的 value 是右括号。
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // we'll call the `walk` function which will return a `node` and we'll
        // push it into our `node.params`.
        // 译：调用 walk 函数，该函数将返回节点一个，并将其推入 node.params 中。
        node.params.push(walk());
        token = tokens[current];
      }

      // Finally we will increment `current` one last time to skip the closing
      // parenthesis.
      // 译：最后增加一次“current”以跳过右括号。
      current++;

      // And return the node.
      // 译：然后返回该节点。
      return node;
    }

    // Again, if we haven't recognized the token type by now we're going to
    // throw an error.
    // 译：同样地，如果我们现在还没有识别出标记（token）的类型，那么将抛出一个错误。
    throw new TypeError(token.type);
  }

  // Now, we're going to create our AST which will have a root which is a
  // `Program` node.
  // 译：现在创建 AST，它的根是 Program 节点。
  let ast = {
    type: 'Program',
    body: [],
  };

  // And we're going to kickstart our `walk` function, pushing nodes to our
  // `ast.body` array.
  // 译：调用 walk 函数，将返回的节点推入 ast.body 数组中。
  // The reason we are doing this inside a loop is because our program can have
  // `CallExpression` after one another instead of being nested.
  // 译：在循环内执行此操作的原因是因为我们的程序可以一个接一个的拥有 CallExpression 而不是嵌套的。
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // At the end of our parser we'll return the AST.
  // 译：在 parser 的最后返回 AST。
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * So now we have our AST, and we want to be able to visit different nodes with
 * a visitor. We need to be able to call the methods on the visitor whenever we
 * encounter a node with a matching type.
 * 
 * TODO
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// So we define a traverser function which accepts an AST and a
// visitor. Inside we're going to define two functions...
function traverser(ast, visitor) {

  // A `traverseArray` function that will allow us to iterate over an array and
  // call the next function that we will define: `traverseNode`.
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode` will accept a `node` and its `parent` node. So that it can
  // pass both to our visitor methods.
  function traverseNode(node, parent) {

    // We start by testing for the existence of a method on the visitor with a
    // matching `type`.
    let methods = visitor[node.type];

    // If there is an `enter` method for this node type we'll call it with the
    // `node` and its `parent`.
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // Next we are going to split things up by the current node type.
    switch (node.type) {

      // We'll start with our top level `Program`. Since Program nodes have a
      // property named body that has an array of nodes, we will call
      // `traverseArray` to traverse down into them.
      //
      // (Remember that `traverseArray` will in turn call `traverseNode` so  we
      // are causing the tree to be traversed recursively)
      case 'Program':
        traverseArray(node.body, node);
        break;

      // Next we do the same with `CallExpression` and traverse their `params`.
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // In the cases of `NumberLiteral` and `StringLiteral` we don't have any
      // child nodes to visit, so we'll just break.
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // And again, if we haven't recognized the node type then we'll throw an
      // error.
      default:
        throw new TypeError(node.type);
    }

    // If there is an `exit` method for this node type we'll call it with the
    // `node` and its `parent`.
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // Finally we kickstart the traverser by calling `traverseNode` with our ast
  // with no `parent` because the top level of the AST doesn't have a parent.
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * Next up, the transformer. Our transformer is going to take the AST that we
 * have built and pass it to our traverser function with a visitor and will
 * create a new ast.
 *
 * ----------------------------------------------------------------------------
 *   Original AST                     |   Transformed AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// So we have our transformer function which will accept the lisp ast.
function transformer(ast) {

  // We'll create a `newAst` which like our previous AST will have a program
  // node.
  let newAst = {
    type: 'Program',
    body: [],
  };

  // Next I'm going to cheat a little and create a bit of a hack. We're going to
  // use a property named `context` on our parent nodes that we're going to push
  // nodes to their parent's `context`. Normally you would have a better
  // abstraction than this, but for our purposes this keeps things simple.
  //
  // Just take note that the context is a reference *from* the old ast *to* the
  // new ast.
  ast._context = newAst.body;

  // We'll start by calling the traverser function with our ast and a visitor.
  traverser(ast, {

    // The first visitor method accepts any `NumberLiteral`
    NumberLiteral: {
      // We'll visit them on enter.
      enter(node, parent) {
        // We'll create a new node also named `NumberLiteral` that we will push to
        // the parent context.
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // Next we have `StringLiteral`
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // Next up, `CallExpression`.
    CallExpression: {
      enter(node, parent) {

        // We start creating a new node `CallExpression` with a nested
        // `Identifier`.
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // Next we're going to define a new context on the original
        // `CallExpression` node that will reference the `expression`'s arguments
        // so that we can push arguments.
        node._context = expression.arguments;

        // Then we're going to check if the parent node is a `CallExpression`.
        // If it is not...
        if (parent.type !== 'CallExpression') {

          // We're going to wrap our `CallExpression` node with an
          // `ExpressionStatement`. We do this because the top level
          // `CallExpression` in JavaScript are actually statements.
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // Last, we push our (possibly wrapped) `CallExpression` to the `parent`'s
        // `context`.
        parent._context.push(expression);
      },
    }
  });

  // At the end of our transformer function we'll return the new ast that we
  // just created.
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * Now let's move onto our last phase: The Code Generator.
 *
 * Our code generator is going to recursively call itself to print each node in
 * the tree into one giant string.
 */

function codeGenerator(node) {

  // We'll break things down by the `type` of the `node`.
  switch (node.type) {

    // If we have a `Program` node. We will map through each node in the `body`
    // and run them through the code generator and join them with a newline.
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // For `ExpressionStatement` we'll call the code generator on the nested
    // expression and we'll add a semicolon...
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...because we like to code the *correct* way)
      );

    // For `CallExpression` we will print the `callee`, add an open
    // parenthesis, we'll map through each node in the `arguments` array and run
    // them through the code generator, joining them with a comma, and then
    // we'll add a closing parenthesis.
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // For `Identifier` we'll just return the `node`'s name.
    case 'Identifier':
      return node.name;

    // For `NumberLiteral` we'll just return the `node`'s value.
    case 'NumberLiteral':
      return node.value;

    // For `StringLiteral` we'll add quotations around the `node`'s value.
    case 'StringLiteral':
      return '"' + node.value + '"';

    // And if we haven't recognized the node, we'll throw an error.
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * FINALLY! We'll create our `compiler` function. Here we will link together
 * every part of the pipeline.
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // and simply return the output!
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!YOU MADE IT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// Now I'm just exporting everything...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
