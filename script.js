// script.js
document.getElementById('processButton').addEventListener('click', () => {
  const groupsFile = document.getElementById('groupsFile').files[0];
  const roomsFile = document.getElementById('roomsFile').files[0];

  if (groupsFile && roomsFile) {
    // Parse the CSV files
    Promise.all([
      parseCSV(groupsFile),
      parseCSV(roomsFile)
    ]).then(([groupsData, roomsData]) => {
      // Perform the room allocation algorithm
      const allocatedRooms = allocateRooms(groupsData, roomsData);

      // Display the results
      displayResults(allocatedRooms);
    });
  } else {
    alert('Please upload both CSV files.');
  }
});

function parseCSV(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const rows = reader.result.trim().split('\n');
      const headers = rows[0].split(',');
      const result = [];
      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          obj[headers[j]] = row[j];
        }
        result.push(obj);
      }
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function allocateRooms(groupsData, roomsData) {
  const allocatedRooms = [];

  // Group the members by their group ID
  const groupedMembers = groupsData.reduce((acc, group) => {
    const groupId = group['Group ID'];
    if (!acc[groupId]) {
      acc[groupId] = {
        members: [],
        gender: group.Gender
      };
    }
    acc[groupId].members.push({ name: `Member ${group.Members}`, gender: group.Gender });
    return acc;
  }, {});

  // Allocate rooms based on the group ID and gender
  for (const room of roomsData) {
    const { 'Hostel Name': hostelName, 'Room Number': roomNumber, Capacity, Gender } = room;
    const availableMembers = groupedMembers[roomNumber]?.members.filter(member => member.gender === Gender);
    if (availableMembers && availableMembers.length <= parseInt(Capacity)) {
      allocatedRooms.push({
        hostelName,
        roomNumber,
        capacity: Capacity,
        members: availableMembers
      });
      // Remove the allocated members from the groupedMembers object
      groupedMembers[roomNumber].members = groupedMembers[roomNumber].members.filter(member => !availableMembers.includes(member));
    }
  }

  // Allocate remaining members to available rooms
  for (const groupId in groupedMembers) {
    const { members, gender } = groupedMembers[groupId];
    if (members.length > 0) {
      for (const room of roomsData) {
        const { 'Hostel Name': hostelName, 'Room Number': roomNumber, Capacity, Gender } = room;
        if (gender === Gender && members.length <= parseInt(Capacity)) {
          allocatedRooms.push({
            hostelName,
            roomNumber,
            capacity: Capacity,
            members: members
          });
          break;
        }
      }
    }
  }

  return allocatedRooms;
}

function displayResults(allocatedRooms) {
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = '';

  for (const room of allocatedRooms) {
    const { hostelName, roomNumber, capacity, members } = room;
    const roomElement = document.createElement('div');
    roomElement.classList.add('room');
    roomElement.innerHTML = `
      <h3>Hostel: ${hostelName}, Room: ${roomNumber}</h3>
      <p>Capacity: ${capacity}</p>
      <h4>Members:</h4>
      <ul>
        ${members.map(member => `<li>${member.name} (${member.gender})</li>`).join('')}
      </ul>
    `;
    resultContainer.appendChild(roomElement);
  }
}

function defineProperty() {
  var osccred = document.createElement("div");
  osccred.innerHTML =
    "A Project By <a href='https://github.com/Shruti192903' target=_blank>Shruti Arsode</a>";
  osccred.style.position = "absolute";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "12px";
  osccred.style.color = "#ccc";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

defineProperty();