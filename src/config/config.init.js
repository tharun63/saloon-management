const SpringCloudConfig = require('spring-cloud-config');


const configOptions = {
    configPath:  __dirname + '/config_files',
    activeProfiles: [process.env.activeProfile || 'default'],
    level: 'debug'
};
let myConfig;

SpringCloudConfig.load(configOptions).then(theConfig => {
    myConfig = theConfig;
    // now run your application with the loaded config props.
    // do this by saving the returned config object somewhere,
    // or by using the SpringCloudConfig.instance() helper.
});
