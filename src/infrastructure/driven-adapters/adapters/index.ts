import 'module-alias/register'

import helmet from 'helmet';
import { connect } from 'mongoose';
import { AppContainer } from "@/application/app";
import {MONGODB_URI, PORT} from "@/application/config/environment";
import { StartProjectInit } from '@tsclean/core';

async function run(): Promise<void> {
  await connect(MONGODB_URI);
  console.log('MongoDB connected')
  const app = await StartProjectInit.create(AppContainer);
   app.use(helmet());
   await app.listen(PORT, () => console.log('Running on port: ' + PORT))
}

run();