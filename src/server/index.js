import express from 'express';
import cors from 'cors';

import router from '@common/router/routes';
import * as constants from '@constants';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', router);

app.listen(3000, () => {
    console.log(`Server is listening on port: ${constants.PORT}`)
});
