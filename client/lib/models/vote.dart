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

  factory Vote.fromJson(Map<String, dynamic> json) {
    return Vote(
        voteId: json['voteId'],
        cid: json['cid'],
        createdAt: json['createdAt'],
        eid: json['eid'],
        uid: json['uid']);
  }
}
