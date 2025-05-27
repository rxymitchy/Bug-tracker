const API_URL = 'http://localhost:5000/api/bugs';

// Helper function to handle responses
async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
}

// Get all bugs
export async function getBugs() {
  const response = await fetch(API_URL);
  return handleResponse(response);
}

// Create a new bug
export async function createBug(bugData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bugData),
  });
  return handleResponse(response);
}

// Get a single bug
export async function getBug(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return handleResponse(response);
}

// Update a bug
export async function updateBug(id, bugData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bugData),
  });
  return handleResponse(response);
}

// Delete a bug
export async function deleteBug(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return handleResponse(response);
}