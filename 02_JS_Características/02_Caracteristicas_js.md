#### CARACTERÍSTICA JAVASCRIPT

 
---

*   **TIPAGEM DINÂMICA** -> infere as informações dos tipos de variáveis;

*   Divisão por zero não é um erro no JavaScript -> **NaN**

*   **Linguagem interpretada** é um tipo de linguagem de programação que **não** é compilada para um código executável antes de ser executada ->  é interpretado linha por linha durante a execução do programa

        *   maior flexibilidade 
        *   maiorfacilidade de desenvolvimento
        *   Python, JavaScript e Ruby

*   **NODE JS** é o interpretador da linguagem fora do navegador padrão (outra opção);
*   **HOISTING** você pode atribuir um valor antes de declarar uma variável -> BAGUNÇADO KKKK    

---

#### Entre os outros métodos, existem:

*   **console.error()** para exibir mensagens de erro;
*   **console.table()** para visualizar de forma mais organizada informações tabulares;
*   **console.time()** e **console.timeEnd()** para temporizar período que uma operação de código leva para ser iniciada e concluída;
*   **console.trace()** para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

---

#### OPERADORES DE COMPARAÇÃO:

*   **=** -> atribuir valores
*   **==** -> verificar valor
*   **===** -> verificar valor e tipo

---

*CONVERSÕES:*

**IMPLICITA**
```JS
console.log(num3 + stringnum); // vai cocatenar
```

**EXPLICITA**
```js
console.log(num3 + Number(stringnum)); // vai converter e depois realizar a soma

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings
```


*   **+** => converte de string para número;
*   **Number()** => converte de string para número;
*   **.toString()** => converte de string para número;

---

#### OPERADORES MATEMÁTICOS:

||: Operador “ou”, retorna true caso uma condição seja válida;

&&: Operador “e”, retorna true somente se todas as condições forem válidas;

!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.