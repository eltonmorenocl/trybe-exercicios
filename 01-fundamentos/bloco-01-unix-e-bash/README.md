# DIA 1

Apresentação ao Unix & Shell, aprendemos a usar comandos dentro do Terminal (Bash no meu caso).

Os requisitos do execrcício são:


### Parte I - Criação de arquivos e diretórios
_
**Dica** : Para criação de arquivos vazios você pode utilizar o comando  `touch nome-do-arquivo.extensao`  .

1.  Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado  `unix_tests`  e navegue até ele.
    - ___`mkdir unix_tests`___
    - ___`cd unix_tests`___
    
2.  Crie um arquivo de texto com o nome  `trybe.txt` .
    - ___`touch trybe.txt`___
    
3.  Crie uma cópia do arquivo  `trybe.txt`  com nome  `trybe_backup.txt` .
    - ___`cp trybe.txt trybe_backup.txt`___
    
4.  Renomeie o arquivo  `trybe.txt`.
    - ___`mv trybe.txt outro_nome.txt`___
    
5.  Dentro de  `unix_tests`  , crie um novo diretório chamado  `backup`  .
    - ___`mkdir backup`___

6.  Mova o arquivo  `trybe_backup.txt`  para o diretório  `backup`  .
    - ___`mv trybe_backup.txt backup`___

7.  Dentro de  `unix_tests`  , crie um novo diretório chamado  `backup2`.
    - ___`mkdir backup2`___
    
8.  Mova o arquivo  `trybe_backup.txt`  da pasta  `backup`  para a pasta  `backup2`  .
    - ___`mv backup/trybe_backup.txt backup2`___

9.  Apague a pasta  `backup`.
    - ___`rmdir backup`___

10.  Renomeie a pasta  `backup2`  para  `backup`  .
     - ___`mv backup2 backup`___

11.  Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
     - ___`pwd`___
     - ___`ls -l .`___

12.  Apague o diretório  `backup`  .
    - ___`rm -rd backup`___

13.  Limpe o terminal.
    - ___`clear`___

**Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado  `skills.txt`  :**
		Internet
		Unix
		Bash
		HTML
		CSS
		JavaScript
		React
		SQL

14.  Mostre na tela as 5 primeiras skills do arquivo  `skills.txt`.
    - ___`head -n 5 skills.txt`___
    
15.  Mostre na tela as 4 últimas skills do arquivo  `skills.txt`.
    - ___`tail -n 4 skills.txt`___
    
16.  Apague todos os arquivos que terminem em  `.txt`.
    - ___`rm *.txt`___

### Parte II - Manipulação & Busca

1.  Na pasta  `unix_tests`  , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando  [curl:](https://linux.die.net/man/1/curl)

    - ___``curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"`___

2.  Mostre todo o conteúdo do arquivo  `countries.txt`  na tela.
    - ___`cat countries.txt`___
    
3.  Mostre o conteúdo de  `countries.txt`  , página por página, até encontrar a  `Zambia`.
    - ___`less countries.txt`___
    
4.  Mostre novamente o conteúdo de  `countries.txt`  página por página, mas agora utilize um comando para buscar por  `Zambia`.
    - ___`less countries.txt`___
    - ___`/Zambia`___
    
5.  Busque por  `Brazil`  no  `countries.txt`.
    - ___`grep Brazil countries.txt`___
    
6.  Busque novamente por  `brazil`  , mas agora utilizando o  _lower case_ .
    - ___`grep -i brazil countries.txt`___

    **Para os próximos exercícios, crie um novo arquivo chamado  `phrases.txt`  e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.**
    
7.  Busque pelas frases que não contenham a palavra  `fox`.
    - ___`grep -v fox phrases.txt`___
    
8.  Conte o número de palavras do arquivo  `phrases.txt`.
    - ___`wc -w phrases.txt`___

9.  Conte o número de linhas do arquivo  `phrases.txt`.
    - ___`wc -l phrases.txt`___
    
10.  Crie os arquivos  `empty.tbt`  e  `empty.pdf`.
    - ___`touch empty.tbt`___
    - ___`touch empty.pdf`___
    
11.  Liste todos os arquivos do diretório  `unix_tests`  .
    - ___`ls -l`___

12.  Liste todos os arquivos que terminem com  `txt`  .
    - ___`ls -l *txt`___

13.  Liste todos os arquivos que terminem com  `tbt`  ou  `txt`  .
    - ___`ls -l *t?t`___

14.  Acesse o manual do comando  `ls`  .
    - ___`man ls`___

----------
