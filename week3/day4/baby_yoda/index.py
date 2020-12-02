# Import Flask to allow us to create our app
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/dashboard')
def show_dashboard():
    return render_template('dashboard.html')


if __name__ == "__main__":
    app.run(debug=True)
