import config from './config/package.json'
import modulesList from "./modules/modules-loder";

console.log(config.appName);
new modulesList.User();
new modulesList.Product();