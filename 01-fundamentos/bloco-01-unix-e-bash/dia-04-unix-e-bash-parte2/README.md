
### Parte I - Comandos de Input e Output

1.  Navegue até a pasta __unix_tests__;
    - `cd ~/unix_test`

2.  Crie um arquivo texto pelo terminal com o nome  __skills2.txt__  e adicione os valores  __Internet__  ,  __Unix__  e  __Bash__  , um em cada linha.
    - `touch skills2.txt`
    - `echo "Internet" >> skills2.txt`
    - `echo "Unix" >> skills2.txt`
    - `echo "Bash" >> skills2.txt`

3.  Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
    - `echo "HTML" >> skills2.txt`
    - `echo "CSS" >> skills2.txt`
    - `echo "JavaScript" >> skills2.txt`
    - `echo "React" >> skills2.txt`
    - `echo "SQL" >> skills2.txt`
    - `sort < skills2.txt`
    
4.  Conte quantas linhas tem o arquivo  __skills2.txt__  .
    - `cat skills2.txt | wc -l`
    
5.  Crie um arquivo chamado __top_skills.txt__  usando o __skills2.txt__, contendo as 3 primeiras skills em ordem alfabética.
    - `sort < skills2.txt | head -n 3 > top_skills.txt`
    
6.  Crie um novo arquivo chamado __phrases2.txt__ pelo terminal e adicione algumas frases de sua escolha.
    - `touch phrases2.txt`
    - `echo "Olá mundo, bem vindo a trybe" > phrases2.txt`
    
7.  Conte o número de linhas que contêm as letras __br__.
    - `grep br phrases2.txt | wc -l`
    
8.  Conte o número de linhas que  **não** contêm as letras __br__.
    - `grep -v br phrases2.txt | wc -l`
    
9.  Adicione dois nomes de países ao final do arquivo __phrases2.txt__.
    - `echo "Brasil" >> phrases2.txt`
    - `echo "China" >> phrases2.txt`
    
10.  Crie um novo arquivo chamado  __bunch_of_things.txt__ com os conteúdos dos arquivos __phrases2.txt__ e __countries.txt__
    - `cp countries.txt bunch_of_things.txt`
    - `cat phrases2.txt >> bunch_of_things.txt`
    
11.  Ordene o arquivo __bunch_of_things.txt__.
    - `sort bunch_of_things.txt -o bunch_of_things.txt`


### Parte II - Permissões

1.  Navegue até a pasta __unix_tests__;
    - `cd ~/unix_test`
    
2.  Rode o comando  [ls](https://linux.die.net/man/1/ls) __-l__  e veja quais as permissões dos arquivos;
    - `ls -ls`

3.  Mude a permissão do arquivo  __bunch_of_things.txt__ para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando  __ls -l__;
    - `chmod a+rw bunch_of_things.txt`

    > Resultado esperado: __-rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt__
    
4.  Tire a permissão de escrita do arquivo __bunch_of_things.txt__ para todos os usuários, verifique se está correto com o comando __ls -l__;
    - `chmod a-w bunch_of_things.txt`

    > Resultado esperado: __-r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt__
    
5.  Volte à permissão do arquivo  __bunch_of_things.txt__ para a listada inicialmente utilizando o comando __chmod 644 bunch_of_things.txt__.
    - `chmod 644 bunch_of_things.txt`

    > Resultado esperado: __-rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt__
    
   

### Parte III - Processos & Jobs

1.  Liste todos os processos;
    - `ps`
    
2.  Agora use o comando  [sleep](https://linux.die.net/man/3/sleep) __30__  [&](https://linuxhandbook.com/run-process-background/) ;
    - `sleep 30 &`

3.  Use a listagem de processos para encontrar o PID do processo que está executando o comando  __sleep 30__  e termine a sua execução  (mate o processo) ;
    - `ps | grep sleep`
    - `kill PID` 
    
4.  Execute novamente o comando  __sleep 30__, mas agora sem o __&__ . Depois, faça com que ele continue executando em background;
    - `sleep 30`
    - `ctrl+z`
    - `bg`
    
5.  Crie um processo em background que rode o comando __sleep__ por 300 segundos.
    - `sleep 300 &`
    
6.  Crie mais dois processos que rodem o comando __sleep__ por 200 e 100 segundos, respectivamente.
    - `sleep 200`
    - `ctrl+z`
    - `sleep 100`
    - `ctrl+z`
    
    > Você deve criá-los em  _foreground_ (sem usar o  __&__) e suspendê-los (apertando __ctrl+z__) após cada um começar a executar.
    
7.  Verifique que apenas o processo __sleep 300__ está em execução com o comando __jobs__. Suspenda a execução desse processo.
    - `jobs`
    - `fg %1`
    - `ctrl+z`
    
    > Você vai precisar trazer o processo para  _foreground_ ( __fg__) e suspendê-lo (__ctrl+z__), ou enviar um sinal.
    
8.  Retome a execução do processo __sleep 100__ em background com o comando __bg__.
    - `bg %3` 
    
9.  Termine a execução de todos os processos __sleep__ (mate os processos).
    - `ps | grep sleep`
    - `kill PID`


