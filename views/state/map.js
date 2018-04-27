function(doc) {
  if(/^state-se3_/.test(doc._id)){
    emit(null, doc);
  }
}
