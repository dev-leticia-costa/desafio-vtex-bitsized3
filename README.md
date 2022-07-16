# desafio-vtex-bitsized3  

## Pre rquisitos  

[VTEX IO & VTEX Toolbelt](https://cdn.allbound.com/vtex-ab/2021/11/26210724/Inicializando-VTEX-IO-VTEX-Toolbelt-101-1.pdf)


## Configuraçao de ambiente de desenvolvimento 

Baixe e instale o Git neste [link](https://git-scm.com/download/win);  
Para ajudar na instalacao dos programas vamos usar o [chocolatey](https://chocolatey.org/install);  

Execute no powershell como administrador o seguinte comando para instalar o chocolatey    

`Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))`  

Apos esse comando voce pode usar o comando *choco install* para instalar programas.  

### Node
Para facilitar o desenvolvimento, utilizaremos o NVM que instala o node na versao selecionada  


1. Instalar **[NVM](https://nodejs.org/en/download/package-manager/#nvm)**  
O windows tem uma versao de nvm  
`choco install nvm -y`
O comando a seguir serve para dizer para o terminal que um novo programa foi instalado no windows , a outra alternativca seria abrir e fechar o terminal.  

`./RefreshEnv.cmd`    

Instalar **nodejs 16**  
`nvm install 16`  
Listar a versao do node que o nvm instalou    
`nvm list`
Em seguida selecionar o nodejs instalado  
`nvm use 16.16.0`  

### YARN

2. Instalacao do [YARN](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)  

`npm install --global yarn`  

### VTEX  

3. Instalar o VTEX Toolbelt 

 `yarn global add vtex`  

