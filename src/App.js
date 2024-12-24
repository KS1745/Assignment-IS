import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // Function to fetch all users from the API
  const fetchUsers = () => {
    fetch("https://dummyapi.online/api/movies")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error fetching users:", error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-center text-3xl font-bold mb-8 text-indigo-700">
        User Profiles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            {/* Header with Profile Picture */}
            <div className="flex items-center p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                <img
                  src={user.picture.large}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold">
                  {user.name.first} {user.name.last}
                </h2>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>

            {/* Body with Full Details */}
            <div className="p-4 space-y-2">
              <div>
                <p className="text-gray-700">
                  <span className="font-bold">Gender:</span> {user.gender}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Age:</span> {user.dob.age}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Phone:</span> {user.phone}
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Location:</span>{" "}
                  {`${user.location.city}, ${user.location.state}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={fetchUsers}
          className="py-2 px-6 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
        >
          Load More Users
        </button>
      </div>
    </div>
  );
}

export default App;
