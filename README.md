# Hospitality_Digitalization

### Overview
The Hospitality Digitalization project aims to develop a web application that facilitates the digitalization of the hospitality process for group accommodation. The application allows users to upload two CSV files containing group information and hostel details, and efficiently allocates rooms while ensuring group members with the same ID stay together and adhering to hostel capacities and gender-specific accommodations.

### Features
1. **CSV File Upload**: Users can upload two CSV files:
   - **Group Information CSV**: Contains information about groups with a common ID, including group ID, number of members, and gender (boys or girls).
   - **Hostel Information CSV**: Contains information about hostels and their room capacities, including hostel name, room number, room capacity, and gender accommodation (boys or girls).

2. **Room Allocation**: 
   - allocateRooms function takes the parsed group information and hostel data as input.
   - It first groups the members by their group ID and gender.
   - Then, it iterates through the available rooms and tries to allocate the members to the rooms based on the following criteria:
    - Members of the same group (same ID) should stay in the same room as much as possible.
    - Boys and girls should stay in their respective hostels.
    - Room capacity should not be exceeded.
   - If there are any remaining members after the initial allocation, the function tries to allocate them to available rooms that match their gender.

3. **Output Generation**: The application generates an output file in CSV format, providing the room allocation details, including group ID, hostel name, room number, and members allocated.

### Dependencies
The project uses the following dependencies:
HTML, CSS, and JavaScript for the web application.
No external libraries or frameworks are used.

#### Output File
![Output File](result.png)

![Output File](result2.png)


#### Task by [TechFest IITB](https://ca.techfest.org/)


