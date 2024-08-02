class Vote {
  String voteId;
  String eid;
  String cid;
  String uid;
  DateTime createdAt;
  Vote(
      {required this.voteId,
      required this.cid,
      required this.createdAt,
      required this.eid,
      required this.uid});
}
