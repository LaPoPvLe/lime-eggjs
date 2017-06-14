module.exports = app => {
  /**
   * @apiDefine PagerModel
   * @apiSuccess {Object} pager 分页对象
   * @apiSuccess {Number} pager.index 当前页码
   * @apiSuccess {Number} pager.size 页面条数
   * @apiSuccess {Number} pager.total 总条数
   * 
   */
  class ManageController extends app.Controller {
    /**
     * @api {get} /manages 获取管理员列表
     * @apiGroup Manage
     * 
     * @apiUse PagerModel
     * @apiSuccess {Object} list 管理员列表
     * @apiSuccess {Number} list.id 管理员 id
     * @apiSuccess {String} list.nick_name 昵称
     * @apiSuccess {String} list.login_name 登录账号
     * @apiSuccess {Date} list.registered_at 注册时间
     * @apiSuccess {Date} list.last_login_at 最近登录时间
     * 
     * @apiSuccessExample {json} 成功
     * HTTP/1.1 200 OK
     * {
     *  "pager": {
     *    "index": 1,
     *    "size": 10,
     *    "total": 12
     *  },
     *  "list": {
     *    "id": 1,,
     *    "nick_name": "青海",
     *    "login_name": "qinghai",
     *    "registered_at": "2017-06-14 23:51:50",
     *    "last_login_at": "2017-06-14 23:51:59"
     *  }
     * }
     */
    async index() {

    }

    /**
     * @api {get} /manages/:id 获取单个管理员
     * @apiGroup Manage
     * 
     * @apiSuccess {Object} manage 管理员列表
     * @apiSuccess {Number} manage.id 管理员 id
     * @apiSuccess {String} manage.nick_name 昵称
     * @apiSuccess {String} manage.login_name 登录账号
     * @apiSuccess {Date} manage.registered_at 注册时间
     * @apiSuccess {Date} manage.last_login_at 最近登录时间
     * 
     * @apiSuccessExample {json} 成功
     * HTTP/1.1 200 OK
     * {
     *  "manage": {
     *    "id": 1,,
     *    "nick_name": "青海",
     *    "login_name": "qinghai",
     *    "registered_at": "2017-06-14 23:51:50",
     *    "last_login_at": "2017-06-14 23:51:59"
     *  }
     * }
     * 
     * @apiErrorExample {json} 不存在
     * HTTP/1.1 404 Not Found
     */
    async show() {

    }

    /**
     * @api {post} /manages 创建管理员
     * @apiGroup Manage
     * 
     * @apiSuccess {String} nick_name 昵称
     * @apiSuccess {String} login_name 登录账号
     * @apiSuccess {String} password 登录密码
     * 
     * @apiSuccessExample 成功
     * HTTP/1.1 201 Created
     * 
     * @apiErrorExample 错误：用户名已存在
     * HTTP/1.1 400 Bad Request
     * {
     *  "errors": [
     *    ["login_name", "already_exists"]
     *  ]
     * }
     * 
     * @apiErrorExample 错误：信息错误
     * HTTP/1.1 400 Bad Request
     * {
     *  "errors": [
     *    ["login_name", "invalid"],
     *    ["nick_name", "invalid"],
     *    ["password", "invalid"]
     *  ]
     * }
     */
    async create() {

    }

    /**
     * @api {put} /manages/:id 修改管理员
     * @apiGroup Manage
     * 
     * @apiSuccessExample 成功
     * HTTP/1.1 204 No Content
     */
    async update() {

    }

    /**
     * @api {delete} /manages/:id 删除管理员
     * @apiGroup Manage
     * 
     * @apiSuccessExample 成功
     * HTTP/1.1 204 No Content
     */
    async destroy() {

    }
  }

  return ManageController;
}
