## Awesome Project Build with Clean Architecture

Steps to run this project:

1. Run `npm watch` command

## General Commands

```
npm i -g @tsclean/scaffold
scaffold create:project --name=app
scaffold create:entity --name=person
scaffold create:interface --name=add-person --path=models
scaffold create:service --name=add-person
scaffold create:adapter-orm --name=person --orm=mongoose
scaffold create:controller --name=add-person
```
