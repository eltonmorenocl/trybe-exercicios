

### Parte I - Criação de arquivos e diretórios

**Dica** : Para criação de arquivos vazios você pode utilizar o comando  `touch nome-do-arquivo.extensao`  .

1.  Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado  __unix_tests__  e navegue até ele.
    - `mkdir unix_tests`
    - `cd unix_tests`
    
2.  Crie um arquivo de texto com o nome ____trybe.txt____.
    - `touch trybe.txt`
    
3.  Crie uma cópia do arquivo  __trybe.txt__  com nome  __trybe_backup.txt__ .
    - `cp trybe.txt trybe_backup.txt`
    
4.  Renomeie o arquivo __trybe.txt__.
    - `mv trybe.txt outro_nome.txt`
    
5.  Dentro de  __unix_tests__  , crie um novo diretório chamado __backup__.
    - `mkdir backup`

6.  Mova o arquivo  __trybe_backup.txt__  para o diretório  __backup__.
    - `mv trybe_backup.txt backup`

7.  Dentro de  __unix_tests__  , crie um novo diretório chamado  __backup2__.
    - `mkdir backup2`
    
8.  Mova o arquivo  __trybe_backup.txt__  da pasta  __backup__  para a pasta __backup2__.
    - `mv backup/trybe_backup.txt backup2`

9.  Apague a pasta  __backup__.
    - `rmdir backup`

10.  Renomeie a pasta  __backup2__  para  __backup__  .
     - `mv backup2 backup`

11.  Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
     - `pwd`
     - `ls -l .`

12.  Apague o diretório  __backup__.
    - `rm -rd backup`

13.  Limpe o terminal.
    - `clear` 

**Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado  `skills.txt`  :**
		Internet
		Unix
		Bash
		HTML
		CSS
		JavaScript
		React
		SQL

14.  Mostre na tela as 5 primeiras skills do arquivo __skills.txt__.
    - `head -n 5 skills.txt`
    
15.  Mostre na tela as 4 últimas skills do arquivo __skills.txt__.
    - `tail -n 4 skills.txt`
    
16.  Apague todos os arquivos que terminem em __.txt__.
    - `rm *.txt`

### Parte II - Manipulação & Busca

1.  Na pasta  __unix_tests__  , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando  [curl:](https://linux.die.net/man/1/curl)

    - `curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"`

2.  Mostre todo o conteúdo do arquivo  __countries.txt__  na tela.
    - `cat countries.txt`
    
3.  Mostre o conteúdo de  __countries.txt__  , página por página, até encontrar a  __Zambia__.
    - `less countries.txt`
    
4.  Mostre novamente o conteúdo de  __countries.txt__  página por página, mas agora utilize um comando para buscar por __Zambia__.
    - `less countries.txt`
    - `/Zambia`
    
5.  Busque por  __Brazil__  no  __countries.txt__.
    - `grep Brazil countries.txt`
    
6.  Busque novamente por __brazil__  , mas agora utilizando o  _lower case_ .
    - `grep -i brazil countries.txt`

    **Para os próximos exercícios, crie um novo arquivo chamado  `phrases.txt`  e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.**
    
7.  Busque pelas frases que não contenham a palavra  __fox__.
    - `grep -v fox phrases.txt`
    
8.  Conte o número de palavras do arquivo __phrases.txt__.
    - `wc -w phrases.txt`

9.  Conte o número de linhas do arquivo __phrases.txt__.
    - `wc -l phrases.txt`
    
10.  Crie os arquivos __empty.tbt__  e __empty.pdf__.
    - `touch empty.tbt`
    - `touch empty.pdf`
    
11.  Liste todos os arquivos do diretório  __unix_tests__.
    - `ls -l`

12.  Liste todos os arquivos que terminem com __txt__.
    - `ls -l *txt`

13.  Liste todos os arquivos que terminem com __tbt__ ou __txt__.
    - `ls -l *t?t`

14.  Acesse o manual do comando  __ls__.
    - `man ls`


