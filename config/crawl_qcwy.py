import json

import pymysql
from DrissionPage import ChromiumPage

from config.utils import MYSQL_HOST, USER, PASSWOWD, DATABASE

page = ChromiumPage()

keyword = "C++开发成都"


def parse_page_job_list(job_item):
    item = job_item.children()[1]
    job_info_str = item.attr("sensorsdata")
    job_info = json.loads(job_info_str)
    job_id = job_info.get("jobId")  # 工作ID
    job_area = job_info.get("jobArea")  # 城市
    job_year = job_info.get("jobYear")  # 工龄
    job_degree = job_info.get("jobDegree")  # 学历
    job_time = job_info.get("jobTime")  # 工作发布时间
    # print(item.attr("sensorsdata"))
    item_top = item.ele('.joblist-item-top')
    # 岗位名称
    job_name = item_top.ele("tag:span@@class=jname text-cut").text
    # 工资
    salary = item_top.ele("tag:span@@class=sal shrink-0").text

    item_bot = item.ele(".joblist-item-bot")
    bl_node = item_bot.ele(".bl")
    # 公司名称
    company_name = bl_node.ele("tag:a").text

    span_list = bl_node.children("tag:span")
    # 行业
    industry = span_list[0].text
    # 公司类型
    comm_type = span_list[1].text
    # 公司人数
    comm_people = 0
    if len(span_list) > 2:
        comm_people = span_list[2].text

    sql = f"""
        insert into job.job_info (job_id, job_name, job_area, company_name, salary, industry, comm_type, comm_people, job_year, job_degree, job_time)
         values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
        """

    data = f"{job_id},{job_name},{job_area},{company_name},{salary},{industry},{comm_type},{comm_people},{job_year},{job_degree},{job_time}"
    with open(f"./{keyword}_data.csv", mode="a+", encoding="utf-8") as f:
        f.write(data + "\n")

    try:
        cursor.execute(sql,[job_id,job_name,job_area,company_name,salary,industry,comm_type,comm_people,job_year,job_degree,job_time])
        connection.commit()
    except Exception as e:
        connection.rollback()

    print(job_name, salary, company_name, industry, comm_type, comm_people)


def get_job_info(page):
    # 获取具体的岗位信息
    joblist_item = page.ele(".j_tabs ftop").next("tag:div").ele(".joblist").eles(".joblist-item")
    for job_item in joblist_item:
        parse_page_job_list(job_item)


def get_job_list(keyword):
    # 申请mysql客户端
    global connection
    connection = pymysql.connect(host=MYSQL_HOST, user=USER, password=PASSWOWD, database=DATABASE, charset="utf8")
    global cursor
    cursor = connection.cursor()

    try:
        current_page = 1
        page.get(f"https://we.51job.com/pc/search?keyword={keyword}&searchType=2&sortType=0&metro=")
        # 获取页码
        el_pager = page.ele(".el-pager")
        page_no = el_pager.ele("tag:li@@class=number active").text
        latest_page_no = el_pager.eles("tag:li")[7].text
        print(page_no)
        print(latest_page_no)
        print(f"-------当前页{current_page}----------")
        get_job_info(page)
        current_page += 1

        while True:
            # 换页
            if current_page < int(latest_page_no):
                el_pager = page.ele(".el-pager")
                el_pager.ele("tag:li@@class=number active").next().click()
                print(f"-------当前页{current_page}----------")
                get_job_info(page)
                current_page += 1
            else:
                break

    except Exception as e:
        return
    finally:
        connection.close()
        cursor.close()


if __name__ == '__main__':
    get_job_list(keyword)
