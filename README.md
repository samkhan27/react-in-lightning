# react-in-lightning
An example of React + Redux application contained in a lightning component

This repo can be used to bundle a react app which can then be uploaded as a static resource in Salesforce and contained in a lightning component. It is an alternative to the [Lightnig Container Component](https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/container_overview.htm) (LCC) through which Salesforce provides a similar functianlity, but hosts the third-party app in an iframe. By using the approach suggested by this repo instead of LCC, your app will not be subject to the limitations and performance bottlenecks that would result from hosting it in an iframe.

The Lightning component and apex classes that go hand in hand with this repo can be found [here](https://github.com/samkhan27/lightning-container-with-data-service). They provide a data service to the react app that can be used to access records and metadata in your salesforce org. The service has been decoupled from the react app so that it can be hosted outside the lightnig platform, say in heroku, with minimal changes in code by substituting the data service coming in from lightning with another service that uses Salesforce' REST api, for instance [JSforce](https://jsforce.github.io/). 

## Install
`yarn install`

To test setup run:
* `yarn build`
* `yarn start` and open features/search.html (uses a development build so you can use redux devtools)
* `yarn start-prod` and open features/search.html (starts a production build of webpack so doesn't include redux devtools)


## To Use With Salesforce DX
1. Create a `react` folder inside of your DX project and clone this repository into it
2. Create the lightning components and apex classes from [here](https://github.com/samkhan27/lightning-container-with-data-service) in your DX project.
3. run the install scripts and check the setup tests all pass
4. Create a new static resource, e.g. called 'react'
5. Uncomment the production build part of webpack (bottom of webpack.config.js), and complete the path to your static resource
6. Push your code to your scratch org.

For each feature, create a new file in app/entryPoints. Files ending in .prod.js or .dev.js will be ignored to make local development easier.


