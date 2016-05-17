from flask import Flask, Blueprint, render_template

resume = Blueprint('resume', __name__,
            template_folder='templates', 
            static_folder='static', static_url_path = '/resume')

@resume.route('/resume/')
def show_resume():
    return render_template('resume.html')

if __name__ == "__main__":
    app = Flask(__name__)
    app.register_blueprint(resume)
    app.run(host= '0.0.0.0',debug=True)
