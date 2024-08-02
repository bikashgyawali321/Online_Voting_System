class User
{
    String? id;
    String username;
    String fullName;
    String email;
    String password;
    String role;
    num? age;
    bool isEmailVerified;
    bool isAdmin;
    DateTime? createdAt;
    DateTime? updatedAt;
    String? userPhoto;
    User({ this.id, required this.username, required this.fullName, 
    required this.email, required this.password,required this.role,
    required this.isEmailVerified,
    this.age,required this.isAdmin,this.updatedAt,this.createdAt, this.userPhoto});
}
