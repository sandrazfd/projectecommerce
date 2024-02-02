# Projectecommerce

Esta aplicação é um e-commerce que esta sendo desenvolvido com a finalidade de aprendizado na Mentoria Angular Pro 2.0 🚀

## 🛠️Tecnologias e Versões utilizadas

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

Este workspace foi gerado [Nx, a Smart, fast and extensible build system.](https://nx.dev)

- NX - 17.2.8
- Angular - 17.0.0
- Node - 20.10.0
- Angular Material

## Clonar o projeto

```
git clone https://github.com/sandrazfd/projectecommerce.git
cd projectecommerce
npm install
```

## 🚀 Iniciar o projeto localmente

```
npm start
```

OU

```
npx nx serve
```

O projeto será servido por padrão em http://localhost:4200/

## 👩‍💻 Executar tarefas independentes

```
npx nx <NOME_DA_TAREFA> <NOME_DO_MODULO>
```

Exemplos:

```
npx nx test projectecommerce
npx nx lint modules-layout
```

## 📈 Visualizar Dependency Graph

```
npx nx graph
```

## ⚠️Executar tarefas somente do que foi afetado

```
npx nx affected:<NOME_DA_TAREFA>
```

Exemplos:

```
npx nx affected:test
npx nx affected:graph
```
