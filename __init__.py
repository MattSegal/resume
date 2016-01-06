from flask import Blueprint, render_template

resume_app = Blueprint('resume_app', __name__,
			template_folder='templates', 
			static_folder='static', static_url_path = '/resume_app')

@resume_app.route('/resume_new/')
def  resume():
    return render_template('resume.html')