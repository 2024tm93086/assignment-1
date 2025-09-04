def test_add_workout(client):
    response = client.post("/add-workout", json={
        "workout": "walking",
        "duration": "60"
    })
    assert response.status_code == 200
    assert response.json == {
        "msg": "walking added successfully!"
    }


def test_view_workouts(client):
    response = client.get("/view-workouts")
    assert response.status_code == 200
    assert response.json == {
        "workouts": [
            {
                "duration": 60,
                "workout": "walking"
            }
        ]
    }
