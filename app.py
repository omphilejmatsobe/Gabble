from flask import Flask, render_template, url_for
app = Flask(__name__)


posts = [
            {
                "username" : "John Deppo",
                "title"    : "Hello",
                "content"  : "This is the first blog post of the day",
                "time"     : "time"
            }
        ]

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/about")
def about():
    return "About"

@app.route("/contacts")
def contacts():
    return "Contacts"

@app.route("/profile")
def profile():
    return "Profile"

if __name__ == "__main__":
    app.run(debug=True)
