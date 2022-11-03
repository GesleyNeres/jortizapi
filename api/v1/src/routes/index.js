const authRoutes = require('./auth/authRouter.js')
const clientRoutes = require('./public/clientRouter')
const serviceRoutes = require('./public/serviceRouter')
const employeeRoutes = require('./public/employeeRouter')
const payslipRoutes = require('./public/payslipRouter')
const authPayslipRoutes = require('./auth/payslipRouter')
const authEmployeeRoutes = require('./auth/employeeRouter')
const authClientRoutes = require('./auth/clientRouter')
const authServiceRoutes = require('./auth/serviceRouter')

module.exports = [
    authRoutes,
    clientRoutes,
    serviceRoutes,
    employeeRoutes,
    payslipRoutes,
    authPayslipRoutes,
    authEmployeeRoutes,
    authClientRoutes,
    authServiceRoutes
]