function(doc) {
  if(/^meas-se3-state/.test(doc._id)){
    emit(null, doc);
  }
}
