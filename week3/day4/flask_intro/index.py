# Import Flask to allow us to create our app
from flask import Flask, render_template

app = Flask(__name__)    # Create a new instance of the Flask class called "app"

# @app.route('https://localhost:8080/')
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    # return 'Hello Python Students!'  # Return the string 'Hello World!' as a response
    # return '<h1>Wednesday</h1><div></div>'
    return render_template('index.html')


# for a route '/users/____/____', two parameters in the url get passed as username and idcopy
@app.route('/users/<usernamez>/<idz>')
def show_user_profile(usernamez, idz):

    print(usernamez)
    print(idz)

    # get data from db
    # write data to db
    # update data in db
    # delete data in db

    # custom logic

    user_info = [
        {'name': 'Michael', 'age': 35},
        {'name': 'John', 'age': 30},
        {'name': 'Mark', 'age': 25},
        {'name': 'KB', 'age': 27}
    ]


    # return "usernamez: " + usernamez + ", idz: " + idz
    return render_template('user.html', username_in_template=usernamez, id_in_template=idz, users=user_info)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
