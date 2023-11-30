**API for States and Cities in Mexico - Readme**

## Introduction

This API is designed to provide information about states and cities in Mexico. It is built using Docker and Node.js, making it easy to deploy and scale. Additionally, the infrastructure can be automatically set up on AWS ECS (Elastic Container Service) using Terraform scripts.

## Prerequisites

Before running the API, ensure you have the following installed:

- Docker: To build and run the containerized Node.js application.
- Node.js: To execute the application locally for development and testing.
- Terraform: To deploy the API to AWS ECS.

## Setup and Configuration

### Local Development

1. Clone the repository to your local machine.
2. Navigate to the root folder of the API.
3. Install the Node.js dependencies:

   ```bash
   npm install
   ```

4. Run the API locally:

   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

### Docker Build and Run

1. Make sure you have Docker installed and running.
2. Build the Docker image:

   ```bash
   docker build -t mexico-api .
   ```

3. Run the Docker container:

   ```bash
   docker run -p 3000:3000 -d mexico-api
   ```

   The API will be accessible at `http://localhost:3000`.

### AWS ECS Deployment

The following steps assume you have an AWS account set up and have the AWS CLI installed with appropriate credentials configured.

1. Navigate to the `terraform` directory in the repository.
2. Initialize Terraform:

   ```bash
   terraform init
   ```

3. Review the deployment plan:

   ```bash
   terraform plan -var-file=dev.tfvars -out dev.tfplan
   ```

4. Apply the Terraform configuration to create the ECS cluster and deploy the API:

   ```bash
   terraform apply dev.tffplan
   ```

## API Endpoints

The API provides the following endpoints:
For states:

1. **GET /state/getAll**: Retrieve a list of all states in Mexico.
2. **GET /state/getByName/:name**: Retrieve the details of the specified state.
3. **POST /state/create**: Create a state with the data specified in the body.
4. **PATCH /state/patch**: Patch a state with the data specified in the body.
5. **PATCH /state/delete/:name**: Patch a state with the data specified in the body.

For cities:

1. **GET /city/getAll**: Retrieve a list of all cities in Mexico.
2. **GET /state/getByName/:name**: Retrieve the details of the specified cities.
3. **POST /state/create**: Create a cities with the data specified in the body.
4. **PATCH /state/patch**: Patch a cities with the data specified in the body.
5. **PATCH /state/delete/:name**: Patch a cities with the data specified in the body.

## Response Format

The API returns data in JSON format with the following structure:

```json
[
   {
      "name": "Distrito Federal",
      "code": "MX-DIF",
      "subdivision": "federal district"
   },
   {
      "name": "Aguascalientes",
      "code": "MX-AGU",
      "subdivision": "state"
   },
   {
      "name": "Baja California",
      "code": "MX-BCN",
      "subdivision": "state"
   },
   {
      "name": "Baja California Sur",
      "code": "MX-BCS",
      "subdivision": "state"
   },
   {
      "name": "Campeche",
      "code": "MX-CAM",
      "subdivision": "state"
   },
   {
      "name": "Chiapas",
      "code": "MX-CHP",
      "subdivision": "state"
   },
   {
      "name": "Chihuahua",
      "code": "MX-CHH",
      "subdivision": "state"
   },
```

## Error Handling

In case of errors, the API returns a JSON response with an appropriate error message and status code.

## Contribution

Contributions to this API are welcome! If you encounter any issues or have suggestions for improvements, feel free to create a pull request or open an issue.
