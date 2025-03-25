from app import app, db  # Replace 'app' with the actual Flask app file name

with app.app_context():  # Use the Flask app context to run this inside your app
    db.create_all()  # Create all tables defined in your models
    print("Tables created successfully!")  # Confirmation message
