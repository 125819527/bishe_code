from config.utils import create_mysql_connect, deal_result_list, deal_salarl_img, conclution_high_salary_technology, \
    technology_list, conclusion_demand_industry, conclusion_rising_rate, rising_list, post_list, position_list, \
    result_list, conclusion_industry_salary, conclusion_exp_demand_salary, conclusion_shandong, conclusion_area_salary, \
    conclusion_computing_demand, conclusion_bigdata_demand, conclusion_area_position_demand, \
    conclusion_xin_chuan_relation, conclution_high_exp_technology, xueli_exp_salary, xueli_demand_salary, commany_xueli, \
    commany_exp_salary, commany_list


def conclusion_t1():
    """
    新兴与传统职业薪水对比
    """
    return deal_salarl_img(result_list)


def conclusion_t17():
    return conclution_high_salary_technology(technology_list, 10, 1)


def conclusion_t2():
    return conclusion_demand_industry()


def conclusion_t18():
    return conclusion_rising_rate(rising_list)


def conclusion_t14():
    # 计算高薪方向
    return conclution_high_salary_technology(post_list, 10)


def conclusion_t15():
    return conclution_high_salary_technology(position_list, 10)


def conclusion_t13():
    return conclusion_industry_salary(result_list)


def conclusion_t12():
    return conclusion_exp_demand_salary(result_list)


def conclusion_t8():
    return conclusion_shandong()


def conclusion_t4():
    return conclusion_area_salary(result_list)


def conclusion_t16():
    return conclusion_computing_demand()


def conclusion_t5():
    return conclusion_bigdata_demand()


def conclusion_t3():
    return conclusion_area_position_demand()


def conclusion_t10():
    return conclusion_xin_chuan_relation(result_list)


def conclusion_t11():
    return conclution_high_exp_technology(position_list, 10)


def conclusion_t6():
    return xueli_exp_salary(result_list)


def conclusion_t7():
    return xueli_demand_salary(result_list)


def conclusion_t19():
    return commany_xueli(commany_list)


def conclusion_t20():
    return commany_exp_salary(commany_list)


if __name__ == '__main__':
    # print(conclusion_t1())
    # print(conclusion_t2())
    # print(conclusion_t18())
    # print(conclusion_t17())
    # print(conclusion_t14())
    # print(conclusion_t15())
    # print(conclusion_t13())
    # print(conclusion_t8())
    # print(conclusion_t4())
    # print(conclusion_t16())
    # print(conclusion_t5())
    # print(conclusion_t3())
    # print(conclusion_t10())
    # print(conclusion_t11())
    # print(conclusion_t6())
    # print(conclusion_t7())
    # print(conclusion_t19())
    print(conclusion_t20())
