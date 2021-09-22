- criar imagem 

    1. criar um Dockerfile, ele deve conter:
        - FROM [nome da imagem];
        - WORKDIR [caminho];
        - COPY [nome do arquivo ou pasta] [caminho onde vai ser "colado" aquilo que foi copiado] (OBS: deste lado '.' fará referência ao caminho criado no WORKDIR);
        - RUN [comando] (utilizado para rodar comandos);
        - CMD [comando] (OBS: geralmente formatado assim: ["",""] );
        - EXPOSE [porta] (utilizado para setar a porta, ex: 3000);
    
    2. build da imagem com `docker build .` ou
    `docker build -t [nome da imagem] .` para criar uma imagem com nome personalizado.

    <br>
- listar imagens

    -- `docker image ls`

    <br>
- remover imagem
    
    (OBS: importante listar antes as imagens para ter acesso ao IMAGE ID e o NOME);

    - remover imagem por id
        - `docker rmi [id]`
    
    - remover imagem por nome 
        - `docker rmi [nome]`

    <br>
- criar um container

    -- `docker run [imagem]`
    
    - container com nome (--name)
        - `docker run --name [nome do container] [imagem]`

    - container detached (-d)
        - `docker run -d [imagem]`

    - container com porta (-p)
        - `docker run -p [porta:porta] [imagem]`
    
    - container com terminal interativo (-it)

        - `docker run -it [imagem]`
    
    <br>
- listar containers

    - ativos
        - `docker ps`

    - todos (-a) 
        - `docker ps -a`
    
    <br>
- iniciar container

    -- `docker start [nome do container ou ID]`
    
    <br>
- parar container
    
    -- `docker stop [nome do container ou ID]`

    <br>
- remover container
 
    (OBS: importante listar antes os containers para ter acesso ao CONTAINER ID e o NOME);

    -- `docker rm [nome do container ou ID]` 
