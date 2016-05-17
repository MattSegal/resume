from flask import Flask, Blueprint, render_template

dev_resume = Blueprint('dev_resume', __name__,
            template_folder='templates', 
            static_folder='static', static_url_path = '/dev_resume/static')

@dev_resume.route('/resume/')
def show_resume():
    return render_template('resume.html')

if __name__ == "__main__":
    app = Flask(__name__)
    app.register_blueprint(dev_resume)
    app.run(host= '0.0.0.0',debug=True)
