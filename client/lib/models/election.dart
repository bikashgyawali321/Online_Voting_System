class Election {
  String electionId;
  String title;
  String? description;
  DateTime? startDate;
  DateTime? endDate;
  String status;
  Election({
    required this.electionId,
    required this.title,
    required this.status,
    this.startDate,
    this.endDate,
    this.description,
  });
  factory Election.fromJson(Map<String, dynamic> json) {
    return Election(
        electionId: json['eid'],
        title: json['title'],
        status: json['status'],
        description: json['description'] ?? '',
        startDate: json['startDate'] ?? '',
        endDate: json['endDate'] ?? '');
  }
  Map<String, dynamic> toJson() {
    return {
      'eid': electionId,
      'title': title,
      'status': status,
      'description': description,
      'startDate': startDate,
      'endDate': endDate,
    };
  }
}
