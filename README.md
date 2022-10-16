# Tour of Heroes

![profile_pic](https://user-images.githubusercontent.com/40045069/195953645-db10c0ee-2eb2-43d9-b0ae-e861d2ef16a8.png)

This is the Google's Angular tutorial. The repository follow the implementations on the tutorial documentation. There is one branch on this repo to each chapter
of the tutorial, if you want to see the differences and something specific.

## Dependencies

If you want to do the tutorial following this repo, you are only going to need these softwares installed on your machine:

* [Node 16+](https://nodejs.org/en/)
* [Angular CLI 13.2.6](https://www.npmjs.com/package/@angular/cli)
* [Json server](https://www.npmjs.com/package/json-server)

Or if you don't want to install all this stuff, you can run this by Docker.
You only need to have Docker installed on your machine.
And run the command:

```bash
docker-compose up -d
```

## Overview

The final application looks something like this:

![overview](https://user-images.githubusercontent.com/40045069/196006714-cb2d69bc-6e2a-41e8-b343-36d484404340.png)

## Chapters

* [Chapter 0 - Create a project](https://angular.io/tutorial/toh-pt0)
* [Chapter 1 - The hero editor](https://angular.io/tutorial/toh-pt1)
* [Chapter 2 - Display a selection list](https://angular.io/tutorial/toh-pt2)
* [Chapter 3 - Create a feature component](https://angular.io/tutorial/toh-pt3)
* [Chapter 4 - Add services](https://angular.io/tutorial/toh-pt4)
* [Chapter 5 - Add navigation with routing](https://angular.io/tutorial/toh-pt5)
* [Chapter 6 - Get data from a server](https://angular.io/tutorial/toh-pt6)

>Note: On the chapter 6, the tutoril uses the ```angular-in-memory-web-api``` package,
>but, this package is deprecated, not maintained anymore, only compatible till Angular 10. So in
>this project we used another solution, ```json-server```, that is a good and efficient solution.
