module.exports = app => {
  const mongoose = app.mongoose;

  const MANAGE_STATUS = ['normal', 'locked'];

  const ManageSchema = new mongoose.Schema({
    // 昵称
    nick_name: { type: String, },
    // 登录名
    login_name: { type: String, },
    // 头像
    avatar: { type: String, },
    // 注册时间
    registered_at: { type: Date, default: Date.now },
    // 上次登录时间
    last_login_at: { type: Date, },
    // 登录密码
    password: { type: String, },
    // 加密种子
    salt: { type: Buffer, },

    status: { type: String, enum: MANAGE_STATUS, }
  });

  return mongoose.model('manage', ManageSchema);
}
