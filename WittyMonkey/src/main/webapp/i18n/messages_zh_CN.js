var error_500 = "服务器错误";
var regist_title = "注册";
var regist_get_code_first = "请先获取验证码";
var regist_regist_success = "注册成功";
var regist_user_is_exist = "用户名已存在";
var regist_password_less_six = "密码不能小于6位";
var regist_password_not_same = "两次密码不一致";
var regist_code_is_wrong = "验证码错误";
var regist_email_is_wrong = "邮箱格式不正确";
var regist_login_error = "用户名或密码错误";
var regist_get_code = "获取验证码";
var regist_license_tip = "营业执照右上方15位注册号";
var regist_hotel_name = "酒店名称";
var regist_legal_name = "法人姓名"
var regist_place_detail = "地址";
var regist_login_name = "登陆名";
var regist_real_name = "真实姓名";
var regist_password = "密码";
var regist_idCard = "身份证号";
var regist_validate_code = "验证码";
var regist_email = "邮箱";
var regist_password_reg = "6-20位字母和数字";
var regist_login_name_reg = "3-20位字母/数字/下划线";
function messageOfValidateLength(name, length) {
    return "不能超过" + length + "位";
}
function messageOfValidateNull(name) {
    return "请输入" + name;
}
var regist_validate_hotel_licenseNo_null = "请输入编号";
var regist_validate_hotel_licenseNo_wrong = "编号不正确";
var regist_validate_common_idcard_wrong = "身份证号不正确";
var regist_validate_number_only = "只能是数字";
var regist_validate_email_exist = "邮箱已注册";
var floor_manage_add_title = "新增楼层";
var floor_manage_edit_title = "编辑楼层"
var floor_validate_no_wrong = "-999到999";
var floor_validate_no_exist = "楼层号已存在";
var floor_manage_add_success = "楼层添加成功";
var floor_manage_edit_success = "楼层修改成功";
var floor_manage_delete_success = "楼层删除成功";
var floor_manage_delete_title = "删除楼层";
var floor_manage_delete_hint = "删除楼层后该楼层的所有房间将移动到未知楼层，确定删除吗？";
var floor_manage_delete_not_exist = "楼层不存在，可能已被删除";
var message_note = "备注";
var page_first = "首页";
var page_last = "尾页";
var page_prev = "上一页";
var page_next = "下一页";
var page_to = "到第";
var page_page = "页";
var btn_page_yes = "确定";
var no_data = "暂时还没有数据";
var btn_edit = "编辑";
var btn_delete = "删除";
var room_add_title = "新增房间";
var room_no = "房间号";
var room_name = "房间名";
var room_single_bed_num = "单人床";
var room_double_bed_num = "双人床";
var room_availabel_num = "可住人数";
var room_breakfast = "含早";
var room_other_facility = "其它设施";
var room_extra_info = "备注";
var room_validate_roomNo_exist = "房间号已存在";
var room_validate_bed = "0-10";
var room_validate_availabel = "0-100";
var room_validate_area = "面积不正确";
var room_validate_price = "价格不正确";
var room_validate_floor_not_exist = "楼层不存在";
var room_add_success = "房间添加成功";
var btn_show_reserve = "查看预定";
var btn_reserve = "预定";
var btn_unsubscribe = "退订"
var btn_checkin = "入住";
var btn_checkout = "退房";
var btn_change = "换房";
var btn_clean = "已清理";
var room_hint_checkin = "已入住";
var room_hint_free = "空闲";
var room_hint_reserved = "已预定";
var room_hint_clean = "待清理";
var room_detail_title = "房间信息";
var room_edit_title = "编辑房间";
var btn_save = "保存";
var room_update_success = "房间修改成功";
var room_delete_success = "房间删除成功";
var room_delete_title = "删除房间";
var room_delete_hint = "确定删除该房间吗？";
var room_delete_not_exist = "房间不存在，可能已被删除";
var room_delete_checkin = "该房间有人入住，不能删除";
var room_delete_reserved = "该房间有人预定，不能删除";
var room_reserve_title = "预定";
var room_unsubscribe_title = "退定";
var room_checkin_title = "入住";
var room_checkout_title = "退房";
var room_change_title = "换房";
var message_tel = "电话";
var room_reserve_date = "预定时间";
var date_wrong = "时间不正确";
var date_range = "时间范围不正确";
var money = "金额";
var money_wrong = "金额不正确";
var cust_name = "姓名";
var deposit = "定金";
var deposit_wrong = "定金不正确";
var room_reserve_success = "预定成功";
var clean_title = "房间清理";
var clean_hint = "这个房间已清理完成了吗？";
var operation_success = "操作成功";
var operation_failure = "操作失败";
var time_conflict = "时间冲突";
var to = "到";
var not_match_name = "没有填写入住人姓名";
var no_customer = "没有填写入住人";
var foregift_negative = "押金不能为负数";
var foregift_wrong = "押金不正确";
var checkin_date_checkin = "入住";
var checkin_date_checkout = "离店";
var checkin_success = "入住成功";
var checkin_not_exist = "该入住信息不存在";
var checkout_checkin_already_checkout = "已经退房完成";
var checkout_success = "退房成功";
var show_reserve_title = "预定情况";
var btn_detail = "详情";
var unsubscribe_title = "退还定金";
var refund_too_large = "退还金过多";
var wrong_refund = "退还金错误";
var unsubscribe_success = "退定成功";
var reserve_not_exist = "预定不存在";
var unsubscribe_checkedin = "已经入住";
var unsubscribe_unsubscribe = "已经退定";
var choose_room_title = "选择房间";
var name = "名称";
var materiel_type_delete_hint = "删除物料类型后该类型的所有物料将移动到未知类型，确定删除吗？";
var materiel_type_delete_title = "删除物料类型";
var materiel_type_not_exist = "该物料类型不存在";
var materiel_type_delete_success = "该物料类型删除成功";
var materiel_type_edit_title = "编辑物料类型";
var materiel_type_add_title = "添加物料类型";
var materiel_type_validate_name_exist = "物料类型已存在";
var materiel_type_validate_name_empty = "物料类型为空";
var materiel_type_add_success = "物料类型添加成功";
var materiel_type_update_success = "物料类型更新成功";
var choose_room_not_exist = "房间不存在";
var choose_checkin_not_exist = "入住信息不存在";
var reason = "原因";
var change_success = "换房成功";
var checkout_payback = "退款(含押金)";
var checkout_refund_wrong = "金额不正确, 范围：";

var btn_dimission = "离职";
var dimission_title = "员工离职";
var staff_add = "员工入职";
var staff_add_success = "员工入职成功";
var staff_no = "编号";
var staff_real_name = "真实姓名";
var staff_roles = "角色";
var staff_initpassword = "初始密码";
var staff_tel = "电话";
var staff_email = "邮箱";
var staff_edit = "编辑员工";
var staff_dimission_date = "离职日期";
var staff_dimission_note = "离职原因";
var staff_induction_date = "入职日期";
var operation = "操作";
var staff_edit_success = "员工修改成功";
var dimission_benefits_wrong = "补贴不正确";
var dimission_success = "员工离职成功";

var role_delete_hint = "确定要删除这个角色吗？该动作会影响到相关用户";
var role_delete_title = "删除角色";
var role_delete_not_exist = "角色不存在，可能已被删除";
var role_delete_success = "角色删除成功";
var role_edit_title = "编辑角色";
var role_add_title = "添加角色";
var role_name = "角色名";
var role_exist = "角色已存在";
var no_menu_chosen = "没有选择权限";
var menu_duplicate = "已有角色拥有这些权限: ";
var role_add_success = "角色添加成功";
var role_edit_success = "角色修改成功";
var role_can_not_delete = "不允许删除这个角色";
var role_incumbency = "在职";
var role_dimission = "已离职";

var finance_type_in = "收入";
var finance_type_out = "支出";
var finance_type_add_title = "添加类型";
var finance_type_validate_name_exist = "类型名已存在";
var finance_type_name = "类型名";
var finance_type_add_success = "类型添加成功";
var finance_type_edit_not_exist = "所编辑的类型不存在";
var finance_type_edit_title = "编辑类型";
var finance_type_can_not_edit = "该类型不可编辑";
var finance_type_edit_success = "更新成功";
var finance_type_delete_hint = "确定要删除这个类型吗？<br/>" +
    "删除后该类型下的所有财务记录将移至默认类型下。";
var finance_type_delete_title = "删除类型";
var finance_type_delete_not_exist = "该类型不存在";
var finance_type_delete_success = "类型删除成功";

var finance_type_not_exist = "类型不存在，可能已被删除";
var money_error = "金额不正确";
var money_only_positive = "金额只能为正数";
var finance_add_success = "财务添加成功";
var finance_type_all = "全部";

var reimburse_pending = "待审核";
var reimburse_approved = "已批准";
var reimburse_rejected = "已驳回";
var reimburse_unknown = "未知";
var apply_note = "申请说明";
var opt_note = "审核说明";
var reimburse_detail = "报销详情";
var reimburse_add = "报销登记";
var reimburse_approve_title = "批准";
var reimburse_reject_title = "驳回";
var reimburse_approve_hint = "确定批准该报销吗？该操作不可恢复。";
var reimburse_reject_hint = "确定驳回该报销吗？该操作不可恢复。";
var reimburse_not_exist = "报销不存在";
var reimburse_add_success = "报销添加成功";
var reimburse_updated = "报销已更新，请刷新后重试";
var reimburse_has_approved = "该报销已批准, 审核人：";
var reimburse_has_reject = "该报销已驳回, 审核人：";
var reimburse_approve_success = "批准成功";
var reimburse_reject_success = "驳回成功";

var btn_change = "变动";
var btn_history = "历史";
var change_title = "工资变动";
var history_title = "工资历史";
var time_error = "时间不正确";
var add_success = "添加成功";
var update_success = "修改成功";
var salary_delete_title = "工资变动删除";
var salary_delete_hint = "确定要删除工资变动吗?";
var salary_not_exist = "工资变动不存在，可能已被删除";
var salary_delete_success = "删除成功";
var to_back = "返回";
var salary_history = "工资历史";
var salary_legend = "工资";
var salary_pay = "工资发放";
var no_salary = "上月没有工资需要发放";
var other_pay_wrong = "其它扣薪不正确";
var bonus_wrong = "奖金不正确";
var payroll_success_title = "发放成功";
var payroll_success = "工资发放成功，发放总额：";

var materiel_add_title = "添加物料";
var materiel_add_barcode = "条码号";
var materiel_barcode_exist = "条码号已存在";
var materiel_name = "名称";
var materiel_unit = "单位";
var meteriel_warn_error = "预警不正确";
var materiel_warn_negative = "预警不能为负";
var meteriel_sell_error = "售价不正确";
var materiel_sell_negative = "售价不能为负";
var materiel_add_success = "物料保存成功";
var materiel_update_success = "物料更新成功";
var materiel_detail_title = "物料详情";
var materiel_delete_title = "删除物料";
var materiel_detele_not_null_hint = "该物料还有库存，删除后系统将无法管理其库存，是否删除?";
var materiel_delete_hint = "确定删除该物料？";
var materiel_delete_not_exist = "物料不存在，可能已被删除";
var materiel_delete_success = "物料删除成功";

var instock_price = "进价";
var instock_qty = "数量";
var instock_pay = "实付";
var instock_materiel_null = "已删除";
var instock_add = "添加入库";
var instock_barcode_not_exist = "条码号不存在";
var instock_name_not_exist = "名称不存在";
var instock_materiel_not_exist = "物料不存在";
var instock_price_wrong = "进价不正确";
var instock_qty_wrong = "数量不正确";
var instock_pay_wrong = "实付不正确";
var instock_success = "入库成功";

var outstock_type_damage = "损坏出库";
var outstock_type_sell = "销售出库";
var outstock_type_consume="消费出库";
var outstock_materiel_null = "已删除";
var outstock_add = "出库";
var outstock_qty_ecceed = "最大库存：";
var outstock_success = "出库成功";

var leave_type_name = "类型名";
var leave_type_deduct = "日扣薪比";
var leave_type_add_title = "添加请假类型";
var leave_type_edit_title = "修改请假类型";
var leave_type_name_exist = "类型名已存在";
var leave_type_deduct_wrong = "0-100";
var leave_type_add_success = "请假类型添加成功";
var leave_type_edit_success = "请假类型修改成功";
var leave_type_delete_title = "删除请假类型";
var leave_type_delete_hint = "确定要删除这个请假类型吗？";
var leave_type_delete_success = "请假类型删除成功";
var leave_type_not_exist = "请假类型不存在";

var leave_add_title = "请假登记";
var leave_detail_title = "请假详情";
var leave_deduct = "扣薪";
var leave_date_choose = "请选择日期";
var leave_date = "请假时间";
var leave_add_success = "请假登记成功";
var leave_not_exist = "请假申请不存在，可能已被删除";
var leave_changed = "请假申请有变更，请重试"
var leave_approve_success = "批准成功";
var leave_reject_success = "驳回成功";

var leave_apply_title = "请假申请";
var leave_apply_success = "请假申请成功，请等待审核";
var leave_apply_edit_title = "请假申请修改";
var apply_approved = "申请已被批准";
var apply_rejected = "申请已被驳回";
var apply_edit_success = "申请修改成功";
var apply_delete_success = "申请删除成功";
var apply_delete_hint = "确定要删除这条申请吗";
var apply_delete_title = "删除申请";

var reimburse_apply_add_success = "报销申请成功，请等待审核";

var setting_data = "每页数据数";
var setting_data_wrong = "每页数据数不正确";
var setting_save_success = "保存成功，刷新页面生效";

var report_date_null = "请选择时间区间";
var date_wrong = "时间有误";

// report
var total_in_out_title = "总收支";
var in_title = "收入";
var out_title = "支出";
var net_margin = "净利润: ";
var salary_history_date = "时间：";
var salary_history_basic = "基本工资：";
var salary_history_leave = "请假扣薪: ";
var salary_history_Other = "其它扣薪: ";
var salary_history_bonus = "奖金: ";
var salary_history_Amount = "实际工资: ";
var salary_history_legend = "工资";

// notify
var notify_no_receiver = "请选择收件人";
var send_success = "发送成功";
var inbox_null = "收件箱为空";
var outbox_null = "发件箱为空";
var trashbin_null = "垃圾箱为空";