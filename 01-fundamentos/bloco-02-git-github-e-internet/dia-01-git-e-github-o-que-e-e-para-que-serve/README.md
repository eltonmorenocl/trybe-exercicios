### Parte 1 - Instalação e configuração

Vamos começar realizando a instalação e configuração do  **_Git_** . Siga o passo a passo para deixar o  **_Git_** pronto em seu ambiente.

#### Instalação

##### Linux

Para instalar o  **_Git_** abra o seu terminal e digite o seguinte comando:


```
sudo apt-get install git-all
```

##### macOS

Para instalar o  **_Git_** abra o seu terminal e digite o seguinte comando:


```
brew install git
```

Caso você não possua o  __brew__  instalado digite o comando abaixo no seu terminal e após a instalação execute novamente o comando acima:


```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

#### Configuração

O  **_Git_** vem com uma ferramenta chamada  __git config__ que permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o  **_Git_** aparece e opera.

##### Identidade

O primeiro passo é configurar sua identidade, seu nome e endereço de e-mail, isso é importante pois cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você criar. Para configurar isso digite o comando abaixo em seu terminal:

> É preciso que o e-mail informado seja o mesmo que você utilizará para criar a sua conta no GitHub


```
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
```

##### Editor

Um outro ponto legal de se configurar é o editor onde você poderá abrir o arquivo de configuração do  **_Git_** ,__.gitconfig__, fica fácil de você visualizar as configurações do  **_Git_** e também adicionar outras que julgue necessário. Para isso execute o comando à seguir no seu terminal:

```
git config --global core.editor "code --wait"
```

> Esse comando define o editor do  __.gitconfig__ como o __VS Code__, que é o editor que você usará ao longo curso. Caso queira abrir o arquivo de configuração no __VS Code__ basta executar em seu terminal o comando abaixo. Para isso certifique-se que você se encontra no diretório onde o arquivo __.gitconfig__ está localizado.


```
code .gitconfig
```

#### Verificando a instalação e a configuração

Agora que você já configurou tudo, vamos fazer uma validação e verificar se tudo está certinho! 😉

No terminal:

-   Digite __git --version__ para saber qual versão do git está instalada.
    -   Seu terminal deve conter algo parecido com:

```
git version 2.x.y
```

-   Digite  __git config --list__
    -   Seu terminal deve conter algo similar a isso:


```
user.email=seuemail@gmail.com
user.name=seunome
```

-   O email deve ser o mesmo que você utilizou para se registrar no GitHub

Pronto, agora que tudo está devidamente instalado e configurado, vamos ao próximo passo.


### Parte 2 - Criar conta no  **_GitHub_**

-   [Crie sua conta no  **_GitHub_** usando seu e-mail pessoal](https://github.com/join) 🐙


### Parte 3 - Adicionando uma chave SSH na sua conta do  **_GitHub_**

Neste passo, vamos aprender como adicionar uma chave SSH à sua conta do  **_GitHub_** , o que vai te permitir fazer  _pushes_ e  _pulls_ sem ter que ficar digitando usuário e senha, como já explicamos. É de extrema importância que você siga  **TODOS** os passos apresentados no artigo, apenas dessa forma você obterá o resultado esperado.

#### Gerando uma chave SSH

Abra seu terminal e digite o comando abaixo. Ele cria uma nova chave SSH, usando o seu email como rótulo.

> É preciso que o e-mail informado seja o mesmo que você utilizou para criar a sua conta no GitHub


```
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
```

Durante o processo irá aparecer escrito no terminal __Enter a file in which to save the key__, quando isso acontecer pressione __Enter__ para aceitar a localização padrão __/home/you/.ssh/id_rsa__.


```
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
```

Agora você deve digitar uma senha segura.


```
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

#### Adicionando sua chave SSH ao ssh-agent

Primeiro você deve iniciar o __ssh-agent__ em background:

```
eval "$(ssh-agent -s)"
```

Agora você deve adicionar sua chave privada SSH ao __ssh-agent__. Para isso execute o comando abaixo no terminal:


```
ssh-add ~/.ssh/id_rsa
```

#### Adicionando a chave SSH na sua conta do GitHub

Antes de tudo você deve copiar a sua chave SSH. Para isso, você vai aprender um comando bem útil, mas que nem sempre vem instalado nativamente no Linux: o __xclip__.

Para entender como funciona o __xclip__, temos que nos perguntar uma coisa: como se copia um texto ou uma parte dele quando estamos trabalhando com um ambiente de terminal? Provavelmente a primeira coisa que se passou pela sua cabeça foi abrir o arquivo em um editor de texto, selecionar aquilo que você deseja copiar, fechar o editor de texto e depois colar em outro lugar.

Não há nada de errado com essa lógica: ela funciona, mas convenhamos que dá pra ser um pouquinho mais eficiente, né? Aí entra o tal do __xclip__. Usando esse comando podemos fazer uma ponte diretamente entre os comandos que serão utilizados no terminal e a área de transferência do Linux, ou seja, dá pra copiar a saída de um comando de forma direta pelo terminal!

Vamos ver como funciona? Execute a sequência de comandos abaixo:


```
# Como o xclip não vem instalado por padrão na maioria das distribuições,
# precisaremos instalá-lo usando o comando a seguir:
sudo apt-get install xclip

# Agora utilize o comando abaixo para copiar o conteúdo da sua chave id_rsa.pub
# Para garantir que o conteúdo foi copiado dê Ctrl + V em um editor de texto
xclip -sel clip < ~/.ssh/id_rsa.pub
```

Caso o __xclip__ não funcione, execute o comando abaixo e copie manualmente a saída do terminal.


```
cat ~/.ssh/id_rsa.pub
```

Entre no seu  **_GitHub_** e siga os passos abaixo:

-   No canto superior direito do  **_GitHub_** , clique na sua foto de perfil e clique em  **Settings** ;
    
-   Na barra lateral esquerda, clique em  **SSH and GPG keys** ;
    
-   Clique em  **New SSH key** ou  **Add SSH key** ;
    
-   No campo  __Título__, adicione um descrição para a nova chave;
    
-   Cole sua chave dentro do campo __Key__;
    
-   Clique em  **Add SSH key** ;
    
-   Caso seja solicitado, confirme sua senha do Github.
    

Se tiver problemas ao seguir o tutorial acima, consulte a  [documentação oficial do  **_GitHub_**](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) .


### Parte 4 - O seu repositório no  **_GitHub_**

Pronto! Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o  **_GitHub_** , é hora de colocar a casa em ordem!

Antes de começar, siga as instruções da página sobre  [Portfólio de Exercícios](https://app.betrybe.com/course/real-life-engineer/exercise-portfolio/) para criar a estrutura de diretórios que usará ao longo de todo o curso para guardar seus exercícios.

Durante seu curso na  _Trybe_ , seus projetos serão entregues através de __pushes__ nos repositórios do  **_GitHub_** . Para podermos simular um exercício feito, você criará um arquivo __.txt__ com um nome de sua escolha (Exemplo:__trybe-skills.txt__) e utilizará o conteúdo abaixo.

```txt
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```

No final, ao executar o comando __ls -l__ na pasta de arquivos deste dia, você deverá receber um retorno parecido com:


```
ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
```

Agora vamos transformar essa pasta em um repositório  **_Git_** :

-   Retorne para a raiz da pasta de exercícios;
    
-   Inicialize o repositório com  __git init__  ;
    
-   Crie um arquivo de __README__ utilizando o comando __touch README.md__;
    
-   Crie um __commit__ inicial utilizando:
    


```
git add .
git commit -m "Initial commit"
```

-   Vá até o seu  _GitHub_ e  [crie um repositório público](https://help.github.com/en/github/getting-started-with-github/create-a-repo) , onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
    
    -   Dê ao repositório um nome descritivo, como por exemplo __trybe-exercicios__;
    -   ⚠️ Lembre-se de  **não** inicializar o repositório com um arquivo __README.md__, pois você já criou um nos passos anteriores! 😉
-   Clique no botão  **SSH** e então copie a  _URL_ do repositório;
    
    -   Execute o comando para adicionar a  _URL_ ao repositório local __git remote add origin "URL_DO_REPOSITÓRIO"__ ;
-   Verifique se tudo está certo com sua  _URL_ remota utilizando o comando __git remote -v__. Seu terminal deve conter algo similar a isso:
    
```
origin  git@github.com:john-snow/know-nothing.git (fetch)
origin  git@github.com:john-snow/know-nothing.git (push)
```

-   Em que  __john-snow__  corresponde ao seu username e  __know-nothing__ ao nome que você deu ao seu repositório;
    
-   Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro __commit__ para o  **_GitHub_** ! 🤩
    
-   Execute o comando __git push origin master__ no terminal;
    
-   Vá até o seu GitHub e verifique as novas alterações.
    

Agora que tal adicionar uma descrição do que é seu repositório no __README.md__? 💪🏼.

-   O __README.md__ que você recriou é referente ao repositório __trybe-exercicios__, tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;
    
-   Uma outra coisa interessante a se fazer é adicionar um __README.md__ dentro do  **diretório de exercícios do dia** para colocar a descrição dos exercícios que você desenvolveu;
    
-   Lembre-se de fazer um  _commit_ quando terminar de alterar os arquivos;
    
-   Depois do  _commit_ , faça sempre um  _push_ ;
    
-   Confira as alterações no  **GitHub** .
    

