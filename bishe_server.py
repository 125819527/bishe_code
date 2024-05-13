import logging
from datetime import timedelta
from flask import Flask, render_template, request, send_file, send_from_directory
from analysis import analysis_main, create_chart, interaction
from spider import spider_main, tool
from config.utils import get_job_info

# css不更新 右键Chrome刷新按钮，“硬性重新加载”或者更新一步“清空缓存并硬性重新加载”
REMOTE_HOST = "../static/js"

app = Flask(__name__)
# 解决缓存刷新问题
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = timedelta(seconds=2)


# 原日志
# logging.getLogger('werkzeug').setLevel(logging.ERROR)
# # 文件输出日志 自写日志
# handler = logging.FileHandler(filename='log.txt', mode='a')
# handler.setLevel(logging.ERROR)
# app.logger.addHandler(handler)


# @app.errorhandler(500)
# def internal_error(exception):
#     app.logger.error(exception)
#     return render_template('500.html'), 500


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/爬虫")
def ready_spider():
    return render_template('spider.html')


@app.route('/爬虫完成', methods=['POST'])
def get_spider():
    dict_parameter = dict(request.form)  # 获取页面参数
    spider_main.main(dict_parameter)  # 运行爬虫
    return app.send_static_file('./html/data.html')


@app.route("/爬虫结果")
def result_spider():
    return render_template('data.html')


@app.route("/分析", methods=['GET'])
def analyse():
    return render_template('a.html')


@app.route("/job_info", methods=['GET'])
def job_info():
    # 获取数据库列表数据
    dict_parameter = dict(request.values)  # 获取页面参数
    page, size = dict_parameter['page'], dict_parameter['size']
    return get_job_info(int(page), int(size))


@app.route("/analysis", methods=['GET'])
def salary_analysis():
    # 进行薪资预测
    dict_parameter = dict(request.values)  # 获取页面参数
    experience, grade, job_name = dict_parameter['experience'], dict_parameter['grade'], dict_parameter['job_name']
    return "8888"


chart = create_chart.main()  # 获取图表数据
js = ['echarts.min', 'echarts-gl.min', 'macarons', 'echarts-wordcloud.min', 'echarts-liquidfill.min']


@app.route("/展示")
def showresult():
    return render_template(
        "show.html",
        script_list=js,
        host=REMOTE_HOST
    )


@app.route('/chart/<id>')
def showresult1(id):  # 获取所有图表对象列表
    t = chart[eval(id)]
    return t.render_embed()


@app.route("/互动")
def eachother():
    if request.args.get('name'):
        result = interaction.find(request.args.get('name'))
        print(request.args.get('name'))
        return render_template('interaction.html', x=2, w=result[0], r=result[1])
    return render_template('interaction.html', x=1)


@app.route("/us")
def us():
    return render_template('us.html')


if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=8077)
