from flask import Flask, render_template, request

app = Flask(__name__)
workouts = []


@app.route("/add-workout", methods=['POST'])
def add_workout():
    try:
        data = request.get_json()
        workout = data["workout"]
        duration_str = data["duration"]
        try:
            duration = int(duration_str)
            workouts.append({"workout": workout, "duration": duration})
            return {
                "msg": f"{workout} added successfully!"
            }
        except ValueError:
            return {
                "error": "Duration must be a number."
            }, 400
    except Exception as err:
        return {
            "error": "Please enter both workout and duration."
        }, 400


@app.route("/view-workouts", methods=['GET'])
def view_workouts():
    return {
        "workouts": workouts
    }


@app.route("/")
def index():
    return render_template('index.html')
