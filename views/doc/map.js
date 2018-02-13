function(doc) {
  if(doc.Standard && doc.Standard.Name == "SE3"){
    emit("Standard", doc);
  }

  if(doc.CalibrationObject && doc.CalibrationObject.Standard =="SE3"
                           && doc.CalibrationObject.Sign){
    emit("CalibrationObject", doc);
  }// Calibration

  if(doc.Constants){
    emit("Constants", doc);
  } // Constants

 if(doc.Calibration && doc.Calibration.Type == "IK"
                    && doc.Calibration.Result
                    && doc.Calibration.CustomerObject
                    && doc.Calibration.CustomerObject.Sign
                    && doc.Calibration.CustomerObject.Standard == "SE3"){
   var k = ["Result",
            doc.Calibration.Year,
            doc.Calibration.Certificate,
            doc.Calibration.Issue].join("_")
     , v = {Sign:doc.Calibration.CustomerObject.Sign,
            Result:doc.Calibration.Result.Values}
   emit(k, v);
 } //
}
