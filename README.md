# Hospitality_Digitalization

### Overview
The Hospitality Digitalization project aims to develop a web application that facilitates the digitalization of the hospitality process for group accommodation. The application allows users to upload two CSV files containing group information and hostel details, and efficiently allocates rooms while ensuring group members with the same ID stay together and adhering to hostel capacities and gender-specific accommodations.

### Features
1. **CSV File Upload**: Users can upload two CSV files:
   - **Group Information CSV**: Contains information about groups with a common ID, including group ID, number of members, and gender (boys or girls).
   - **Hostel Information CSV**: Contains information about hostels and their room capacities, including hostel name, room number, room capacity, and gender accommodation (boys or girls).

2. **Room Allocation**: The application automatically allocates rooms based on the uploaded data, ensuring that:
   - Members of the same group (same ID) stay in the same room as much as possible.
   - Boys and girls stay in their respective hostels.
   - Room capacity is not exceeded.

3. **Output Generation**: The application generates an output file in CSV format, providing the room allocation details, including group ID, hostel name, room number, and members allocated.

#### Output File
![Output File](result.png)


