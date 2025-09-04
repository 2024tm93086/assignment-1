# Use official Python base image
FROM python:3.10

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy app code
COPY . .

# Expose Flask port
EXPOSE 5000

# Run the Flask app
CMD ["waitress-serve", "--host=0.0.0.0", "--port=5000", "app:app"]
