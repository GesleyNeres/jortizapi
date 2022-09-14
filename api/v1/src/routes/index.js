const authRoutes = require('./auth/authRouter.js')
const clientRoutes = require('./public/clientRouter')
const serviceRoutes = require('./public/serviceRouter')
const employeeRoutes = require('./public/employeeRouter')
const payslipRoutes = require('./public/payslipRouter')
const authPayslipRoutes = require('./auth/payslipRouter')

module.exports = [
    authRoutes,
    clientRoutes,
    serviceRoutes,
    employeeRoutes,
    payslipRoutes,
    authPayslipRoutes
]