## IP Address Postgres Docker - Ubuntu
```bash
$ sudo docker ps

$ sudo docker inspect <postgress_container_id> ##Escolher o da porta 5432
```

## Postgres Service
```bash
$ sudo service postgresql stop

```

## Levantando docker e criando as migrations
```bash
$ cd /src

$ sudo docker-compose up -d

$ npm run typeorm migration:run
```

## Nest CRUD Generator
```bash
$ nest g resource <nome-do-recurso> --no-spec

```

## Criando/Executando as Migrations

# Criando(informando o caminho):

```bash
$ npm run typeorm migration:generate src/db/migrations/nome-da-migration
```

# Executando:
```bash
$ npm run typeorm migration:run