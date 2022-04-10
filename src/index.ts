import "module-alias/register";

import helmet from 'helmet';
import {StartProjectInit} from "@tsclean/core";
        
import {AppContainer} from "@/application/app";
import {PORT} from "@/application/config/environment";
    
async function init() {
    const app = await StartProjectInit.create(AppContainer)
    app.use(helmet());
    await app.listen(PORT, () => console.log('Running on port ' + PORT))
}
   
init().catch();