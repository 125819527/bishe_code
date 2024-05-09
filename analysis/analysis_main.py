import configparser
import os
import sys
import analyze_data
from analysis import input_data


class Analyze():
    process_fn_list = []
    analyze_fn_list = []
    chart_fn_list = []

    conf = configparser.ConfigParser()



    path = os.getcwd().replace('\\', '/')

    @classmethod
    def main(cls):
        script_path = os.path.realpath(__file__)
        script_dir = os.path.dirname(script_path)
        sys.path.append(script_dir)
        input_data.main()

        import process_data
        process_data.main()

        analyze_data.main()

        # test_analyze_data.main()


if __name__ == '__main__':
    pass
