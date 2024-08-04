
class User {
  String? id;
  String username;
  String fullName;
  String email;
  String password;
  String role;
  num? age;
  num? phoneNumber;
  bool isEmailVerified;
  bool? isPhoneNumberVerified;
  bool isAdmin;
  DateTime? createdAt;
  DateTime? updatedAt;
  String? userPhoto;
  User(
      {this.id,
      required this.username,
      required this.fullName,
      required this.email,
      required this.password,
      required this.role,
      required this.isEmailVerified,
      this.phoneNumber,
      this.isPhoneNumberVerified,
      this.age,
      required this.isAdmin,
      this.updatedAt,
      this.createdAt,
      this.userPhoto});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
        username: json['username'],
        fullName: json['fullName'],
        email: json['email'],
        password: json['password'],
        role: json['role'],
        isEmailVerified: json['isEmailVerified'],
        isAdmin: json['isAdmin'],
        age: json['age'],
        id: json['id'],
        createdAt: json['createdAt'],
        updatedAt: json['updatedAt'],
        userPhoto: json['userPhoto']);
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'username': username,
      'fullName': fullName,
      'email': email,
      'isEmailVerified': isEmailVerified,
      'phoneNumber': phoneNumber,
      'isPhoneNumberVerified': isPhoneNumberVerified,
      'password': password,
      'age': age,
      'role': role,
      'isAdmin': isAdmin,
      'createdAt': createdAt,
      'updatedAt': updatedAt,
      'userPhoto': userPhoto,
    };
  }
}
