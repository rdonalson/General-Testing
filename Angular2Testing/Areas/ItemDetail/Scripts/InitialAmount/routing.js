"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
// Declarations
var Index_component_1 = require("./Index/Index.component");
var Create_component_1 = require("./Create/Create.component");
var Edit_component_1 = require("./Edit/Edit.component");
// Route Configuration
exports.routes = [
    { path: "", component: Index_component_1.InitialAmountComponent },
    { path: "Create", component: Create_component_1.InitialAmountCreateComponent },
    { path: "Edit/:id", component: Edit_component_1.InitialAmountEditComponent }
];
// Export
exports.defaultRouting = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=routing.js.map