O que vamos aprender?
O Unix é um sistema operacional popular que foi lançado em 1969 e ganhou muitas das variações que se tornaram os principais sistemas operacionais do mercado. Vamos aprender como funciona o Unix e como interagir com ele através do terminal, utilizando o Bash.
Os principais pontos abordados serão:
Quais são seus principais componentes?
Quais são suas variações?
Arquivos e processos, o que são?
Qual sua estrutura de diretórios?
O que é o terminal?
Comandos executados no Shell.

Você será capaz de:
Executar comandos no terminal para navegar entre diretórios;
Executar comandos no terminal para criar e manipular arquivos e diretórios;
Executar comandos no terminal para realizar buscas;

##Parte I - Criação de arquivos e diretórios

Dica : Para criação de arquivos vazios você pode utilizar o comando touch nome-do-arquivo.extensao .


  ### **Exercício 1 - Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu: crie um diretório chamado unix_tests e navegue até ele.**
 
  ```mkdir unix_tests
  cd unix_tests ```

  # exercício 2 - Crie um arquivo de texto com o nome trybe.txt

  touch trybe.txt
Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt .
Copiar
  # exercício 3
  cp trybe.txt trybe_backup.txt
Renomeie o arquivo trybe.txt .
Copiar
  # exercício 4
  mv trybe.txt outro_nome.txt
Dentro de unix_tests , crie um novo diretório chamado backup .
Copiar
  # exercício 5
  mkdir backup
Mova o arquivo trybe_backup.txt para o diretório backup .
Copiar
  # exercício 6
  mv trybe_backup.txt backup
Dentro de unix_tests , crie um novo diretório chamado backup2 .
Copiar
  # exercício 7
  mkdir backup2
Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2 .
Copiar
  # exercício 8
  mv backup/trybe_backup.txt backup2
Apague a pasta backup .
Copiar
  # exercício 9
  rmdir backup
Renomeie a pasta backup2 para backup .
Copiar
  # exercício 10
  mv backup2 backup
Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
Copiar
  # exercício 11
  pwd
  ls -l .
Apague o diretório backup .
Copiar
  # exercício 12
  rm -rd backup
Limpe o terminal.
Copiar
  # exercício 13
  clear
Mostre na tela as 5 primeiras skills do arquivo skills.txt .
Copiar
  # exercício 14
  head -n 5 skills.txt

Caso você não tenha conseguido fazer esse exercício, reforce seus estudos sobre comandos do shell, manual e flags.
Mostre na tela as 4 últimas skills do arquivo skills.txt .
Copiar
  # exercício 15
  tail -n 4 skills.txt
Apague todos os arquivos que terminem em .txt .
Copiar
  # exercício 16
  rm *.txt
Parte II - Manipulação & Busca
Na pasta unix-tests , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl:
Copiar
  # exercício 1
  curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
Mostre todo o conteúdo do arquivo countries.txt na tela.
Copiar
  # exercício 2
  cat countries.txt
Mostre o conteúdo de countries.txt , página por página, até encontrar a Zambia .
Copiar
  # exercício 3
  less countries.txt
  # ou...
  more countries.txt
Mostre novamente o conteúdo de countries.txt pagina por pagina, mas agora utilize um comando para buscar por Zambia .
Copiar
  # exercício 4
  less countries.txt
  # ou...
  more countries.txt
  # agora que você está dentro do arquivo, digite uma barra `/` e em seguida a palavra Zambia
  # /Zambia
  # pressione "Enter" para sair
Busque por Brazil no countries.txt .
Copiar
  # exercício 5
  grep Brazil countries.txt
Busque novamente por brazil , mas agora utilizando o lower case.
Copiar
  # exercício 6
  grep -i brazil countries.txt
Busque pelas frases que não contenham a palavra fox .
Copiar
  # exercício 7
  grep -v fox phrases.txt
Conte o número de palavras do arquivo phrases.txt .
Copiar
  # exercício 8
  wc -w phrases.txt
Conte o número de linhas do arquivo phrases.txt .
Copiar
  # exercício 9
  wc -l phrases.txt
Crie os arquivos empty.tbt e empty.pdf .
Copiar
  # exercício 10
  touch empty.tbt
  touch empty.pdf
Liste todos os arquivos do diretório unix_tests .
Copiar
  # exercício 11
  ls -l
Liste todos os arquivos que terminem com txt .
Copiar
  # exercício 12
  ls -l *txt
Liste todos os arquivos que terminem com tbt ou txt .
Copiar
  # exercício 13
  ls -l *t?t
Acesse o manual do comando ls .
Copiar
  # exercício 14
  man ls

