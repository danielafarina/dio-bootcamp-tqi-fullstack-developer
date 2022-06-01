Link para download do Git: https://git-scm.com/download/win

O Git Bash é um terminal extendido para otimizar o uso do Git.

# Comandos Importantes

* git init: inicializa um repositório.
* ls -a: lista as pastas ocultas (.git).
* git config --list: lista as configurações setadas.
* git config --global --unset user.name
* git config --global user.email "danielafarina@gmail.com"
* git config --global user.name danielafarina
* git clone
* git add *: adiciona todas as alterações feitas, colocando os arquivos no "backstage". Eles passam do Working Directory para o Staging Area. 
* git commit -m "texto": commit faz os arquivos que estavam no backstage entrarem em ação. Eles passam do Staging Area para o Local Repository. O commit é um snapshot do meu arquivo naquele momento. 
* git status: sempre é bom verificar o estado dos arquivos.
* git push origin main: usado para enviar os arquivos do repositório local para o remoto.
* git pull origin main: usado para puxar os arquivos do repositório remoto para o local.
* git remote -v: traz os repositórios remotos relacionados ao local em questão.