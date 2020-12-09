"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('@babel/register')({ extensions: ['.js', '.ts'] });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const port = process.env.SERVER_PORT || 4000;
const app = express_1.default();
app.use(body_parser_1.json({ limit: '50mb' }));
app.use(body_parser_1.urlencoded({ limit: '50mb', extended: true }));
// To enable CORS => (Cross Origin Resource Sharing)
app.use(cors_1.default());
// Starting points for the routes
app.use('/api/', index_1.default);
app.listen(port, () => {
    console.info(`Server started on port ${port}`);
});
//# sourceMappingURL=main.js.map