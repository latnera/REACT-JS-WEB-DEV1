//To work the export and import, we need package.json. not only that, we need also
// "type":"module" in side package.json. when importfile, we need .js with file name

import { num1, num2 } from "./export.js";
import num3dflt from "./export.js";

console.log(num1, num2, num3dflt);
