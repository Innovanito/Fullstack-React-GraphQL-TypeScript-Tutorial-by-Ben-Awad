"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        dbName: 'lireddit',
        type: 'postgresql',
        debug: true
    });
};
main();
//# sourceMappingURL=index.js.map