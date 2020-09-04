# source-national-park-api

Gatsby plugin sourcing data from the National Park Service API.

## Set The Config

In `gatsby-config.js`:

```js
module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-national-park-api',
            options: {
                apitKey: ''
            },
        },
    ],
}
```
