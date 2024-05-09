import copy
import re
import numpy as np

import pymysql

MYSQL_HOST = "101.132.251.60"
PASSWOWD = "Htc.123321"
USER = "root"
DATABASE = "job"

technology_list = ["Java", "C", "PHP", "Go", "Python", "Linux", "BI", "UI", "ETL", "大数据"]  # 定义高薪水技能中的技能范围
rising_list = ["大数据", "机器学习", "云", "AI", "深度学习", "算法"]  # 定义那些关键字属于新兴技术，用于各新兴水平技术比列
post_list = ["后端", "深度学习", "机器学习", "算法", "全栈", "人工智能", "大数据", "云", "AI", "运维",
             "网络"]  # 定义用户认为的存在的计算机方向，用于计算机专业薪水前十方向

position_list = ["Java开发工程师", "嵌入式", "C", "Rust", "系统开发", "Go", "运维", "前端", "后端", "全栈", "Python",
                 "大数据", "PHP", "云计算", "容器云", "云原生", "爬虫", "分布式", "算法", "总监",
                 "销售"]  # 定义用户认为的存在的计算机岗位，用于计算机专业薪水前十岗位

area_list = ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '滨州',
             '德州', '聊城', '临沂', '菏泽']  # 查询城市的薪资，用于山东城市

commany_list = ["腾讯", "阿里", "字节", "美团", "电信", "移动", "联想", "联通"]
degree_dict = {"本科": 0, "大专": 0, "中技/中专": 0, "硕士": 0, "高中": 0, "博士": 0, "初中及以下": 0, "": 0}


def change_dict(i):
    try:
        return list(i.keys()), list(i.values())
    except Exception:
        pass

    try:
        x, y, z = [], [], []
        for m in i:
            x.append(m[0])
            y.append(m[1])
            z.append(m[2])
        return x, y, z
    except Exception:
        pass

    try:
        x, y = [], []
        for m in i:
            x.append(m[0])
            y.append(m[1])
        return x, y
    except Exception:
        pass


def create_mysql_connect():
    """
    获取所有数据
    """
    db = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = db.cursor()
    cursor.execute(f'USE `{DATABASE}`;')
    sql = "select * from job_info"
    cursor.execute(sql)
    result = cursor.fetchall()
    cursor.close()
    db.close()
    return result


def deal_result_list(result_list, index=4):
    """
    数据可能存在爬取错误且薪资非浮点数
    """
    error_list = []
    for i in result_list:
        try:
            i[index] = int(deal_salary(i[index]))
            i[8] = deal_experience(i[8])
            i[2] = i[2].split("·")[0]
        except Exception as e:
            print(e)
            error_list.append(i)

    for i in error_list:
        result_list.remove(i)

    return result_list


def deal_experience(exp):
    """
    对经验需求字段进行处理
    """
    exp_list = re.findall("\d+", exp)
    if not exp_list:
        return 0
    else:
        return exp_list[0]


def deal_salary(salary):
    """
    #  处理薪资
    """
    if not salary:
        return 6000
    salary = salary.split("·")[0]
    if "千及以下" in salary:
        return int(salary.replace("千及以下", "")) * 1000

    if "万及以下" in salary:
        return int(salary.split("万及以下")[0]) * 1000

    if "天" in salary:
        salary = float(re.findall("\d+", salary)[0])
        if salary < 10:
            return salary * 21 * 1000
        else:
            return salary * 21

    if "年" in salary:
        salary = (float(salary.split("-")[1].split("万")[0]) / 12) * 10000
        return salary

    if "万" in salary:
        salary = float(salary.split("万")[0].split("-")[1]) * 10000
        if salary > 300000:
            salary = salary / 12
        return salary

    else:
        salary = float(salary.split("-")[1].replace("千", "").split('·')[0]) * 1000
        return salary


def deal_salarl_img(result_list):
    # 新兴与传统职业薪水对比， 增加判断进行新兴与传统之间的对比
    # deal_salarl_img(result_list)
    # ([2916.0, 15000.0, 20000.0, 30000.0, 85000.0],
    # [1260.0, 12000.0, 16000.0, 25000.0, 100000.0])
    xinxing_list = []
    chuantong_list = []
    for i in result_list:
        if "算法" in i[1]:
            xinxing_list.append(i[4])
            continue

        if "大数据" in i[1]:
            xinxing_list.append(i[4])
            continue

        if "云计算" in i[1]:
            xinxing_list.append(i[4])
            continue

        if "视觉" in i[1]:
            xinxing_list.append(i[4])
            continue

        if "机器学习" in i[1]:
            xinxing_list.append(i[4])
            continue

        if "人工智能" in i[1]:
            xinxing_list.append(i[4])
            continue

        if "AI" in i[1]:
            xinxing_list.append(i[4])
            continue

        if "云" in i[1]:
            xinxing_list.append(i[4])
            continue

        chuantong_list.append(i[4])

    xinxing_list = np.array(xinxing_list).astype('float64')
    chuantong_list = np.array(chuantong_list).astype('float64')
    xinxing_conclusion = [np.min(xinxing_list), np.percentile(xinxing_list, 25), np.median(xinxing_list),
                          np.percentile(xinxing_list, 75), np.max(xinxing_list)]
    chuantong_list = [np.min(chuantong_list), np.percentile(chuantong_list, 25), np.median(chuantong_list),
                      np.percentile(chuantong_list, 75), np.max(chuantong_list)]
    return xinxing_conclusion, chuantong_list


def conclution_high_salary_technology(technology_list, num, is_change=0):
    """
    计算高薪技能
    """
    final_dict = {}
    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()

    try:

        for i in technology_list:
            cursor.execute(f"select * from job_info where job_name like '%{i}%' ")
            result = cursor.fetchall()
            result = [list(i) for i in result]
            result = deal_result_list(result)
            result = [i[4] for i in result]

            result = int(sum(result) / len(result))

            if i == "大数据" and is_change:
                final_dict['hadoop'] = result
                continue

            final_dict[i] = result
        result = sorted(final_dict.items(), key=lambda x: x[1], reverse=True)
        if len(result) <= num:
            return result
        else:
            return result[0:num]

    except Exception as e:
        print(e)

    finally:
        # 关闭数据库连接
        connection.close()
        cursor.close()


def conclusion_demand_industry():
    """
    计算需求前十行业
    """

    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()
    try:
        cursor.execute(f"SELECT industry, count(*) as demand FROM job_info GROUP BY industry ORDER BY demand desc;")
        result = [i for i in cursor.fetchall()]

        if len(result) >= 10:
            return result[0:10]
        return result

    except Exception as e:
        print(e)

    finally:
        # 关闭数据库连接
        connection.close()
        cursor.close()


def conclusion_rising_rate(rising_list):
    """
    计算新兴职业比例
    """
    final_dict = {}
    count_dict = {}
    count = 0

    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()

    try:

        for i in rising_list:
            cursor.execute(f"select * from job_info where job_name like '%{i}%' ")
            result = cursor.fetchall()
            count += len(result)
            count_dict[i] = len(result)

        for i in rising_list:
            final_dict[i] = round((count_dict[i] / count), 2)

        return final_dict

    except Exception as e:
        print(e)

    finally:
        # 关闭数据库连接
        connection.close()
        cursor.close()


def conclusion_industry_salary(result_list):
    """
    职位与需求量、薪水关系
    """
    final_dict = {}
    demand_list = []
    salary_list = []
    try:
        for i in result_list:
            if final_dict.get(i[5]):
                final_dict.get(i[5]).append(i[4])
            else:
                final_dict[i[5]] = [i[4]]

        for value in final_dict.values():
            demand_list.append(len(value))
            salary_list.append(sum(value) / len(value))

        final_dict = list(zip(demand_list, salary_list))
        final_dict.sort()
        return final_dict
    except Exception as e:
        print(e)


def conclusion_exp_demand_salary(result_list):
    """
    计算需求与经验与薪水的关系
    """
    final_dict = {}
    final_list = []
    try:
        for i in result_list:
            key = (i[5], i[8])
            if final_dict.get(key):
                final_dict.get(key).append(i[4])
            else:
                final_dict[key] = [i[4]]

        for key, value in final_dict.items():
            final_list.append([key[1], len(value), sum(value) / len(value)])

        return final_list

    except Exception as e:
        print(e)


def conclusion_shandong():
    """
    计算山东薪水前十城市
    """

    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()

    try:

        final_dict = {}
        final_list = []

        for area in area_list:
            cursor.execute(f"SELECT * FROM job_info where job_area LIKE '%{area}%';")
            result = [i[4] for i in cursor.fetchall()]
            salary_list = [deal_salary(i) for i in result]
            final_dict[area] = sum(salary_list) / len(salary_list) if len(salary_list) != 0 else 0

        for key, value in final_dict.items():
            final_list.append((key, value))

        return sorted(final_list, key=lambda x: x[1], reverse=True)

    except Exception as e:
        print(e)

    finally:
        # 关闭数据库连接
        connection.close()
        cursor.close()


def conclusion_area_salary(result_list):
    """
    薪资前十城市
    """
    final_dict = {}
    final_list = []

    for i in result_list:

        result = final_dict.get(i[2])
        if result:
            result.append(i[4])
        else:
            final_dict[i[2]] = [i[4]]

    for key, value in final_dict.items():
        final_list.append(
            {key: int(sum(value) / len(value))}
        )

    final_list.sort(reverse=True, key=lambda x: list(x.values())[0])
    return final_list[0:10]


def conclusion_computing_demand():
    """
    计算需求量前十城市
    """

    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()

    try:
        cursor.execute(
            f"SELECT SUBSTRING_INDEX(job_area, '·', 1) as area, count(*) as demand FROM job_info group by area ORDER BY demand desc;")
        return [i for i in cursor.fetchall()][0:10]

    except Exception as e:
        print(e)

    finally:
        # 关闭数据库连接
        connection.close()
        cursor.close()


def conclusion_bigdata_demand():
    """
    计算大数据需求前十
    """

    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()

    try:
        cursor.execute(
            f"SELECT SUBSTRING_INDEX(job_area, '·', 1) as area, count(*) as demand FROM job_info WHERE job_name LIKE '%数据%' group by area ORDER BY demand desc;")
        return [i for i in cursor.fetchall()][0:10]

    except Exception as e:
        print(e)

    finally:
        # 关闭数据库连接
        connection.close()
        cursor.close()


def conclusion_area_position_demand():
    """
    计算地区职位与需求关系
    """
    area_list, position_list = set(), set()
    result = []
    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()

    try:
        cursor.execute(
            f"SELECT SUBSTRING_INDEX(job_area, '·', 1) as area,industry, count(*) as demand FROM job_info WHERE job_area not in ('', 'python') GROUP BY area, industry HAVING demand > 6;")
        for i in cursor.fetchall():
            position_list.add(i[1])
            area_list.add(i[0])
            result.append(list(i))

        return list(area_list), list(position_list), result

    except Exception as e:
        print(e)

    finally:
        # 关闭数据库连接
        connection.close()
        cursor.close()


def conclusion_xin_chuan_relation(result_list):
    # 新兴与传统职业学历经验需求对比
    xinxing_list = []
    chuantong_list = []

    chuantong_exp_dict = {}
    chuantong_xueli_dict = {}

    xinxing_exp_dict = {}
    xinxing_xueli_dict = {}

    for i in result_list:
        if "算法" in i[1]:
            xinxing_list.append(i)
            continue

        if "大数据" in i[1]:
            xinxing_list.append(i)
            continue

        if "云计算" in i[1]:
            xinxing_list.append(i)
            continue

        if "视觉" in i[1]:
            xinxing_list.append(i)
            continue

        if "机器学习" in i[1]:
            xinxing_list.append(i)
            continue

        if "人工智能" in i[1]:
            xinxing_list.append(i)
            continue

        if "AI" in i[1]:
            xinxing_list.append(i)
            continue

        if "云" in i[1]:
            xinxing_list.append(i)
            continue

        chuantong_list.append(i)

    for i, j in zip(chuantong_list, xinxing_list):

        if i[8]:
            try:
                chuantong_exp_dict[i[8]] += 1
            except KeyError:
                chuantong_exp_dict[i[8]] = 1

        if i[9]:
            try:
                chuantong_xueli_dict[i[9]] += 1
            except KeyError:
                chuantong_xueli_dict[i[9]] = 1

        if j[8]:
            try:
                xinxing_exp_dict[j[8]] += 1
            except KeyError:
                xinxing_exp_dict[j[8]] = 1

        if j[9]:
            try:
                xinxing_xueli_dict[j[9]] += 1
            except KeyError:
                xinxing_xueli_dict[j[9]] = 1

    return chuantong_exp_dict, chuantong_xueli_dict, xinxing_exp_dict, xinxing_xueli_dict


def conclution_high_exp_technology(technology_list, num, is_change=0):
    """
    计算高薪技能
    """
    final_dict = {}
    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()

    try:

        for i in technology_list:
            cursor.execute(f"select * from job_info where job_name like '%{i}%' ")
            result = cursor.fetchall()
            result = [list(i) for i in result]
            result = deal_result_list(result)
            result = [int(i[8]) for i in result]

            result = int(sum(result) / len(result))

            if i == "大数据" and is_change:
                final_dict['hadoop'] = result
                continue

            final_dict[i] = result
        result = sorted(final_dict.items(), key=lambda x: x[1], reverse=True)
        if len(result) <= num:
            return result
        else:
            return result[0:num]

    except Exception as e:
        print(e)


def xueli_exp_salary(result_list):
    """
    计算学历经验薪水
    """
    final_dict = {}
    final_list = []
    xueli_set = set()
    exp_set = set()

    try:
        for i in result_list:
            if not i[9]:
                continue

            xueli_set.add(i[9])
            exp_set.add(i[8])

            key = (i[9], i[8])
            if final_dict.get(key):
                final_dict.get(key).append(i[4])
            else:
                final_dict[key] = [i[4]]

        for key, value in final_dict.items():
            final_list.append([key[0], key[1], sum(value) / len(value)])

        return list(xueli_set), list(exp_set), final_list

    except Exception as e:
        print(e)


def xueli_demand_salary(result_list):
    """
    计算学历需求薪水
    """
    final_dict = {}
    final_list = []

    try:
        for i in result_list:
            if not i[9]:
                continue

            key = i[9]
            if final_dict.get(key):
                final_dict.get(key).append(i[4])
            else:
                final_dict[key] = [i[4]]

        for key, value in final_dict.items():
            final_list.append([key, len(value), sum(value) / len(value)])

        return final_list

    except Exception as e:
        print(e)


def commany_xueli(commany_list):
    """
    计算大公司学历要求
    """
    final_list = []
    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()

    try:
        for area in commany_list:
            cursor.execute(
                f"SELECT job_degree, count(*) as count FROM job_info where company_name LIKE '%{area}%'  group by job_degree;")
            tmp_dict = copy.deepcopy(degree_dict)
            for item in [i for i in cursor.fetchall()]:
                try:
                    tmp_dict[item[0]] = item[1]
                except KeyError as e:
                    continue
            final_list.append(list(tmp_dict.values()))

        return final_list

    except Exception as e:
        print(e)

    finally:
        # 关闭数据库连接
        connection.close()
        cursor.close()


def commany_exp_salary(commany_list):
    """
    各大公司工资经验
    """
    salary_list = []
    exp_list = []
    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    cursor = connection.cursor()

    try:

        for commany in commany_list:
            cursor.execute(f"SELECT * FROM job_info where company_name LIKE '%{commany}%' ")
            result = [list(i) for i in cursor.fetchall()]
            result = deal_result_list(result)

            tmp_list = [int(i[8]) for i in result]
            exp_list.append(round(sum(tmp_list) / len(tmp_list), 2))

            tmp_list = [i[4] for i in result]
            salary_list.append(round(sum(tmp_list) / len(tmp_list), 2))

        return exp_list, salary_list

    except Exception as e:
        print(e)

    finally:
        # 关闭数据库连接
        connection.close()
        cursor.close()


result_list = create_mysql_connect()
result_list = [list(i) for i in result_list]
result_list = deal_result_list(result_list)

if __name__ == '__main__':
    # create_mysql_connect()
    pass
