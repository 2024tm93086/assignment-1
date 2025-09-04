import tkinter as tk
from tkinter import messagebox
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')
