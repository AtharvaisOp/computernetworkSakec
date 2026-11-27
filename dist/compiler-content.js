"use strict";
const compilerContent = {
    "decks": [
        {
            "id": "fundamentals",
            "module": 1,
            "title": "Compiler fundamentals and phases",
            "requires": [
                "cd-fundamentals",
                "cd-phases"
            ],
            "cards": [
                {
                    "id": "cd-fundamentals-01",
                    "question": "What is system software?",
                    "answer": "Software that manages hardware or provides a platform and tools for running or building programs.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-02",
                    "question": "How do system and application programs differ?",
                    "answer": "System programs manage the platform or support other programs; applications solve user tasks.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-03",
                    "question": "What does an assembler do?",
                    "answer": "It translates assembly instructions and symbols into machine or object code.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-04",
                    "question": "How do compilers and interpreters differ?",
                    "answer": "A compiler translates source to a target program; an interpreter directly performs the source program’s operations, possibly through a runtime representation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-05",
                    "question": "What is a compiler pass?",
                    "answer": "One traversal of the input or an intermediate representation; a pass may implement several compiler phases.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-06",
                    "question": "What are the compiler’s main phases in order?",
                    "answer": "Lexical analysis, syntax analysis, semantic analysis, intermediate code generation, optimization, and target code generation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-07",
                    "question": "How do the compiler front end and back end differ?",
                    "answer": "The front end analyzes source and produces IR; the back end lowers and emits target code. The middle end usually optimizes IR.",
                    "kind": "theory"
                },
                {
                    "id": "cd-fundamentals-08",
                    "question": "Which phase should report an undeclared variable, and why?",
                    "answer": "Semantic analysis. The token and grammar can be valid while the identifier has no declaration in scope.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "lexical",
            "module": 1,
            "title": "Lexical analysis, tokens and symbol table",
            "requires": [
                "cd-tokens",
                "cd-automata",
                "cd-symbols"
            ],
            "cards": [
                {
                    "id": "cd-lexical-01",
                    "question": "What is lexical analysis?",
                    "answer": "Scanning the source into tokens for the parser.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-02",
                    "question": "Distinguish a token, pattern and lexeme.",
                    "answer": "A token is a category, a pattern describes its members, and a lexeme is the actual matched text.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-03",
                    "question": "What class of patterns describes most tokens?",
                    "answer": "Regular expressions; equivalent finite automata can recognize their languages.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-04",
                    "question": "How do deterministic and nondeterministic finite automata differ?",
                    "answer": "A DFA has one defined next state per state and symbol; an NFA may have alternatives, missing transitions or epsilon transitions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-05",
                    "question": "What does a longest-match scanner do when rule lengths tie?",
                    "answer": "It first chooses the longest matching prefix, then uses rule priority to break a tie; Lex/Flex chooses the earliest rule.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-06",
                    "question": "What does Lex/Flex generate?",
                    "answer": "A scanner, typically with a yylex function, from regular-expression rules and actions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-07",
                    "question": "What does a symbol table store?",
                    "answer": "Identifier bindings and attributes such as scope, type, storage location or signature.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lexical-08",
                    "question": "How does a scanner tokenize 'ifx' if 'if' is a keyword and identifiers allow letters?",
                    "answer": "As one identifier. The identifier rule matches three characters and the keyword rule only two.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "top-down",
            "module": 1,
            "title": "Top-down and LL parsing",
            "requires": [
                "cd-top-down",
                "cd-first-follow",
                "cd-ll-table"
            ],
            "cards": [
                {
                    "id": "cd-top-down-01",
                    "question": "What does LL(1) mean?",
                    "answer": "Scan input left to right, construct a leftmost derivation, and use one lookahead token.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-02",
                    "question": "How does a predictive recursive-descent parser work?",
                    "answer": "It uses one routine per nonterminal and selects a production from lookahead without backtracking.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-03",
                    "question": "What is FIRST of a symbol string?",
                    "answer": "Terminals that can begin a string it derives, plus epsilon if the whole string is nullable.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-04",
                    "question": "What is FOLLOW of a nonterminal?",
                    "answer": "Terminals that can appear directly after it in a sentential form; the start symbol’s FOLLOW includes end marker.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-05",
                    "question": "How do you fill the LL(1) table for A → α?",
                    "answer": "Place it under FIRST(α) minus epsilon; if α is nullable, also place it under FOLLOW(A).",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-06",
                    "question": "What does more than one entry in an LL(1) cell indicate?",
                    "answer": "A production-choice conflict: the grammar as written is not LL(1).",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-07",
                    "question": "Why remove left recursion from a predictive grammar?",
                    "answer": "A left-recursive alternative can call the same nonterminal without consuming input, causing infinite recursion.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-08",
                    "question": "Why is left factoring useful?",
                    "answer": "It delays the choice between alternatives until their common prefix has been consumed.",
                    "kind": "theory"
                },
                {
                    "id": "cd-top-down-09",
                    "question": "Eliminate immediate left recursion from A → A a | b.",
                    "answer": "Use A → b A′ and A′ → a A′ | ε.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "bottom-up",
            "module": 2,
            "title": "Bottom-up fundamentals, handles and shift-reduce parsing",
            "requires": [
                "cd-bottom-up",
                "cd-handles",
                "cd-shift-reduce"
            ],
            "cards": [
                {
                    "id": "cd-bottom-up-01",
                    "question": "What does bottom-up parsing construct?",
                    "answer": "A parse from input leaves to the start symbol, reversing a rightmost derivation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-02",
                    "question": "What is a handle?",
                    "answer": "A particular occurrence of a production right-hand side whose reduction reverses one rightmost-derivation step.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-03",
                    "question": "Why is not every matching right-hand side a handle?",
                    "answer": "The right-hand side must be the correct occurrence at that stage of the reverse rightmost derivation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-04",
                    "question": "What is handle pruning?",
                    "answer": "Repeatedly reducing the next handle until the start symbol remains.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-05",
                    "question": "What is a right sentential form?",
                    "answer": "A form reached at some step of a rightmost derivation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-06",
                    "question": "What happens during a shift?",
                    "answer": "The next input token moves onto the stack and the input cursor advances.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-07",
                    "question": "What happens during a reduce?",
                    "answer": "The parser replaces a matching right-hand side on top of the stack with its left-hand nonterminal.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-08",
                    "question": "What happens during a reduction by an empty production?",
                    "answer": "No grammar symbols are removed; the left-hand nonterminal is pushed and the resulting state is found with GOTO.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-09",
                    "question": "When does a shift-reduce parser accept?",
                    "answer": "When the grammar’s start construct is complete and the input is at the end marker under the parser’s accept action.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-10",
                    "question": "What is a shift/reduce conflict?",
                    "answer": "Both shifting the lookahead and making a reduction are possible in the same parsing-table cell.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-11",
                    "question": "What is a reduce/reduce conflict?",
                    "answer": "Two or more reductions compete in the same parsing-table cell.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-12",
                    "question": "What is a viable prefix?",
                    "answer": "A prefix of a right sentential form extending no farther than the right edge of its handle.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-13",
                    "question": "Why does a shift-reduce parser use a stack?",
                    "answer": "A handle appears at the stack top when it is time to reduce, while input remains to its right.",
                    "kind": "theory"
                },
                {
                    "id": "cd-bottom-up-14",
                    "question": "For S → a B and B → b, which reduction happens first on input ab?",
                    "answer": "After shifting a and b, reduce b to B; then reduce a B to S.",
                    "kind": "application"
                },
                {
                    "id": "cd-bottom-up-15",
                    "question": "Which conflict does the classic dangling-else grammar cause, and how is it often resolved?",
                    "answer": "Shift/reduce. Shifting else attaches it to the nearest unmatched if under the conventional rule.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "precedence",
            "module": 2,
            "title": "Operator precedence, LEADING and TRAILING",
            "requires": [
                "cd-leading-trailing",
                "cd-precedence-table"
            ],
            "cards": [
                {
                    "id": "cd-precedence-01",
                    "question": "What is an operator grammar in the standard precedence construction?",
                    "answer": "A grammar with no empty right-hand sides and no adjacent nonterminals on any right-hand side.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-02",
                    "question": "What makes an operator grammar an operator-precedence grammar?",
                    "answer": "Its terminal-to-terminal precedence relations have no conflicting multiple assignments for any pair.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-03",
                    "question": "What is LEADING(A), also called FIRSTVT(A)?",
                    "answer": "Terminals that can occur first, or immediately after one leading nonterminal, in a sentential form derived from A.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-04",
                    "question": "What is TRAILING(A), also called LASTVT(A)?",
                    "answer": "Terminals that can occur last, or immediately before one trailing nonterminal, in a sentential form derived from A.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-05",
                    "question": "When does construction assign a =· b?",
                    "answer": "When terminals a and b are adjacent in a right-hand side or separated by a single nonterminal.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-06",
                    "question": "When does construction assign a <· b?",
                    "answer": "When a directly precedes a nonterminal B and b belongs to LEADING(B).",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-07",
                    "question": "When does construction assign a ·> b?",
                    "answer": "When a belongs to TRAILING(A) and A directly precedes terminal b.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-08",
                    "question": "Which stack symbol is compared with lookahead in an operator-precedence parser?",
                    "answer": "The topmost terminal on the stack, skipping any nonterminals above it.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-09",
                    "question": "Which precedence relations trigger shifting or reduction?",
                    "answer": "Shift for <· and =·; reduce for ·>. An undefined relation usually signals an error.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-10",
                    "question": "How does the parser find the left boundary of a handle?",
                    "answer": "From the right boundary, scan back across =· relations to the nearest <· boundary between relevant terminals.",
                    "kind": "theory"
                },
                {
                    "id": "cd-precedence-11",
                    "question": "What precedence relations make left-associative minus and higher-precedence multiplication work?",
                    "answer": "Set minus ·> minus so an earlier subtraction reduces first, and minus <· multiply so multiplication shifts before that subtraction reduces.",
                    "kind": "application"
                },
                {
                    "id": "cd-precedence-12",
                    "question": "For A → B c and B → b, what relation does TRAILING(B) create?",
                    "answer": "b ·> c, since b is in TRAILING(B) and terminal c follows B.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "lr",
            "module": 2,
            "title": "LR(0), SLR, CLR, LALR and parser comparison",
            "requires": [
                "cd-lr-items",
                "cd-slr",
                "cd-clr",
                "cd-lalr"
            ],
            "cards": [
                {
                    "id": "cd-lr-01",
                    "question": "What does LR stand for?",
                    "answer": "Left-to-right scanning and rightmost derivation in reverse.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-02",
                    "question": "What is an LR(0) item?",
                    "answer": "A production with a dot marking how much of its right-hand side has been recognized.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-03",
                    "question": "Why augment the grammar with S′ → S?",
                    "answer": "It creates one distinguished completed item for acceptance.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-04",
                    "question": "What does LR(0) CLOSURE add when the dot precedes B?",
                    "answer": "Add B → ·γ for every production of B, recursively until nothing changes.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-05",
                    "question": "What does GOTO(I, X) compute?",
                    "answer": "Move the dot over X in every relevant item in I, then take their closure.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-06",
                    "question": "What is the initial canonical LR(0) state?",
                    "answer": "CLOSURE({S′ → ·S}).",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-07",
                    "question": "How do you build the canonical collection of LR states?",
                    "answer": "Apply GOTO to each known state and grammar symbol and add each distinct nonempty resulting item set.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-08",
                    "question": "What labels LR transitions?",
                    "answer": "A grammar symbol, either a terminal or a nonterminal.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-09",
                    "question": "What does the ACTION table index?",
                    "answer": "Parser state and terminal lookahead; it gives shift, reduce, accept or error.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-10",
                    "question": "What does the GOTO table index?",
                    "answer": "Parser state and nonterminal; it gives the state after recognizing that nonterminal.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-11",
                    "question": "How does an LR parser perform a shift?",
                    "answer": "It puts the terminal and the destination state on the stack, then advances input.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-12",
                    "question": "How does an LR parser reduce by A → β?",
                    "answer": "Pop the entries corresponding to β, then push A and GOTO of the exposed state on A.",
                    "kind": "application"
                },
                {
                    "id": "cd-lr-13",
                    "question": "What marks the accept entry in an LR table?",
                    "answer": "The completed augmented item S′ → S· with end marker lookahead.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-14",
                    "question": "Where does a completed ordinary LR(0) item place a reduce action?",
                    "answer": "On all terminal lookaheads, including the end marker.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-15",
                    "question": "How does an SLR table restrict reduce actions?",
                    "answer": "For A → α·, reduce only on terminals in FOLLOW(A).",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-16",
                    "question": "How does SLR differ from LR(0) when constructing states?",
                    "answer": "It uses the same LR(0) item states, but uses FOLLOW sets to restrict reductions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-17",
                    "question": "Why can SLR still have a conflict even though it uses FOLLOW?",
                    "answer": "FOLLOW(A) covers all grammar contexts, so it can include lookaheads not valid for that particular item state.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-18",
                    "question": "What extra information is in a canonical LR(1) item?",
                    "answer": "An explicit terminal lookahead, which permits reduction on that terminal when the item is complete.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-19",
                    "question": "What lookahead symbols are added in LR(1) closure for [A → α·Bβ, a]?",
                    "answer": "For each B production, use every terminal in FIRST(βa) as a lookahead.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-20",
                    "question": "What does CLR(1) mean?",
                    "answer": "Canonical LR(1), which keeps distinct LR(1) item sets and uses their item-specific lookaheads.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-21",
                    "question": "How does LALR(1) merge states?",
                    "answer": "Merge canonical LR(1) states with the same LR(0) core; union lookaheads on corresponding items.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-22",
                    "question": "What kind of new conflict can a same-core LALR merge introduce?",
                    "answer": "A reduce/reduce conflict that was absent in the original canonical LR(1) states.",
                    "kind": "theory"
                },
                {
                    "id": "cd-lr-23",
                    "question": "Given [A → α·B c, $], what is the lookahead for a newly added B item?",
                    "answer": "c, because FIRST(c$) contains c.",
                    "kind": "application"
                },
                {
                    "id": "cd-lr-24",
                    "question": "If a completed A item occurs and FOLLOW(A) = {b, $}, where does SLR place reductions?",
                    "answer": "Only in ACTION columns b and $, not for unrelated terminals.",
                    "kind": "application"
                },
                {
                    "id": "cd-lr-25",
                    "question": "What is the usual increasing grammar power among the four methods?",
                    "answer": "LR(0), SLR(1), LALR(1), then canonical LR(1); LALR typically keeps the LR(0) state count.",
                    "kind": "theory"
                }
            ]
        },
        {
            "id": "semantic",
            "module": 3,
            "title": "Semantic analysis, SDD and attributes",
            "requires": [
                "cd-semantic",
                "cd-attributes",
                "cd-sdd-order"
            ],
            "cards": [
                {
                    "id": "cd-semantic-01",
                    "question": "What does semantic analysis check?",
                    "answer": "Meaning constraints beyond grammar, such as declaration, scope, type compatibility and valid operand use.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-02",
                    "question": "What is a syntax-directed definition (SDD)?",
                    "answer": "A grammar with attributes on symbols and semantic rules attached to productions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-03",
                    "question": "What is a synthesized attribute?",
                    "answer": "A value computed at a node using values available from its descendants or local information.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-04",
                    "question": "What is an inherited attribute?",
                    "answer": "A value supplied to a node from its surrounding context, such as its parent or siblings allowed by the definition.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-05",
                    "question": "What is an attribute dependency graph?",
                    "answer": "A graph with one vertex per attribute occurrence and edges from each used value to the value that depends on it.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-06",
                    "question": "How do you pick a valid attribute evaluation order?",
                    "answer": "Take a topological order of the dependency graph when it is acyclic.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-07",
                    "question": "What is an S-attributed definition?",
                    "answer": "An SDD with only synthesized attributes, normally evaluated bottom-up.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-08",
                    "question": "What is an L-attributed definition?",
                    "answer": "An SDD whose inherited attributes can use parent inherited values and left-sibling attributes, with no cyclic dependency.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-09",
                    "question": "Are all S-attributed definitions L-attributed?",
                    "answer": "Yes; there are no inherited attributes to violate the restrictions.",
                    "kind": "theory"
                },
                {
                    "id": "cd-semantic-10",
                    "question": "How would an SDD propagate a declared type across a comma-separated identifier list?",
                    "answer": "Pass the type to the list as an inherited attribute and use it when recording each identifier.",
                    "kind": "application"
                },
                {
                    "id": "cd-semantic-11",
                    "question": "In E → E₁ + T with E.val = E₁.val + T.val, which values must be available first?",
                    "answer": "E₁.val and T.val. Both dependencies point into E.val.",
                    "kind": "application"
                },
                {
                    "id": "cd-semantic-12",
                    "question": "What is the difference between an SDD and a translation scheme?",
                    "answer": "An SDD specifies attribute rules; a translation scheme embeds semantic actions at explicit positions in productions.",
                    "kind": "theory"
                }
            ]
        },
        {
            "id": "ir",
            "module": 3,
            "title": "Intermediate code representations",
            "requires": [
                "cd-syntax-ir",
                "cd-tac",
                "cd-reps"
            ],
            "cards": [
                {
                    "id": "cd-ir-01",
                    "question": "How does an abstract syntax tree differ from a parse tree?",
                    "answer": "It keeps meaningful operators and operands but omits many grammar nodes and punctuation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-02",
                    "question": "What is postfix notation?",
                    "answer": "An expression representation with each operator after its operands.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-03",
                    "question": "What is the advantage of a DAG over a tree for expression representation?",
                    "answer": "A DAG can share a node for a repeated equivalent computation instead of duplicating it.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-04",
                    "question": "When is it unsafe to share a repeated-looking expression in a DAG?",
                    "answer": "When its operand values have changed or reusing the computation would change observable effects.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-05",
                    "question": "What is three-address code (TAC)?",
                    "answer": "A linear IR with simple operations, typically one operator and up to three addresses per instruction.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-06",
                    "question": "What is a temporary in intermediate code?",
                    "answer": "A compiler-created name that holds an intermediate value.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-07",
                    "question": "What are common control-flow forms in TAC?",
                    "answer": "Labels, unconditional jumps, conditional jumps, calls and returns.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-08",
                    "question": "What are the four fields of a quadruple?",
                    "answer": "Operator, argument 1, argument 2 and result.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-09",
                    "question": "How does a triple name a computed result?",
                    "answer": "By the position or identifier of the triple itself, without a separate result field.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-10",
                    "question": "How does an indirect triple support reordering?",
                    "answer": "It stores an ordered list of pointers to triples so order can change without changing the referenced triple IDs.",
                    "kind": "theory"
                },
                {
                    "id": "cd-ir-11",
                    "question": "Give postfix notation for a + b * c.",
                    "answer": "a b c * +",
                    "kind": "application"
                },
                {
                    "id": "cd-ir-12",
                    "question": "Write TAC for x = (a + b) * c.",
                    "answer": "t1 = a + b; t2 = t1 * c; x = t2.",
                    "kind": "application"
                },
                {
                    "id": "cd-ir-13",
                    "question": "Which representation is usually easier to reorder, direct triples or quadruples?",
                    "answer": "Quadruples, because instructions refer to explicit result names rather than instruction positions.",
                    "kind": "theory"
                }
            ]
        },
        {
            "id": "optimization",
            "module": 4,
            "title": "Optimization techniques",
            "requires": [
                "cd-optimization",
                "cd-optimization-methods"
            ],
            "cards": [
                {
                    "id": "cd-optimization-01",
                    "question": "What is code optimization?",
                    "answer": "Changing a program representation to improve performance, size or another cost without changing required observable behavior.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-02",
                    "question": "Why can optimization have trade-offs?",
                    "answer": "Improving speed can increase code size or compilation time; optimizing for one target or workload may hurt another.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-03",
                    "question": "What is machine-independent optimization?",
                    "answer": "An improvement expressed over IR without relying on a specific instruction set or register file.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-04",
                    "question": "What is machine-dependent optimization?",
                    "answer": "An improvement relying on target details such as addressing modes, instruction costs or register classes.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-05",
                    "question": "What is local optimization?",
                    "answer": "Optimization within a single basic block.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-06",
                    "question": "What is global optimization?",
                    "answer": "Optimization across basic-block boundaries within a wider region, typically a function.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-08",
                    "question": "What is constant folding?",
                    "answer": "Evaluating a compile-time constant expression during compilation.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-09",
                    "question": "What is constant propagation?",
                    "answer": "Replacing a variable use with its known constant value when the value is the same on every relevant path.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-10",
                    "question": "What is copy propagation?",
                    "answer": "Using the copied source directly where it still holds the same value.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-11",
                    "question": "What is common subexpression elimination?",
                    "answer": "Reusing a previous computation when its operands and behavior still make the result equivalent.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-12",
                    "question": "What is dead code elimination?",
                    "answer": "Removing instructions whose results cannot affect observed behavior, provided evaluation has no required side effects.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-13",
                    "question": "What is unreachable code elimination?",
                    "answer": "Removing blocks that cannot execute from the program entry under the analyzed control flow.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-14",
                    "question": "What is strength reduction?",
                    "answer": "Replacing a costly operation with a cheaper equivalent.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-15",
                    "question": "What is loop-invariant code motion?",
                    "answer": "Moving a computation out of a loop when its value does not change and moving it is safe.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-16",
                    "question": "What does loop unrolling trade for fewer loop-control operations?",
                    "answer": "More code size and potentially greater register pressure.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-17",
                    "question": "What is an induction variable?",
                    "answer": "A value that changes predictably by a fixed amount on each loop iteration.",
                    "kind": "theory"
                },
                {
                    "id": "cd-optimization-18",
                    "question": "Optimize t = 3 * 4 followed by x = t + 1 when t is otherwise unused.",
                    "answer": "Fold 3 * 4 to 12, propagate 12, fold 12 + 1 to 13, and remove the dead assignment to t.",
                    "kind": "application"
                },
                {
                    "id": "cd-optimization-19",
                    "question": "Can a compiler freely delete x = read_input() when x is never read?",
                    "answer": "No. The call can have an observable side effect even when its returned value is dead.",
                    "kind": "application"
                },
                {
                    "id": "cd-optimization-20",
                    "question": "When is replacing integer multiplication by 8 with a left shift valid?",
                    "answer": "When the source and target arithmetic rules make the two equivalent, including width, signedness and overflow behavior.",
                    "kind": "application"
                }
            ]
        },
        {
            "id": "flow-liveness",
            "module": 4,
            "title": "Basic blocks, flow graphs and liveness",
            "requires": [
                "cd-blocks",
                "cd-cfg",
                "cd-liveness"
            ],
            "cards": [
                {
                    "id": "cd-flow-liveness-01",
                    "question": "What is a basic block?",
                    "answer": "A maximal straight-line instruction sequence that can be entered only at its first instruction and has no internal branch.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-02",
                    "question": "What instructions are leaders in standard basic-block construction?",
                    "answer": "The entry instruction, every jump target and every instruction immediately following a jump.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-03",
                    "question": "How is one basic block bounded in the leader algorithm?",
                    "answer": "It begins at a leader and ends immediately before the next leader or at program end.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-04",
                    "question": "What does a control-flow graph represent?",
                    "answer": "Basic blocks are nodes; directed edges represent possible transfers between blocks.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-05",
                    "question": "What successors can the last conditional branch of a block have?",
                    "answer": "Its branch target and, when it exists, the fall-through block.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-06",
                    "question": "What successor does an unconditional jump have?",
                    "answer": "Only its target block, not the next block in the listing.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-07",
                    "question": "What does it mean for a variable to be live at a point?",
                    "answer": "Some path from that point can read its current value before a redefinition.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-08",
                    "question": "Is liveness a forward or backward analysis?",
                    "answer": "Backward: a later use can make a value live at an earlier point.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-09",
                    "question": "Why is liveness often called a may analysis?",
                    "answer": "A value is live if it may be read along any possible path before being overwritten.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-10",
                    "question": "What is USE[B] in block liveness?",
                    "answer": "Variables read in B before any local definition of that variable.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-11",
                    "question": "What is DEF[B] in block liveness?",
                    "answer": "Variables assigned values in block B; they kill propagation of the corresponding incoming values through the block.",
                    "kind": "theory"
                },
                {
                    "id": "cd-flow-liveness-12",
                    "question": "State the standard block liveness equations.",
                    "answer": "OUT[B] = union of IN[S] for successors S. IN[B] = USE[B] union (OUT[B] − DEF[B]).",
                    "kind": "application"
                },
                {
                    "id": "cd-flow-liveness-13",
                    "question": "If USE[B]={a}, DEF[B]={b} and OUT[B]={b,c}, what is IN[B]?",
                    "answer": "{a,c}; B uses a and its definition of b kills the incoming b value.",
                    "kind": "application"
                },
                {
                    "id": "cd-flow-liveness-14",
                    "question": "If a branch can go to successors live-in {x} and {y}, what is OUT[B]?",
                    "answer": "{x,y}. Liveness joins alternative successor paths by union.",
                    "kind": "application"
                },
                {
                    "id": "cd-flow-liveness-15",
                    "question": "How does the compiler solve liveness on a graph with loops?",
                    "answer": "It repeatedly recomputes IN and OUT until the sets stop changing.",
                    "kind": "theory"
                }
            ]
        },
        {
            "id": "codegen",
            "module": 4,
            "title": "Code generator design and algorithms",
            "requires": [
                "cd-codegen-design",
                "cd-codegen-algorithm"
            ],
            "cards": [
                {
                    "id": "cd-codegen-01",
                    "question": "What is the code generator’s primary task?",
                    "answer": "Translate IR into correct target assembly or machine code while choosing efficient instructions and resources.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-02",
                    "question": "How do instruction selection and instruction scheduling differ?",
                    "answer": "Selection chooses target operations; scheduling orders operations while respecting dependencies and target constraints.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-03",
                    "question": "What is register allocation?",
                    "answer": "Choosing which live values occupy registers and which must stay in memory.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-04",
                    "question": "How does register assignment differ from allocation?",
                    "answer": "Allocation decides which values should get registers; assignment chooses their specific physical registers.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-05",
                    "question": "What is register spilling?",
                    "answer": "Saving a value to memory when it cannot remain in a register, then reloading it when needed.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-06",
                    "question": "What does a register descriptor record?",
                    "answer": "Which program values currently have valid copies in a particular register.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-07",
                    "question": "What does an address descriptor record?",
                    "answer": "Which registers or memory locations currently contain a valid copy of a given value.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-08",
                    "question": "Why is next-use information useful?",
                    "answer": "It identifies values needed soon and values with no later use in the block, guiding register reuse and spills.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-09",
                    "question": "When may a simple generator reuse an operand register without saving it?",
                    "answer": "When overwriting it cannot destroy the only needed copy of a live value.",
                    "kind": "application"
                },
                {
                    "id": "cd-codegen-10",
                    "question": "What should the generator arrange before leaving a block?",
                    "answer": "Values needed later must be available at the agreed locations; a simple scheme stores live-out values that lack a valid memory copy.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-11",
                    "question": "Why do target addressing modes matter?",
                    "answer": "They determine which operands can be loaded, stored or combined directly and affect instruction count.",
                    "kind": "theory"
                },
                {
                    "id": "cd-codegen-12",
                    "question": "Generate simple load/store instructions for x = a + b when both sources begin in memory.",
                    "answer": "LOAD R1, a; LOAD R2, b; ADD R1, R1, R2; STORE x, R1. A target with an allowed memory operand may need fewer instructions.",
                    "kind": "application"
                },
                {
                    "id": "cd-codegen-13",
                    "question": "One register holds dead t and another holds live y with no current memory copy. Which should get the new temporary?",
                    "answer": "Reuse t’s register; it avoids saving a value that is no longer needed and preserves y.",
                    "kind": "application"
                }
            ]
        }
    ],
    "quick": [
        {
            "id": "cd-quick-01",
            "module": 1,
            "question": "What are the main compiler phases?",
            "answer": "Lexical analysis, syntax analysis, semantic analysis, IR generation, optimization and target code generation.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-02",
            "module": 1,
            "question": "When does a nullable alternative use FOLLOW in an LL(1) table?",
            "answer": "If A → α and α derives ε, add it to the cells for terminals in FOLLOW(A).",
            "kind": "theory"
        },
        {
            "id": "cd-quick-03",
            "module": 3,
            "question": "How do synthesized and inherited attributes differ?",
            "answer": "Synthesized values are computed upward; inherited values are passed to a node from its context.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-04",
            "module": 2,
            "question": "What makes a substring the handle?",
            "answer": "Reducing that exact occurrence reverses the next step of the rightmost derivation.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-05",
            "module": 2,
            "question": "Which operator-precedence relations mean shift or reduce?",
            "answer": "Shift on <· or =·; reduce on ·>.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-06",
            "module": 2,
            "question": "How do LR(0), SLR and CLR choose reduction lookaheads?",
            "answer": "LR(0) uses every terminal, SLR uses FOLLOW of the production's left side, and CLR uses the completed item's explicit lookahead.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-07",
            "module": 2,
            "question": "What does LALR merge?",
            "answer": "Canonical LR(1) states with the same LR(0) core; corresponding lookahead sets are combined.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-08",
            "module": 4,
            "question": "How do you find leaders when partitioning basic blocks?",
            "answer": "Mark the first instruction, each jump target, and each instruction immediately following a jump.",
            "kind": "theory"
        },
        {
            "id": "cd-quick-09",
            "module": 4,
            "question": "What equations express block liveness?",
            "answer": "OUT[B] = union of successor IN sets; IN[B] = USE[B] ∪ (OUT[B] − DEF[B]).",
            "kind": "theory"
        },
        {
            "id": "cd-quick-10",
            "module": 4,
            "question": "What is the difference between a register descriptor and an address descriptor?",
            "answer": "A register descriptor maps a register to values it holds; an address descriptor maps a value to places holding a valid copy.",
            "kind": "theory"
        }
    ],
    "concepts": [
        {
            "id": "cd-fundamentals",
            "module": 1,
            "syllabus": "1.1",
            "title": "System software and translators",
            "note": "System software runs or supports the computing platform; application software serves end-user tasks. An assembler converts symbolic machine instructions; a compiler emits a target program; an interpreter carries out the source program's behavior.",
            "checklist": [
                "Compare system and application software",
                "Distinguish assembler, compiler and interpreter"
            ]
        },
        {
            "id": "cd-phases",
            "module": 1,
            "syllabus": "1.2",
            "title": "Compiler phases",
            "note": "Text → tokens → syntax tree → semantically checked tree → IR → optimized IR → target code. The symbol table and diagnostic machinery support several phases. A phase is a logical job, not necessarily a distinct pass.",
            "checklist": [
                "Trace the compiler pipeline",
                "Distinguish a phase from a pass",
                "Identify where typical errors are caught"
            ]
        },
        {
            "id": "cd-tokens",
            "module": 1,
            "syllabus": "1.3,1.4",
            "title": "Lexical analysis and tokens",
            "note": "Regular expressions specify token patterns. A scanner groups actual lexemes into token categories, normally taking the longest match and breaking ties by priority.",
            "checklist": [
                "Identify token, pattern and lexeme",
                "Apply longest match and rule priority"
            ]
        },
        {
            "id": "cd-automata",
            "module": 1,
            "syllabus": "1.3",
            "title": "Finite-state recognition",
            "note": "Convert a regular expression to an NFA, build a DFA by subset construction, and scan until no transition is possible. Track the latest accepting position to implement longest match.",
            "checklist": [
                "Recognize accepting states",
                "Explain NFA versus DFA",
                "Trace a matched prefix"
            ]
        },
        {
            "id": "cd-symbols",
            "module": 1,
            "syllabus": "1.4",
            "title": "Lex/Flex and symbol tables",
            "note": "Lex/Flex scans with regular-expression rules and user actions. A symbol table maps identifiers to bindings and records attributes such as scope and type; the scanner and later compiler phases may update or consult it.",
            "checklist": [
                "Explain scanner rules and actions",
                "Identify common symbol attributes",
                "Explain scope-sensitive lookup"
            ]
        },
        {
            "id": "cd-top-down",
            "module": 1,
            "syllabus": "1.5",
            "title": "Recursive descent and grammar transformations",
            "note": "A predictive parser chooses productions without backtracking. Eliminate left recursion to avoid a same-position recursive call. Left-factor a shared prefix so lookahead can decide after it is consumed.",
            "checklist": [
                "Convert immediate left recursion",
                "Left-factor a grammar",
                "Sketch one routine per nonterminal"
            ]
        },
        {
            "id": "cd-first-follow",
            "module": 1,
            "syllabus": "1.5",
            "title": "FIRST, FOLLOW and nullable",
            "note": "FIRST(X) describes possible first terminals and includes ε if X is nullable. In A → αBβ, add FIRST(β) except ε to FOLLOW(B); if β is nullable, add FOLLOW(A). Start-symbol FOLLOW includes $.",
            "checklist": [
                "Compute nullable for symbol sequences",
                "Compute FIRST and FOLLOW to a fixed point"
            ]
        },
        {
            "id": "cd-ll-table",
            "module": 1,
            "syllabus": "1.5",
            "title": "Predictive LL(1) table",
            "note": "For A → α, place the production under each terminal in FIRST(α). If α is nullable, use FOLLOW(A) as well. A duplicate cell indicates that this grammar is not LL(1).",
            "checklist": [
                "Fill a predictive parsing table",
                "Trace stack, lookahead and action",
                "Recognize a conflicting cell"
            ]
        },
        {
            "id": "cd-bottom-up",
            "module": 2,
            "syllabus": "2.1",
            "title": "Bottom-up derivation",
            "note": "Start with the input and combine recognized phrases into larger nonterminals. The reductions reverse a rightmost derivation and stop when the start symbol is recognized.",
            "checklist": [
                "Reverse a rightmost derivation",
                "Distinguish top-down and bottom-up construction"
            ]
        },
        {
            "id": "cd-handles",
            "module": 2,
            "syllabus": "2.1",
            "title": "Handles and viable prefixes",
            "note": "A handle is the occurrence of a production right-hand side that can be reduced to reverse the current rightmost-derivation step. A viable prefix does not extend beyond the handle's right edge.",
            "checklist": [
                "Identify the next handle in a trace",
                "Explain why matching RHS text alone is insufficient"
            ]
        },
        {
            "id": "cd-shift-reduce",
            "module": 2,
            "syllabus": "2.2",
            "title": "Shift-reduce parsing",
            "note": "Shift pushes input; reduce replaces the handle at the stack top with its left-hand nonterminal. Accept marks success. An empty or conflicting table entry requires detection or a specified resolution.",
            "checklist": [
                "Trace shifts and reductions",
                "Recognize shift/reduce and reduce/reduce conflict"
            ]
        },
        {
            "id": "cd-leading-trailing",
            "module": 2,
            "syllabus": "2.1",
            "title": "LEADING and TRAILING",
            "note": "LEADING and TRAILING collect first/last terminals in derivable sentential forms, allowing one nonterminal at the same edge. They are often called FIRSTVT and LASTVT and aren't the same as FIRST/FOLLOW.",
            "checklist": [
                "Compute both sets using grammar productions",
                "Distinguish LEADING from FIRST"
            ]
        },
        {
            "id": "cd-precedence-table",
            "module": 2,
            "syllabus": "2.1",
            "title": "Precedence relations and parsing table",
            "note": "Between adjacent terminals, or terminals separated by one nonterminal, add =·. Use terminal-before-nonterminal plus LEADING for <·, and TRAILING plus terminal-after-nonterminal for ·>. Shift on <· or =· and reduce on ·>.",
            "checklist": [
                "Build a terminal-pair table",
                "Trace handle boundaries",
                "Identify conflicting relations"
            ]
        },
        {
            "id": "cd-lr-items",
            "module": 2,
            "syllabus": "2.2",
            "title": "LR item sets, CLOSURE and GOTO",
            "note": "An LR(0) item adds a dot to a production. CLOSURE adds possible starts after a nonterminal; GOTO moves the dot over a symbol and closes the result. Explore all reachable sets to build the state graph.",
            "checklist": [
                "Augment a grammar",
                "Construct I₀ with CLOSURE",
                "Compute GOTO and a state graph"
            ]
        },
        {
            "id": "cd-slr",
            "module": 2,
            "syllabus": "2.2",
            "title": "LR(0) and SLR parsing tables",
            "note": "Terminal transitions create shifts; nonterminal transitions populate GOTO. A completed LR(0) item reduces on all lookaheads; SLR instead reduces on FOLLOW of its left-hand side. The completed augmented item accepts on $.",
            "checklist": [
                "Fill LR(0) and SLR ACTION/GOTO",
                "Compare reduction columns",
                "Recognize table conflicts"
            ]
        },
        {
            "id": "cd-clr",
            "module": 2,
            "syllabus": "2.2",
            "title": "Canonical LR(1) tables",
            "note": "Canonical LR(1) items carry explicit lookaheads. For [A → α·Bβ, a], closure gives new B items lookaheads from FIRST(βa). A completed item reduces only on its own lookaheads.",
            "checklist": [
                "Compute closure lookaheads",
                "Construct canonical states",
                "Place item-specific reductions"
            ]
        },
        {
            "id": "cd-lalr",
            "module": 2,
            "syllabus": "2.2",
            "title": "LALR merging and parser comparison",
            "note": "Merge canonical states with matching LR(0) cores and union corresponding lookaheads. This reduces table size but may create reduce/reduce conflicts. LR(0), SLR, LALR and CLR trade table size against recognition power.",
            "checklist": [
                "Merge same-core states",
                "Check new conflicts",
                "Compare table size and grammar power"
            ]
        },
        {
            "id": "cd-semantic",
            "module": 3,
            "syllabus": "3.1",
            "title": "Semantic analysis and SDD",
            "note": "Semantic analysis checks declarations, visibility and type rules. A syntax-directed definition associates attributes with grammar symbols and equations with productions.",
            "checklist": [
                "Distinguish syntax and semantic errors",
                "Read a semantic rule",
                "Identify information needed for type checking"
            ]
        },
        {
            "id": "cd-attributes",
            "module": 3,
            "syllabus": "3.1",
            "title": "Synthesized and inherited attributes",
            "note": "Synthesized values move results up from a node's children. Inherited values provide information from surrounding context, such as a type propagated into an identifier list.",
            "checklist": [
                "Classify each attribute direction",
                "Trace type propagation",
                "Trace expression value synthesis"
            ]
        },
        {
            "id": "cd-sdd-order",
            "module": 3,
            "syllabus": "3.2",
            "title": "SDD evaluation order",
            "note": "Connect each used attribute to the attribute that depends on it. An acyclic dependency graph admits a topological evaluation order. S-attributed definitions can run bottom-up; L-attributed ones admit left-to-right depth-first evaluation.",
            "checklist": [
                "Build an attribute dependency graph",
                "Pick a valid evaluation order",
                "Distinguish S-attributed and L-attributed"
            ]
        },
        {
            "id": "cd-syntax-ir",
            "module": 3,
            "syllabus": "3.3",
            "title": "Syntax trees, postfix and DAGs",
            "note": "A syntax tree retains essential operators and operands. Postfix follows postorder for expression trees. A DAG may share a repeated safe computation when operands still have the same values.",
            "checklist": [
                "Convert expressions to postfix",
                "Build a syntax tree",
                "Share a common subexpression safely"
            ]
        },
        {
            "id": "cd-tac",
            "module": 3,
            "syllabus": "3.3",
            "title": "Three-address code",
            "note": "Lower complex expressions into simple assignments with temporaries. Represent control flow using labels and conditional/unconditional jumps.",
            "checklist": [
                "Generate TAC for a nested expression",
                "Generate a branch and a label"
            ]
        },
        {
            "id": "cd-reps",
            "module": 3,
            "syllabus": "3.3",
            "title": "Triples, quadruples and indirect triples",
            "note": "Quadruples explicitly name the result; triples refer to another triple for its result; indirect triples separate execution order from stable triple positions.",
            "checklist": [
                "Convert TAC to each representation",
                "Explain which representations ease reordering"
            ]
        },
        {
            "id": "cd-optimization",
            "module": 4,
            "syllabus": "4.1",
            "title": "Optimization goals and scope",
            "note": "Optimization keeps observable behavior while changing runtime, size or related costs. Machine-independent optimization operates on IR; machine-dependent optimization relies on the target. Local optimization stays within a block; global optimization crosses blocks.",
            "checklist": [
                "Compare machine-dependent and machine-independent changes",
                "Distinguish local and global scope",
                "Check side effects"
            ]
        },
        {
            "id": "cd-optimization-methods",
            "module": 4,
            "syllabus": "4.1",
            "title": "Common optimization techniques",
            "note": "Fold constants, propagate known values, reuse a common expression when safe, and eliminate genuinely dead operations. Loop optimizations include safe invariant motion and induction-variable strength reduction.",
            "checklist": [
                "Apply folding and propagation",
                "Find a safe common expression",
                "Identify invariant, dead and unreachable operations"
            ]
        },
        {
            "id": "cd-blocks",
            "module": 4,
            "syllabus": "4.2",
            "title": "Basic blocks and leaders",
            "note": "Mark the first instruction, jump targets and instructions immediately after jumps as leaders. Each block extends until just before the next leader.",
            "checklist": [
                "Mark all leaders",
                "Partition a numbered instruction list"
            ]
        },
        {
            "id": "cd-cfg",
            "module": 4,
            "syllabus": "4.2",
            "title": "Control-flow graphs",
            "note": "Draw one node per basic block. Conditional branches normally add target and fall-through edges; unconditional branches add just their targets. A return has no ordinary successor inside that function.",
            "checklist": [
                "Draw fall-through and branch edges",
                "Identify unreachable blocks"
            ]
        },
        {
            "id": "cd-liveness",
            "module": 4,
            "syllabus": "4.3",
            "title": "Liveness analysis",
            "note": "A value is live if a future use can occur before redefinition. Work backward to a fixed point: OUT[B] is union of successor IN sets; IN[B] = USE[B] ∪ (OUT[B] − DEF[B]).",
            "checklist": [
                "Compute USE and DEF",
                "Evaluate IN/OUT sets",
                "Repeat through loops until stable"
            ]
        },
        {
            "id": "cd-codegen-design",
            "module": 4,
            "syllabus": "4.4",
            "title": "Code-generator design",
            "note": "Instruction selection picks target operations; register allocation and assignment control register use; scheduling orders instructions subject to dependencies. Addressing modes and calling conventions constrain legal code.",
            "checklist": [
                "Compare instruction selection, allocation and scheduling",
                "Explain spill costs and target constraints"
            ]
        },
        {
            "id": "cd-codegen-algorithm",
            "module": 4,
            "syllabus": "4.4",
            "title": "Simple code-generation algorithm",
            "note": "Track register and address descriptors. For each TAC instruction, find a register, load operands as needed, emit the target operation, update descriptors, and arrange needed live-out values before a block exit.",
            "checklist": [
                "Trace LOAD, operation and STORE",
                "Update descriptors",
                "Choose a register using next use"
            ]
        }
    ]
};
