# Taarifa
## Ang-News

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Installation

On cloning and installing dependencies:

```
git clone https://github.com/Eva-Wamuyu/Ang-News.git
yarn install
```

Create an environment folder in the path /src/environments/environment.ts.

Add your Environment variables
#### Environment Variables
API,
url,
production

```
export const environment = {
    API: "", [API TOKEN From GNEWS]
    url:"https://gnews.io/api/v4/top-headlines?token=", [G NEWS URL]
    production:  [false,true]
}
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Cypress for end-to-end tests.

create cypress.env.json file

Add the following
``` bash
{
  "API": YOUR G_NEWS API_KEY,
  "url": "https://gnews.io/api/v4/top-headlines?token=",
  "API2": "e2e3695c96bfc687eff704100b6a7"
}

```
Run `ng e2e` to execute e2e tests via cypress.
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

