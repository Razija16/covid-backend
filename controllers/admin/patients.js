const PatientService = require("../../services/admin/patients");

const patients = async (req, res) => {
    try{
        const Patients = await PatientService.getPatients();
        res.status(201).send(Patients);
    } catch (e) {
    res.status(500).send({ message: e.message }).end();
    }
}
module.exports = {
    patients
}