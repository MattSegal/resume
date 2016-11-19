from flask import Flask, render_template

app = Flask(__name__)

@app.route('/resume/')
def show_resume():
    return render_template('resume.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0',debug=True)
