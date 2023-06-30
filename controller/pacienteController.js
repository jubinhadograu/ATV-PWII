const express = require('express');
const upload = require('../upload/upload')
const pacienteModel = require('../model/pacienteModel')
const router = express.Router();

router.post('/paciente/inserir', upload.single('foto'), (req, res)=>{

    //console.log('teste');
    //res.send('teste');

    let {nomePaciente, telefonePaciente, celularPaciente, emailPaciente,
    nomeResponsavel, telefoneResponsavel}= req.body;
    let foto = req.file.path;
    console.log(foto);

    pacienteModel.create(
        {
            nomePaciente,
            telefonePaciente,
            celularPaciente,
            emailPaciente,
            foto,
            nomeResponsavel,
            telefoneResponsavel
        }
    ).then(
        ()=>{
            return res.status(201).json({
                errorStatus:false,
                mensageStatus:'PACIENTE CADASTRADO COM SUCESSO'
            });
        }
    ).catch(
        (error)=>{
            return res.status(500).json({
            errorStatus:true,
            mensageStatus: error
            });
        }
    );
});

module.exports = router;
