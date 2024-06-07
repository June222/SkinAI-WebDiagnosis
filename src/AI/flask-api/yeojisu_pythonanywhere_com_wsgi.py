# This file contains the WSGI configuration required to serve up your
# web application at http://<your-username>.pythonanywhere.com/
# It works by setting the variable 'application' to a WSGI handler of some
# description.
#
# The below has been auto-generated for your Flask project

import sys
import os
# add your project directory to the sys.path
project_home = '/home/yeojisu/mysite'
if project_home not in sys.path:
    sys.path = [project_home] + sys.path

# 사용자 패키지 경로 추가
sys.path.append(os.path.expanduser('/home/yeojisu/.local/lib/python3.10/site-packages'))

# 애플리케이션 경로 추가
sys.path.append(os.path.expanduser('/home/yeojisu/mysite'))

# import flask app but need to call it "application" for WSGI to work
from app import app as application  # noqa
