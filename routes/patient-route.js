const express = require("express");
const router = express.Router();
const Patient = require("../model/patient-model");
const mongoose = require("mongoose");

router.get("/", (req, resp, next) => {
  Patient.find()
    .then((result) => {
      resp.status(200).json({
        patientData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      resp.status(500).json({
        error: err,
      });
    });
  //   resp.status(200).json({
  //     message: "this is patient get request",
  //   });
});

router.post("/", (req, resp, next) => {
  const patient = new Patient({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  });
  patient
    .save()
    .then((result) => {
      console.log(result);
      resp.status(200).json({
        newPatient: result,
      });
    })
    .catch((err) => {
      console.log(err);
      resp.status(500).json({
        error: err,
      });
    });

  //    console.log(req.body);
  //    console.log(req.body.address);
});

// get patient by Id

router.get("/:id", (req, resp, next) => {
  console.log(req.params.id);
  Patient.findById(req.params.id)
    .then((result) => {
      resp.status(200).json({
        patient: result,
      });
    })
    .catch((err) => {
      console.log(err);
      resp.status(500).json({
        error: err,
      });
    });
});

// deleting the data of patient from database or delete request

router.delete("/:id", (req, resp, next) => {
  Patient.remove({ _id: req.params.id })
    .then((result) => {
      resp.status(200).json({
        message: "Patientdata deleted",
        result: result,
      });
    })
    .catch((err) => {
      console.log(err);
      resp.status(500).json({
        error: err,
      });
    });
});

// put request for update
router.put("/:id", (req, res, next) => {
  console.log(req.params.id);
  Patient.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
      },
    }
  )
    .then((result) => {
      res.status(200).json({
        updated: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
