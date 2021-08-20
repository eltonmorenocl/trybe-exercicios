## Agora a prática
  
⚠️ Para fazer os exercícios a seguir, você deve utilizar o projeto com o texto no arquivo .txt , localizado dentro do diretório do dia anterior, crie uma cópia para usar no dia de hoje.


Dessa vez, cada um deve fazer os exercícios em seu computador, ok? Vamos lá! 😋

1. Navegue até a raiz do projeto com o arquivo .txt;

2. Verifique se não existe nada sem "commitar" utilizando __git status__:
 
	 - Caso exista algo, verifique se é necessário e faça o __commit__, ou remova-o.

3. Crie uma nova __branch__ com o nome __trybe-skills-changes__ e faça checkout nela;

4. No arquivo __.txt__, ao final da lista de habilidades , adicione mais duas habilidades que serão desenvolvidas na Trybe:

 Exemplo:

``O que eu vou aprender na Trybe:``

	``- Unix``
	``- Bash``
	``- Git``
	``- HTML``
	``- CSS``

-   Faça um  __git add nome-do-arquivo.extensao__;
-  Você pode adicionar todos os arquivos que você modificou usando __git add .__, mas evite isso em commits com muitos arquivos para não adicionar nenhuma alteração por engano;
-  Agora um __git commit -m "Mensagem que você gostaria"__;
    
-   Uma boa prática é sempre resumir o que o seu commit está alterando, por exemplo,__git commit -m "Adiciona nova skill"__;
    
-   Evite juntar muitas modificações em um único commit. Assim, caso haja algum erro no código, ficará mais fácil visualizar em qual alteração ele surgiu;
    
-   E por último um __git push -u origin trybe-skills-changes__;

5.  Abra um  _Pull Request_ com uma descrição detalhada:

	-   Dê contexto para o que você está fazendo, passe links ou cite especificações que forem relevantes. Ex:  _"Trabalho feito para a semana 1 do curso de    Software       Developer da Trybe. Aqui, o desafio foi... E para resolver o problema fizemos... E o resultado foi..."_ ;

	-   O merge deve ser feito apenas quando chegar no exercício 10.

6. Retorne para a branch principal,__master__, com o comando: __git checkout master__;
    
7.  Verifique que você está na branch __master__, com o comando: __git branch__(esta branch deve estar com o formato original, sem as habilidades recém adicionadas);
    
8.  Crie uma nova __branch__  __trybe-skills-updates__ a partir da  __master__  e faça checkout nela;
    
9. No mesmo arquivo __.txt__  que você modificou no  _passo 4_ , também ao final da sua lista de habilidades, adicione mais um aprendizado que você terá nos próximos blocos:
	-   Atenção! Aqui o arquivo não terá as alterações feitas anteriormente na outra branch 😉;
    
	-   Faça um  __git add nome-do-arquivo.extensao__;
    
	-   Agora um  __git commit -m "Mensagem que você gostaria"__;
    
	-   e por último um  __git push -u origin trybe-skills-updates__;
    
	-   Após o primeiro  _"push"_ da sua branch, você pode usar apenas o comando __git push__;
    
	-   Abra um  _Pull Request_ com uma descrição amigável:

    -   O merge deve ser feito apenas quando chegar no exercício 10;

10.  Agora, faça o  __merge__  das  _branches_ __trybe-skills-changes__ e  __trybe-skills-updates__ na  __branch__ __master__  , através do  _Pull Request_ :

-   Primeiro, vá até a página do primeiro  _Pull Request_ (branch __trybe-skills-changes__) e faça o  _merge_ clicando no botão verde  **"Merge pull request"** ;
    
-   Agora, vá até página do outro  _Pull Request_ (branch __trybe-skills-updates__) e tente fazer o  _merge_ clicando no mesmo botão. Reparou que ele está bloqueado? Isso acontece porque esse  _Pull Request_ está tentando alterar a mesma linha de código com um conteúdo diferente, e o  **_Git_** não consegue determinar sozinho qual das duas linhas é a correta;
    
-   Você terá que resolver esse  **conflito** antes de  _"mergear"_ o  _Pull Request_ . Clique no botão  **"Resolve conflicts"** , escolha uma das duas versões do texto  _(lembre-se de apagar as linhas com  `<<<<<<<`  e  `>>>>>>>`  , elas são criadas apenas para dar uma identificação mais visual ao problema)_ . Depois clique em  **"Mark as resolved"** e, em seguida, em  **"Commit merge"** ;
    
-   Agora você deve conseguir  _"mergear"_ seu  _Pull Request_ normalmente. 😎

### Recapitulando

Agora você já pode esquecer que um dia versionou os arquivos adicionando o nome da versão no final! 😉

 - O Git é um sistema de versionamento distribuído (DVCS);

 - A maior vantagem do Git é que ele é distribuído, ou seja, o repositório fica na sua máquina e você não precisa se preocupar em fazer "lock" de arquivos assim como  em   outros VCS's ;

 - Vimos que a instalação do Git e sua configuração são simples. Basta baixar o instalador e configurá-lo usando o comando git config ;

 - Para iniciar um repositório local, vimos que você tem duas opções:
    - __git init__ (para criar um novo repositório Git ) ;
    - __git clone__ (para copiar um repositório Git existente para sua máquina e, assim, poder criar branches e Pull Requests) .

 - O GitHub é uma plataforma de hospedagem de código-fonte com controle de versão usando o Git;

 - Vimos também que, para subir seu código para o GitHub , basta você verificar qual das opções abaixo deseja:
      1. Criar um repositório do zero localmente, na sua máquina, onde utilizará o comando __git init__ ;
      2. Trabalhar num repositório já existente, onde utilizará o comando __git clone__ ;

Esses dois comandos são excludentes , ou seja, você usa um, ou usa o outro, nunca os dois ao mesmo tempo. Após isso, siga um dos dois fluxos abaixo

 - __Fluxo 1__ - Após __git init__ :
    1 - Criar seu primeiro __commit__ ;
    2 - Criar o repositório remoto na sua conta do GitHub ;
    3 - Adicionar a URL do repositório remoto;
    4 - Executar o famoso __push__.

 - __Fluxo 2__ - Após __git clone__ :
    1 - Criar sua branch dentro do repositório clonado;
    2 - Fazer checkout na sua branch;
    3 - Criar seu primeiro __commit__ ;
    4 - Executar o famoso __push__ .

