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
}
