const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 'lz4gmskb',
    dataset: 'production',
    apiVersion: '2021-06-07',
    useCdn: true

})

