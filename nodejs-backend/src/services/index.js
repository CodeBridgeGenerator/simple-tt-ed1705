const companies = require('./companies/companies.service.js');
const branches = require('./branches/branches.service.js');
const departments = require('./departments/departments.service.js');
const sections = require('./sections/sections.service.js');
const roles = require('./roles/roles.service.js');
const positions = require('./positions/positions.service.js');
const templates = require('./templates/templates.service.js');
const mails = require('./mails/mails.service.js');
const tests = require('./tests/tests.service.js');
const userAddresses = require('./userAddresses/userAddresses.service.js');
const companyAddresses = require('./companyAddresses/companyAddresses.service.js');
const companyPhones = require('./companyPhones/companyPhones.service.js');
const users = require("./users/users.service.js");
const userPhones = require('./userPhones/userPhones.service.js');
const userInvites = require('./userInvites/userInvites.service.js');
const staffinfo = require("./staffinfo/staffinfo.service.js");
const profiles = require('./profiles/profiles.service.js');
// 280624
const permissionServices = require('./permissionServices/permissionServices.service.js');
const permissionFields = require('./permissionFields/permissionFields.service.js');
const dynaLoader = require('./dynaLoader/dynaLoader.service.js');
const dynaFields = require('./dynaFields/dynaFields.service.js');
const jobQueues = require('./jobQues/jobQues.service.js');
const mailQues = require('./mailQues/mailQues.service.js');
const employees = require('./employees/employees.service.js');
const jobQues = require('./jobQues/jobQues.service.js');
const superior = require('./superior/superior.service.js');
const prompts = require("./prompts/prompts.service.js");
const config = require("./config/config.service.js");
const chatai = require("./chatai/chatai.service.js");
// manage change

const test = require("./test/test.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
    app.configure(companies);
    app.configure(branches);
    app.configure(departments);
    app.configure(sections);
    app.configure(roles);
    app.configure(positions);
    app.configure(profiles);
    app.configure(templates);
    app.configure(mails);
    app.configure(tests);
    app.configure(permissionServices);
    app.configure(permissionFields);
    app.configure(userAddresses);
    app.configure(companyAddresses);
    app.configure(companyPhones);
    app.configure(userPhones);
    app.configure(userInvites);
    app.configure(staffinfo);
    app.configure(dynaLoader);
    app.configure(dynaFields);
    app.configure(jobQueues);
    app.configure(mailQues);
    app.configure(employees);
    app.configure(jobQues);
    app.configure(jobQues);
    app.configure(superior);
    // gen ai
    app.configure(prompts);
    app.configure(config);
    app.configure(chatai);
    // my services


  app.configure(test);
    // ~cb-add-configure-service-name~
};
