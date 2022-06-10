const PatientService = require("../../services/admin/patients");

const patients = async (req, res) => {
    try {
        const Patients = await PatientService.getPatients();
        res.status(201).send(Patients);
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
    }
}
const patient = async (req, res) => {
    try {
        const Patient = await PatientService.getOnePatient(req.params.id);
        res.status(201).send(Patient);
    } catch (e) {
        res.status(500).send({ message: e.message }).end();
    }
}
module.exports = {
    patients,
    patient
}